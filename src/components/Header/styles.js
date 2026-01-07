import styled from 'styled-components'

export const Container = styled.header`
    background-color: ${({theme}) => theme.COLORS.DARK_700};
    padding: 2rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    grid-area: header;
`

export const Title = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    text-align: center;

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