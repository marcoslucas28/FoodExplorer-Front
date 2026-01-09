import styled from 'styled-components'

import { DEVICE } from '../../styles/device'

export const Container = styled.footer`
    width: 100%;
    height: 10vh;
    background-color: ${({theme}) => theme.COLORS.DARK_600};
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: footer;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    align-items: center;
`

export const Title = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

    img {
        width: 2.2rem;

        ${DEVICE.md}{
            width: 3rem;
        }
    }

    h1 {
        font-size: 1.526rem;
        color: ${({theme}) => theme.COLORS.LIGHT_700};
        font-family: 'Roboto';

        ${DEVICE.md}{
            font-size: 2rem;
        }
    }
`

export const Copyright = styled.div`
    font-size: 1.2rem;
    color: ${({theme}) => theme.COLORS.LIGHT_200};
`