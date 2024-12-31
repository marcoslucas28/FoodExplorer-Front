import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    border-radius: 8px;
    height: 4.8rem;
    width: 94%;
    display: flex;
    gap: 0.5rem;
    padding: 1rem 1rem;
    justify-content: center;
    align-items: center;
    overflow: visible;
    box-sizing: content-box;

    > input {
        background: transparent;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-size: 1.6rem;
        width: 100%;
        overflow: visible;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.LIGHT_500};
            font-family: 'Roboto', sans-serif;
        }
    }

    > svg {
        font-size: 2.4rem;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
`