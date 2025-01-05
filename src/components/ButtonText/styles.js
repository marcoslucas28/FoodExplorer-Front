import styled from 'styled-components'

export const Container = styled.button`
    background: transparent;
    border: none;
    font-size: ${({$isbigsize}) => $isbigsize ? '2.4rem' : '1.655rem'};
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    display: flex;
    align-items: center;
    text-align: center;
    width: auto;
    flex: 0 0 auto;

    svg {
        font-size: ${({$isbigsize}) => $isbigsize ? '3.2rem' : '2.5rem'};
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
`