import styled from 'styled-components';

import { DEVICE } from '../../styles/device'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;

    display: grid;

    grid-template-rows: 15vh auto 10vh;

    grid-template-areas: 'header' 'content' 'footer';
`;

export const Content = styled.main`
    grid-area: content;

    width: 80%;
    padding: 2rem 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.6rem;
    margin: 0 auto;

    ${DEVICE.lg}{
        flex-direction: row;
        gap: 5rem;
    }

    img {
        width: 20rem;

        ${DEVICE.lg}{
            width: 35rem;
        }
    }


`;

export const DetailsContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 4.8rem;

    .adminButton {
        max-width: 20rem;
    }

    .detailsText {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        gap: 2.4rem;

        ${DEVICE.lg}{
            text-align: start;
            align-items: baseline;
        }

        h2 {
            font-size: 2.3rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-weight: 500;
        }

        p {
            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            text-align: center;
            line-height: 2.6rem;

            ${DEVICE.lg}{
                text-align: start;
            }
        }

        section {
            display: flex;
            align-items: center;
            gap: 2.4rem;
            flex-wrap: wrap;
            max-height: 15rem;
            overflow-y: auto;

            ${DEVICE.lg}{
            }
        }
    }

    .addItens {
        display: flex;
        gap: 1.6rem;
        justify-content: center;
        align-items: center;
        width: 100%;

        > div {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-size: 2rem;
            font-family: 'Roboto', sans-serif;
            width: 100%;

            ${DEVICE.lg}{
                font-size: 2.4rem;
                font-weight: 300;
            }

            .icon2 {
                cursor: pointer;
                font-size: 2rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
                font-weight: 100;

                ${DEVICE.lg}{
                    font-size: 2.5rem;
                }
            }
        }

        ${DEVICE.lg}{
            gap: 2rem;
        }
    }
`

export const IngredientsItems = styled.div`
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 0.8rem;
    padding: 0.4rem 0.8rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
`

export const NewButton = styled.button`
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    border: none;
    width: 100%;
    font-size: 1.6rem;
    padding: 1.2rem 0;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    border-radius: 5px;
    height: 30px;
    gap: 7px;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    img {
        width: 2rem;

        ${DEVICE.lg}{
            display: none;
        }
    }

    ${DEVICE.lg}{
        max-width: 25rem;
    }
`;