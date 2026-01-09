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

import { FiSearch } from 'react-icons/fi';

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

  useEffect(() => {
    const initialQuantities = {}
    dishes.forEach(dish => {
      initialQuantities[dish.id] = 1
    })
    setQuantities(initialQuantities)
  }, [dishes])

  function handleAdd(dishId) {
    setQuantities(prev => ({
      ...prev,
      [dishId]: (prev[dishId] || 0) + 1
    }))
  }

  function handleRemove(dishId) {
    setQuantities(prev => ({
      ...prev,
      [dishId]: Math.max((prev[dishId] || 0) - 1, 1)
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

    {dishes.length === 0 ? (
      <div className='empty_state'>
        <FiSearch />
        <p>Nenhum prato encontrado nesta categoria.</p>
      </div>
    ) : (
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={showNavigation}
        pagination={{ clickable: true }}
        centeredSlides={true}
        centeredSlidesBounds={true}
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1.3,
            centeredSlides: false,
            initialSlide: 0,
          },
          425: {
            slidesPerView: 1.5,
            centeredSlides: false,
            initialSlide: 0,
          },
          768: {
            slidesPerView: 2.2,
            centeredSlides: true,
            initialSlide: Math.floor(dishes.length / 2),
          },
        }}
      >
        {dishes.map(dish => (
          <SwiperSlide key={dish.id} >
            <Card 
              data={dish} 
              goToDetails={() => navigate(`/details/${dish.id}`)} 
              handleAdd={() => handleAdd(dish.id)} 
              handleRemove={() => handleRemove(dish.id)} 
              includeItem={() => includeItem(dish.id)} 
              quantity={quantities[dish.id] || 1}
              handleToggleFavorite={() => handleToggleFavorite(dish.id, category)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    )}
  </Container>;
}