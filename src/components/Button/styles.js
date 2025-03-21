import styled from 'styled-components'

export const Container = styled.button`
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    border: none;
    width: 100%;
    font-size: 1.6rem;
    padding: 1.2rem 0;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    border-radius: 5px;
    height: 30px;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`