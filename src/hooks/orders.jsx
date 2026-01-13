import { useContext, createContext, useState, useEffect } from 'react'

import { api } from '../services/api'
import { useAuth } from './auth'

const OrdersContext = createContext({})

function OrdersProvider({children}){
    const [pendingOrdersCount, setPendingOrdersCount] = useState(0)
    const { user } = useAuth()

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

    useEffect(() => {
        if (!user || user.isAdmin) {
            setPendingOrdersCount(0)
            return
        }


        fetchOrderCount()
        return;
    }, [user])

    return (
        <OrdersContext.Provider value={{ pendingOrdersCount, fetchOrderCount }}>
            {children}
        </OrdersContext.Provider>
    )
}

function useOrders(){
    const context = useContext(OrdersContext)
    return context
}

export { OrdersProvider, useOrders }