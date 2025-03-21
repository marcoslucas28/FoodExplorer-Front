import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({theme, $isnew}) => $isnew ? "transparent" : theme.COLORS.LIGHT_600};
    color: ${({theme, $isnew}) => $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    border: ${({theme, $isnew}) => $isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : 'none'};

    font-family: 'Roboto';
    font-size: 1.6rem;

    display: flex;
    padding: 8px 1.6rem;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    width: auto;

    flex: 0 1 10px;

    span {
        margin-right: 8px;
    }

    button {
        background: none;
        border: 0;
        font-size: 1.5rem;
        color: ${({theme, $isnew}) => $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    }

    input {
        outline: none;
        background: transparent;
        border: none;
        font-size: 1.6rem;
        height: 1.5rem;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        &::placeholder {
            color: ${({theme, $isnew}) => $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
        }
    }
`