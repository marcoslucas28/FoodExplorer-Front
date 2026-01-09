import styled from 'styled-components';

import { DEVICE } from '../../styles/device';

export const Container = styled.div`
    width: 100%;
    max-width: 30rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    padding: 2.4rem;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    ${DEVICE.lg} {
        gap: 2rem;
    }

    h3 {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-weight: 300;
        cursor: pointer;

        ${DEVICE.lg} {
            font-size: 2rem;
            font-weight: bold;
        }
    }

    p {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-family: 'Roboto', sans-serif;

        ${DEVICE.lg} {
            font-size: 2.6rem;
            font-weight: 300;
        }
    }

    .description {
        font-size: 1.4rem;
        font-weight: 300;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-align: center;
        cursor: pointer;
    }

    .icon {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 3rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        cursor: pointer;
    }

    > img {
        width: 15rem;
        cursor: pointer;
        user-select: none;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        justify-content: center;
        align-items: center;
        width: 100%;

        ${DEVICE.lg} {
            flex-direction: row;;
        }

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