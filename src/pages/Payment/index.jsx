import { Container, Content, Card, Orders, EmptyState } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'

import { SideMenu } from '../../components/SideMenu'

import { useBreakpoint } from '../../hooks/useBreakpoint'
import { SCREEN } from '../../styles/device'

import { api } from '../../services/api'

import { useState, useEffect } from 'react'

import { notifySuccess, notifyError } from '../../utils/toast'

import img from '../../assets/empty-box.png'

import { useOrders } from '../../hooks/orders'

export function Payment(){
    const [totalPrice, setTotalPrice] = useState(0)
    const [items, setItems] = useState([])

    const [isMenuVisible, setIsMenuVisible] = useState(false)
    
    const isDesktop = !!useBreakpoint(`(min-width: ${SCREEN.lg})`);

    const { fetchOrderCount } = useOrders()

    function toggleMenu(){
        setIsMenuVisible(!isMenuVisible)
    }

    async function deleteOrder(id, price){
        try {
            await api.delete(`/order-items/${id}`)
            fetchOrderCount()

            const newItems = items.filter(item => item.id !== id)
            setItems(newItems)
            setTotalPrice(totalPrice => totalPrice - price)

            notifySuccess("Pedido removido")
        } catch (error) {
            if(error.response){
                notifyError(error.response.data.message)
            }else {
                notifyError("Houve um erro inesperado")
            }
        }

    }

    async function handleCheckout(){
        const response = await api.post("/payment")

        const data = await response.data

        if(data.url){
            window.location.href = data.url
        }
    }
    

    useEffect(() => {
        async function fetchDishes(){
            const response = await api.get("/orders/pending")

            const { total_price, items } = response.data

            setItems(items)
            setTotalPrice(total_price)
        }

        fetchDishes()
    }, [])



    return(
        <Container>
            {!isDesktop && <SideMenu isVisible={isMenuVisible} onCloseMenu={() => setIsMenuVisible(false)} />}
            <Header isMenuVisible={isMenuVisible} onMenuClick={toggleMenu} />
            <Content>
                <Orders>
                    <h2>Meu pedido</h2>

                    <div>
                        { items.length === 0 ? (
                            <EmptyState>
                                <img src={img} alt="Nada encontrado" />
                                <span>Você não tem nenhum pedido ainda</span>
                            </EmptyState>
                        ) :
                            (items.map(order => (
                                <Card key={order.id}>
                                    <img src={api.defaults.baseURL + '/files/' + order.dish_image} alt={order.dish_name} />
                                    <div>
                                        <h3>
                                            {order.dish_name}
                                        </h3>

                                        <p onClick={() => deleteOrder(order.id, order.price)}>Excluir</p>
                                    </div>
                                </Card>
                            )))
                        }

                    </div>
                        <p>
                            Total: R$ {totalPrice.toFixed(2)}
                        </p>
                </Orders>
                <Button onClick={handleCheckout} title="Pagar" disabled={items.length === 0} />
            </Content>
            <Footer />
        </Container>
    )
}