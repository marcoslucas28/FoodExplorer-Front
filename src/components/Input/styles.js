import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    border-radius: 8px;
    height: 4.8rem;
    width: 100%;
    display: flex;
    gap: 1.4rem;
    padding: 1.2rem 1.4rem 1.2rem 1.4rem;
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
            font-size: 1.6rem;
        }
    }

    > svg {
        font-size: 2.4rem;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
`