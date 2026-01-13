import { Container, Info, Box } from './styles'

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toZonedTime } from "date-fns-tz";

export function OrderCard({data}){
    const id = data.id.toString().padStart(6, '0')

    function parseApiDateAsUTC(dateString) {
        return new Date(dateString.replace(" ", "T") + "Z");
    }

   function formatDateBrazil(updated_at) {
        const timeZone = "America/Sao_Paulo";

        const utcDate = parseApiDateAsUTC(updated_at);

        const zonedDate = toZonedTime(utcDate, timeZone);

        return format(
            zonedDate,
            "dd/MM 'às' HH'h'mm",
            { locale: ptBR }
        );
    }

    const itemsText = data.items.map(item => `${item.quantity} x ${item.dish_name}`).join(', ');

    return(
        <Container>
            <Info>
                <span>{id}</span>
                <span className='status'>
                    {data.status === 'pending' && (
                        <>
                            <Box $color="TOMATO_300"></Box>
                            Pendente
                        </>
                        )}
                    {data.status === 'preparing' || data.status === 'Preparing' && (
                        <>
                            <Box $color="CARROT_100"></Box>
                            Preparando
                        </>
                    )}
                    {data.status === 'delivered' && (
                        <>
                            <Box $color="MINT_100"></Box>
                            Entregue
                        </>
                    )}
                </span>

                <span>{formatDateBrazil(data.updated_at)}</span>
            </Info>

            <p>
                {itemsText}
            </p>
        </Container>
    )
}