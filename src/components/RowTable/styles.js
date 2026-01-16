import styled from 'styled-components'

export const Container = styled.tr`
    td {
        border: 3px solid ${({theme}) => theme.COLORS.DARK_1000};
        padding: 2.1rem 2.4rem;
        font-size: 1.8rem;
        font-weight: 300;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        max-width: 36rem;
    }

    .status { 
        display: flex;
        gap: 8px;
        align-items: center;
    }
`

export const InputOption = styled.div`
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    height: auto;
    padding: 1.6rem;
    font-size: 1.6rem;
    width: 90%;
    overflow: visible;
    box-sizing: content-box;
    border-radius: 8px;
    border: none;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    cursor: pointer;
    display: flex;
    gap: 1rem;
    align-items: center;

    select {
        background-color: ${({theme}) => theme.COLORS.DARK_900};
        font-size: 1.6rem;
        width: 100%;
        overflow: visible;
        box-sizing: content-box;
        border: none;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        &:active {
            border: none;
        }

        &:focus {
            border: 0;
            outline: none;
        }
    }
`

export const Box = styled.div`
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    background-color: ${({ theme, $color }) => $color ? theme.COLORS[$color] : theme.COLORS.TOMATO_100};
`