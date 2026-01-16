import styled from 'styled-components'

export const Container = styled.table`
    border-collapse: collapse; /* bordas juntas */
    border-radius: 10px;       /* cantos arredondados */
    overflow: hidden;          /* força o radius funcionar */

    > thead {
        
        tr {
            th {
                padding: 2.1rem 2.4rem;
                border: 3px solid ${({theme}) => theme.COLORS.DARK_1000};
                font-size: 2rem;
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
                text-align: start;
            }
        }

    }
`