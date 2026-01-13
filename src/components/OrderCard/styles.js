import styled from "styled-components";

export const Container = styled.div`
    padding: 0.8rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    width: 100%;

    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    font-size: 1.6rem;
    border-radius: 8px;
    border: 2px solid ${({theme}) => theme.COLORS.DARK_1000};

    .status {
        display: flex;
        gap: 8px;
    }
`

export const Box = styled.div`
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${({ theme, $color }) => $color ? theme.COLORS[$color] : theme.COLORS.TOMATO_100}
`

export const Info = styled.div`
    display: flex;
    gap: 3rem;
`