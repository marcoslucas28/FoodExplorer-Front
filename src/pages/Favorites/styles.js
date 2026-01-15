import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    height: 100vh;
    width: 100%;

    grid-template-rows: 15vh auto 10vh;

    grid-template-areas: 'header' 'content' 'footer';
`

export const Content = styled.main`
    grid-area: content;
    width: 90%;
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin: 0 auto;

    > p {
        padding: 1.6rem;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-size: 2rem;
    }
    
    > h2 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 2.2rem;
        margin-bottom: 2rem;
    }
`

export const Card = styled.div`
    display: flex;
    gap: 1.3rem;
    padding: 1.6rem 0;
    align-items: center;
    cursor: pointer;

    > img {
        width: 30%;
    }

    > div {
        text-align: start;

        > h3 {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-size: 2rem;
            font-weight: 500;
        }

        > p {
            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.TOMATO_400}
        }
    }
`

export const EmptyState = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    img {
        width: 40%;
    }

    span {
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        font-size: 1.6rem;
        text-align: center;
    }
`