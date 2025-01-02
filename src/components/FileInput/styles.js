import styled from 'styled-components'

export const Container = styled.label`
    background-color: ${({theme}) => theme.COLORS.DARK_800};
    border-radius: 8px;
    width: 90%;
    display: flex;
    gap: 0.8rem;
    padding: 1.2rem 0 1.2rem 3.2rem;
    align-items: center;
    overflow: visible;
    box-sizing: content-box;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 1.6rem;
    cursor: pointer;

    > input {
        display: none;
    }

    > img {
        font-size: 2.4rem;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
` 