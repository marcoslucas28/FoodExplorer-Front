import { Container, Content, EmptyState } from "./styles"

import { useMemo } from 'react'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { OrderCard } from '../../components/OrderCard'
import { SideMenu } from '../../components/SideMenu'

import { useBreakpoint } from '../../hooks/useBreakpoint'
import { SCREEN } from '../../styles/device'

import { useState, useEffect } from 'react'

import { api } from '../../services/api'

import img from '../../assets/empty-box.png'

export function OrderHistory(){
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const [orders, setOrders] = useState([])

    const isDesktop = !!useBreakpoint(`(min-width: ${SCREEN.lg})`);

    function toggleMenu(){
        setIsMenuVisible(!isMenuVisible)
    }

    useEffect(() => {
        async function fetchOrders(){
             const response = await api.get("/orders") 
             const data = await response.data 
             setOrders(data) 
        }

        fetchOrders()
        
    }, [])

    const STATUS_PRIORITY = {
        pending: 1,
        preparing: 2,
        Preparing: 2,
        delivered: 3
    }


    const orderedOrders = useMemo(() => {
        return [...orders].sort((a, b) => {
            const statusDiff =
            STATUS_PRIORITY[a.status] - STATUS_PRIORITY[b.status]

            if (statusDiff !== 0) return statusDiff

            return new Date(b.created_at) - new Date(a.created_at)
        })
    }, [orders])

    return(
        <Container>
            {!isDesktop && <SideMenu isVisible={isMenuVisible} onCloseMenu={() => setIsMenuVisible(false)} />}
            <Header isMenuVisible={isMenuVisible} onMenuClick={toggleMenu} />
            <Content>
                <h2>Histórico de pedidos</h2>

                { orders.length === 0 ? (
                        <EmptyState>
                            <img src={img} alt="Nada encontrado" />
                            <span>Você não tem nenhum pedido ainda</span>
                        </EmptyState>
                    ) :
                    (orderedOrders.map(order => (
                        <OrderCard key={order.id} data={order} />
                    )))
                }
            </Content>
            <Footer />
        </Container>
    )
}