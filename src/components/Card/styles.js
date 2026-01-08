import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 22rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 2.4rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    h3 {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-weight: 300;
    }

    p {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-family: 'Roboto', sans-serif;
    }

    .icon {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 3rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > img {
        width: 15rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        justify-content: center;
        align-items: center;
        width: 100%;

        > div {
            display: flex;
            align-items: center;
            gap: 2rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-size: 2rem;
            font-family: 'Roboto', sans-serif;

            .icon2 {
                cursor: pointer;
                font-size: 1.6rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
                font-weight: 100;
            }
        }
    }
`