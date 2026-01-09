import styled from 'styled-components'

import { DEVICE } from '../../styles/device';

import bannerImgSmall from '../../assets/banner-img-S.png';
import bannerImgLarge from '../../assets/banner-img-L.png';

export const Container = styled.div`
    height: auto;
    width: 100%;

    display: grid;

    grid-template-rows: 15vh auto 10vh;

    grid-template-areas: 'header' 'content' 'footer';
`

export const Content = styled.main`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  overflow: hidden;
  width: 100%;
  padding: 2rem 0;
`


export const HeroSection = styled.section`
   width: 100%;
   margin-bottom: 6.2rem;
   padding: 0 2rem;

  .banner-wrapper {
    ${DEVICE.lg} {
      min-width: 100%;
      margin: 17.2rem 1rem 0;
    }
  }

  .banner-content {
    width: calc(100% - 5.2rem);

    min-height: 12rem;
    margin: 4.4rem 1.6rem 0 3.6rem;

    padding-top: 3.6rem;
    padding-right: 1.6rem;

    position: relative;

    text-align: center;

    background: ${({ theme }) => theme.COLORS.GRADIENT_200};
    border-radius: 2.9px;

    ${DEVICE.ssm} {
      padding-left: 15.3rem;
      text-align: left;
    }

    > h3 {
      font-size: 1.8rem;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      padding-bottom: 4px;
    }

    > p {
      font-family: 'Poppins';
      font-size: 1.2rem;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      padding-bottom: 1.6rem;
    }

    .banner-img {

      ${DEVICE.ssm} {
        background: left top / cover no-repeat url(${bannerImgSmall});
        width: 20rem;
        min-height: 14.9rem;
        height: 120%;

        position: absolute;

        bottom: 0;
        left: -3rem;

        animation-name: leftSlide;
        animation-duration: 1s;
      }
    }

    @keyframes leftSlide {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0)
      }
    }

    ${DEVICE.lg} {
      max-width: 112rem;
      min-height: 26rem;

      margin: 0 auto;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;

      > h3 {
        font-size: 4rem;
        width: 58%;

        font-style: normal;
        font-weight: 500;
        font-size: 4rem;
        line-height: 140%;
      }

      > p {
        font-size: 1.6rem;
        width: 58%;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 100%;
      }

      .banner-content {
        margin: 0 auto;
      }

      .banner-img {
        background: left bottom / contain no-repeat url(${bannerImgLarge});
        max-width: 65.6rem;
        width: 60%;
        height: 41.2rem;
        bottom: -1.4rem;
        left: -7rem;
      }
    }

  }

`;
