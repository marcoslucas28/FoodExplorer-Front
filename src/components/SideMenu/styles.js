import styled from 'styled-components'
import { ButtonText } from '../ButtonText'

export const Container = styled.aside`
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.COLORS.DARK_400};
    transition: transform .4s ease-in-out;
    transform: ${({isVisible}) => isVisible ? `translateX(0)` : `translateX(-100%)`};
`

export const Header = styled.header`
    width: 100%;
    height: 20vh;
    background-color: ${({theme}) => theme.COLORS.DARK_700};
    display: flex;
    gap: 1.6rem;
    padding-left: 3rem;
    align-items: center;
    text-align: center;
    justify-content:  flex-start;

    span {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-size: 2.16rem;
        font-family: 'Roboto', sans-serif;
    }
`

export const Close = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        font-size: 4rem;
        color: #FFFFFF;
    }
`

export const Content = styled.div`
    margin: 3.6rem auto 0;
    width: 90%;
`

export const List = styled.div`
    margin-top: 3.6rem;
    width: 100%;
`

export const Opition = styled(ButtonText)`
    padding: 1rem;
    border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
    width: 100%;
    text-align: start;
    
`