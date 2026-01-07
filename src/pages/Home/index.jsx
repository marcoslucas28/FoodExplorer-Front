import { Container, Content, HeroSection } from './styles'

import { Header } from '../../components/Header'
import { SideMenu } from '../../components/SideMenu'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'

import { useState, useEffect } from 'react'

import { api } from '../../services/api'

export function Home(){
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const [mealsDishes, setMealsDishes] = useState([])
    const [dessertsDishes, setDessertsDishes] = useState([])
    const [drinksDishes, setDrinksDishes] = useState([])

    const [searchTerm, setSearchTerm] = useState("")

    async function fetchMealsDishes(name) {
        const response = await api.get(`/dishes?category=meals${name ? `&name=${name}` : ''}`)
        setMealsDishes(response.data)
    }

    async function fetchDessertsDishes(name) {
        const response = await api.get(`/dishes?category=desserts${name ? `&name=${name}` : ''}`)
        setDessertsDishes(response.data)
    }

    async function fetchDrinksDishes(name) {
        const response = await api.get(`/dishes?category=drinks${name ? `&name=${name}` : ''}`)
        setDrinksDishes(response.data)
    }

    async function handleToggleFavorite(dishId, category) {
        try {
            const dish = [...mealsDishes, ...dessertsDishes, ...drinksDishes].find(d => d.id === dishId);
            if (!dish) return;

            if (dish.isFavorite) {
                await api.delete(`/favorites/${dishId}`);
            } else {
                await api.post(`/favorites/${dishId}`);
            }

            // Atualizar o estado do dish
            const updateDishes = (dishes) => dishes.map(d => d.id === dishId ? { ...d, isFavorite: !d.isFavorite } : d);

            if (category === 'meals') {
                setMealsDishes(updateDishes);
            } else if (category === 'desserts') {
                setDessertsDishes(updateDishes);
            } else if (category === 'drinks') {
                setDrinksDishes(updateDishes);
            }
        } catch (error) {
            console.error('Erro ao alternar favorito:', error);
        }
    }

    useEffect( () => {

        async function fetchDishesBySearch() {
            await fetchMealsDishes(searchTerm)
            await fetchDessertsDishes(searchTerm)
            await fetchDrinksDishes(searchTerm)
        }
        fetchDishesBySearch()
    }, [searchTerm])
    function toggleMenu(){
        setIsMenuVisible(!isMenuVisible)
    }

    function handleSearchDishes(e) {
        setSearchTerm(e.target.value)
    }

    return(
        <Container>
            <SideMenu isVisible={isMenuVisible} onCloseMenu={() => setIsMenuVisible(false)} onSearchDishes={handleSearchDishes} />
            <Header isMenuVisible={isMenuVisible} onMenuClick={toggleMenu} />
            <Content>
                <HeroSection>
                    <div className="banner-wrapper">
                        <div className="banner-content">
                            <div className="banner-img"></div>
                            <h3>Sabores inigualáveis</h3>
                            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                        </div>
                    </div>
                </HeroSection>
                <Section title="Refeições" dishes={mealsDishes} category="meals" handleToggleFavorite={handleToggleFavorite} />
                <Section title="Sobremesas" dishes={dessertsDishes} category="desserts" handleToggleFavorite={handleToggleFavorite} />
                <Section title="Bebidas" dishes={drinksDishes} category="drinks" handleToggleFavorite={handleToggleFavorite} />
            </Content>
            <Footer />
        </Container>
    )
}