import { Container } from './styles'

import { RowTable } from '../RowTable'

export function Table({data}){

    return(
        <Container>
            <thead>
                <tr>
                    <th>Status</th>
                    <th>Código</th>
                    <th>Detalhamento</th>
                    <th>Data e hora</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(order => (
                        <RowTable key={order.id} data={order} />
                    ))
                }
            </tbody>
        </Container>
    )
}