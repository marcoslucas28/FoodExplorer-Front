import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;

        font-size: 62.5%;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        --scroll-track-color: #2f3538;
        --scroll-thumb-color:rgb(17, 37, 163);
        --scroll-size: 8px;

        scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color)
    }

    body {
        height: 100vh;

        overflow-x: hidden;
        overflow-y: auto;


        background-color: ${({theme}) => theme.COLORS.DARK_400};
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        #root {
            height: 100%;
            width: 100%;
        }
    }

    a{
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter .2s;
    }

    button:hover, a:hover {
        filter: brightness(.9);
    }

    ul, li {
        text-decoration: none;
        list-style: none;
    }

    input, textarea {
        border: none ;
        outline: none;
    }

    *::-webkit-scrollbar-track{
        background-color: var(--scroll-track-color);
        border-radius: 25px;
    }

    *::-webkit-scrollbar{
        width: var(--scroll-size);
    }

    *::-webkit-scrollbar-thumb{
        background-color: var(--scroll-thumb-color);
        border-radius: 25px;
    }
`