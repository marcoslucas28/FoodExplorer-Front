import styled from 'styled-components';

import { DEVICE } from "../../styles/device"

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 0;
  padding-left: 2rem; 
  padding-right: 0;
  max-width: 80%;
  margin: 0 auto;
  cursor: grab;

  :active {
    cursor: grabbing;
  }

  ${DEVICE.md} {
    padding-left: 0;
    padding-right: 0;
    overflow: hidden;
  }

  position: relative;
  z-index: 0; 

  

  h2 {
    font-size: 2.3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 2.4rem;
    font-weight: 400;

    ${DEVICE.lg}{
      font-size: 2.6rem;
      
    }
  }

   .swiper {
    width: 100%;
    height: 100%;
    padding-bottom: 50px; 
    overflow: visible;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 80px;
      pointer-events: none;
      z-index: 2;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &::before {
      left: 0;
      background: ${({ theme }) => theme.COLORS.GRADIENT_100};
    }

    &::after {
      right: 0;
      rotate: 180deg;
      background: ${({ theme }) => theme.COLORS.GRADIENT_100};
    }

    ${DEVICE.md} {
      &::before,
      &::after {
        opacity: 1;
      }
    }
  }

  .empty_state {
    padding: 2rem;
    text-align: center;

    svg {
      font-size: 3rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    p {
      font-size: 1.4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  swiper-pagination {
    bottom: 0;
    padding-bottom: 10px;  
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    @media (max-width: 768px) {
        display: none;
    }
  }
  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  
  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`