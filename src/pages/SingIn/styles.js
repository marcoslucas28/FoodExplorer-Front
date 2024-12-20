import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7.369rem;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Title = styled.div`
    display: flex;
    gap: 1.074rem;

    h1 {
        font-size: 3.724rem;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
    }

    svg{
        width: 4.331rem;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    overflow: visible;
    justify-content: center;
    align-items: center;

    > div {
        box-sizing: content-box;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        overflow: visible;
        width: 100%;
        align-items: start;
        justify-content: start;

        > span {
            font-family: 'Roboto', sans-serif;
            color: ${({theme}) => theme.COLORS.LIGHT_400};
            font-size: 1.6rem;
            width: 100%;
        }
    }
`