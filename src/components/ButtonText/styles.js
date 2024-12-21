import styled from 'styled-components'

export const Container = styled.button`
    background: transparent;
    border: none;
    font-size: ${({$isbigsize}) => $isbigsize ? '2.4rem' : '1.655rem'};
    color: ${({theme}) => theme.COLORS.LIGHT_300};

    svg {
        width: ${({$isbigsize}) => $isbigsize ? '3.2rem' : '2.2rem'};
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        margin-right: 1rem;
    }
`