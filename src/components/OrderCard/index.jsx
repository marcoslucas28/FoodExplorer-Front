import { Container, Info, Box, InputOption } from './styles'

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toZonedTime } from "date-fns-tz";

import { useState, useEffect } from 'react'

import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'

export function OrderCard({data}){
    const id = data.id.toString().padStart(6, '0')

    const [status, setStatus] = useState(data.status)

    const { user } = useAuth()

    const STATUS_COLORS = {
        pending: "TOMATO_300",     // amarelo
        preparing: "CARROT_100",   // azul
        delivered: "MINT_100"    // verde
    };


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

    async function updateStatus(e){
        const newStatus = e.target.value;

        await api.put(`/orders/${data.id}`, {"status": newStatus})
        setStatus(newStatus);
    }

    const itemsText = data.items.map(item => `${item.quantity} x ${item.dish_name}`).join(', ');

    useEffect(() => {
        setStatus(data.status);
    }, [data.status]);

    return(
        <Container>
            <Info>
                <span>{id}</span>
                {!user.isAdmin && 
                    <span className='status'>
                        {data.status === 'pending' && (
                            <>
                                <Box $color="TOMATO_300"></Box>
                                Pendente
                            </>
                            )}
                        {data.status === 'preparing' && (
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
                }

                <span>{formatDateBrazil(data.updated_at)}</span>
            </Info>

            <p>
                {itemsText}
            </p>

            {!!user.isAdmin &&

                <InputOption>
                    <Box $color={STATUS_COLORS[status]}></Box>
                    <select value={status} onChange={updateStatus}>
                        <option value="pending">Pendente</option>
                        <option value="preparing">Preparando</option>
                        <option value="delivered">Entregue</option>
                    </select>
                </InputOption>
            }
        </Container>
    )
}