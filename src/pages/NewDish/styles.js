import styled from 'styled-components'

import { DEVICE } from '../../styles/device'

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;

    grid-template-rows: 15vh auto 10vh;

    grid-template-areas: 'header' 'content' 'footer';
`

export const Content = styled.main`
    width: 85%;
    margin: 3rem auto 5.3rem;
    grid-area: content;

    h1 {
        margin: 2.4rem 0;
        font-weight: 300;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    > div {
        margin-bottom: 1.6rem;
        display: flex;
        flex-direction: column;

        > span{
            font-size: 1.6rem;
            font-family: 'Roboto';
            color: ${({theme}) => theme.COLORS.LIGHT_400};
            margin-bottom: 1.6rem;
        }
    }

    ${DEVICE.lg}{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3.6rem;

        .item-1,
        .item-2,
        .item-3 {
        
        }

        .item-4 {
            grid-column: span 2;
        }

        .item-5 {
            grid-column: span 1;
        }

        .item-6 {
            grid-column: span 3;
        }

        .item-7 {
            grid-column: 3 / 4;
            justify-self: end;
        }

    }
`


export const InputText = styled.input`
    background-color: ${({theme}) => theme.COLORS.DARK_800};
    height: auto;
    padding: 1.5rem 0 1.5rem 1.4rem;
    font-size: 1.6rem;
    width: 95%;
    overflow: visible;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    overflow: visible;
    box-sizing: content-box;
    border-radius: 8px;
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    &::placeholder{
        color: ${({theme}) => theme.COLORS.LIGHT_500};
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
    }
`

export const InputOption = styled.select`
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    height: auto;
    padding: 1.6rem;
    font-size: 1.6rem;
    width: 90%;
    overflow: visible;
    box-sizing: content-box;
    border-radius: 8px;
    border: none;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    cursor: pointer;

    &:active {
        border: none;
    }

    &:focus {
        border: 0;
        outline: none;
    }
`
export const Ingredients = styled.div`
    width: 100%;
    padding: 8px 4px;
    background-color: ${({theme}) => theme.COLORS.DARK_800}; 
    display: flex;
    gap: 1.6rem;
    flex-wrap: wrap;
    border-radius: 8px;

    ${DEVICE.lg}{
        flex-wrap: nowrap;
        overflow-x: scroll;
    }
`