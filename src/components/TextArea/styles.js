import styled from 'styled-components'

export const Container = styled.textarea`
    outline: none;
    border: none;
    resize: none;
    width: 100%;
    height: 20rem;

    background-color: ${({theme}) => theme.COLORS.DARK_800};

    color: ${({theme}) => theme.COLORS.LIGHT_100};

    padding: 1.4rem;
    border-radius: 8px;
    font-size: 1.6rem;
    font-family: 'Roboto';

    &::placeholder {
        color: ${({theme}) => theme.COLORS.LIGHT_500};
        font-size: 1.6rem;
        font-family: 'Roboto';
    }
`