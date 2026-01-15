import { Card, Container, Content, EmptyState } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { SideMenu } from '../../components/SideMenu'

import { useBreakpoint } from '../../hooks/useBreakpoint'
import { SCREEN } from '../../styles/device'

import { api } from '../../services/api'

import { useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react'

import img from '../../assets/empty-box.png'

export function Favorites(){
    const [items, setItems] = useState([])
    const navigate = useNavigate()

    const [isMenuVisible, setIsMenuVisible] = useState(false)
    
    const isDesktop = !!useBreakpoint(`(min-width: ${SCREEN.lg})`);

     function toggleMenu(){
        setIsMenuVisible(!isMenuVisible)
    }

    async function deleteFavorite(id){
        await api.delete(`/favorites/${id}`)
        setItems(prev => prev.filter(dish => dish.id !== id))
    }

    useEffect(() => {
        async function fetchFavorites(){
            const response = await api.get("/favorites")

            setItems(response.data)
        }

        fetchFavorites()
    }, [])

    return(
        <Container>
            {!isDesktop && <SideMenu isVisible={isMenuVisible} onCloseMenu={() => setIsMenuVisible(false)} />}
            <Header isMenuVisible={isMenuVisible} onMenuClick={toggleMenu} />
            <Content>
                <h2>Meus favoritos</h2>

                <div>
                    { items.length === 0 ? (
                            <EmptyState>
                                <img src={img} alt="Nada encontrado" />
                                <span>Você não tem nenhum prato favorito ainda.</span>
                            </EmptyState>
                        ) :
                        (items.map(dish => (
                            <Card key={dish.id}>
                                <img onClick={() => navigate(`/details/${dish.id}`)} src={api.defaults.baseURL + '/files/' + dish.image} alt={dish.name} />
                                <div>
                                    <h3 onClick={() => navigate(`/details/${dish.id}`)}>
                                        {dish.name}
                                    </h3>
                        
                                    <p onClick={() => deleteFavorite(dish.id)}>Remover dos favoritos</p>
                                </div>
                            </Card>
                        )))
                    }
                </div>
                
            </Content>
            <Footer />
        </Container>
    )
}