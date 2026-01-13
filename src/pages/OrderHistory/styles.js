import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;

    grid-template-rows: 15vh auto 10vh;

    grid-template-areas: 'header' 'content' 'footer';
`

export const Content = styled.main`
    padding: 5rem 0;
    width: 90%;
    max-width: 40rem;
    grid-area: content;
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    margin: 0 auto;

    > h2 {
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        font-size: 2rem;
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