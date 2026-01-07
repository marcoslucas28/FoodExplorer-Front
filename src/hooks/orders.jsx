import { useContext, createContext, useState, useEffect } from 'react'

import { api } from '../services/api'

const OrdersContext = createContext({})

function OrdersProvider({children}){
    const [pendingOrdersCount, setPendingOrdersCount] = useState(0)

    useEffect(() => {
        const fetchOrderCount = async () => {
            try {
                const response = await api.get('/orders/pending')
                const items = response.data.items || []
                setPendingOrdersCount(items.length)
            } catch (error) {
                console.error('Erro ao buscar pedidos pendentes:', error)
                setPendingOrdersCount(0)
            }
        }

        fetchOrderCount()

        const interval = setInterval(fetchOrderCount, 5000) // Atualiza a cada 5 segundos

        return () => clearInterval(interval)
    }, [])

    return (
        <OrdersContext.Provider value={{ pendingOrdersCount }}>
            {children}
        </OrdersContext.Provider>
    )
}

function useOrders(){
    const context = useContext(OrdersContext)
    return context
}

export { OrdersProvider, useOrders }