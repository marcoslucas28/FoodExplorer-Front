import styled from 'styled-components'

import { DEVICE } from '../../styles/device';

export const Container = styled.header`
    background-color: ${({theme}) => theme.COLORS.DARK_700};
    padding: 2rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    grid-area: header;

    .logout {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-size: 10rem;
        cursor: pointer;

        ${DEVICE.lg} {
            font-size: 3.5rem;
        }
    }

    ${DEVICE.lg} {
        justify-content: center;
        gap: 3.2rem;

        input {
            width: 100%;
            margin: 0 auto;
        }
    }
    
`

export const Title = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    text-align: center;
    max-width: 25rem;
    width: auto;
    cursor: pointer;

    ${DEVICE.lg} {
        flex-direction: column;
        gap: 0;
    }

    div {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    img {
        width: 2.5rem;
    }

    h1 {
        font-family: 'Roboto';
        font-size: 2.2rem;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    span {
        color: ${({theme}) => theme.COLORS.CAKE_200};
        font-size: 1.6rem;

        ${DEVICE.md} {
            font-size: 1.4rem;
            align-self: flex-end;
            font-weight: 300;
        }
    }
`

export const Menu = styled.button`
    background: none;
    border: none;

    svg {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-size: 3.5rem;
        font-weight: bold;
    }
`

export const Orders = styled.button`
    background: none;
    border: none;
    position: relative;


    img {
        width: 2.6rem;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    span {
        background-color: ${({theme}) => theme.COLORS.TOMATO_100};
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        position: absolute;
        top: 0;
        right: 0;
        margin-top: -1.3rem;
        margin-right: -1rem;
        border-radius: 50%;
        padding: 3px 7px;
        box-sizing: content-box;
        font-size: 1.4rem;
        font-weight: 500;
    }
`

export const NewButton = styled.button`
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    border: none;
    width: 100%;
    max-width: 20rem;
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
    }
`;