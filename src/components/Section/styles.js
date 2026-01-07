import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  z-index: 0;
  padding-left: 2rem; 
  padding-right: 2rem;

  position: relative;
  z-index: 0; 

  h2 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

   .swiper {
    width: 100%;
    height: 100%;
    padding-bottom: 50px; 
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