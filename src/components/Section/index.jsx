import { Container } from './styles';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card } from '../Card';

import { api } from '../../services/api';

export function Section({ title, dishes, category, handleToggleFavorite, ...rest }) {
  const [showNavigation, setShowNavigation] = useState(window.innerWidth > 767)
  const navigate = useNavigate()

  const [quantities, setQuantities] = useState({})

  useEffect(() => {
    const handleResize = () => {
      setShowNavigation(window.innerWidth > 767)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function handleAdd(dishId) {
    setQuantities(prev => ({
      ...prev,
      [dishId]: (prev[dishId] || 0) + 1
    }))
  }

  function handleRemove(dishId) {
    setQuantities(prev => ({
      ...prev,
      [dishId]: Math.max((prev[dishId] || 0) - 1, 0)
    }))
  }

  async function includeItem(dishId) {
    const quantity = quantities[dishId] || 0
    if (quantity > 0) {
      await api.post("/order-items", {
        dish_id: dishId,
        quantity
      });

      setQuantities(prev => ({
        ...prev,
        [dishId]: 0
      }))
    } else {
      alert("Selecione a quantidade antes de incluir o item.")
    }
  }

  return <Container {...rest}>
    <h2>{title}</h2>

    <Swiper
      modules={[Navigation, Pagination]}
      navigation={showNavigation}
      pagination={{clickable: true}}
      spaceBetween={10}
      slidesPerView={1}
    >
      {dishes.map(dish => (
        <SwiperSlide key={dish.id} >
          <Card 
            data={dish} 
            goToDetails={() => navigate(`/details/${dish.id}`)} 
            handleAdd={() => handleAdd(dish.id)} 
            handleRemove={() => handleRemove(dish.id)} 
            includeItem={() => includeItem(dish.id)} 
            quantity={quantities[dish.id] || 0}
            handleToggleFavorite={() => handleToggleFavorite(dish.id, category)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </Container>;
}