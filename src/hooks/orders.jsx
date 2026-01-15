import { useContext, createContext, useState, useEffect } from 'react'

import { api } from '../services/api'
import { useAuth } from './auth'
import { socket } from "../services/socket";

import { notifyInfo } from "../utils/toast"

import { playSound } from '../services/sound'

const OrdersContext = createContext({})

function OrdersProvider({children}){
    const [pendingOrdersCount, setPendingOrdersCount] = useState(0)
    const { user } = useAuth()

    const fetchOrderCount = async () => {
        try {
            if(!user.isAdmin){
                const response = await api.get('/orders/pending')
                const items = response.data.items || []
                setPendingOrdersCount(items.length)
            }else {
                const response = await api.get('/orders')
                let items = response.data || []
                const newItems = items.filter(item => item.status === 'pending')
                items = newItems
                setPendingOrdersCount(items.length)
            }
        } catch (error) {
            console.error('Erro ao buscar pedidos pendentes:', error)
            setPendingOrdersCount(0)
        }
    }

    useEffect(() => {
        if (!user) {
            setPendingOrdersCount(0)
            return
        }

        const handleNewOrder = () => {
           notifyInfo("Um novo pedido foi feito")
           playSound()
           fetchOrderCount()
       }

       const handleStatusUpdate = () => {
           notifyInfo("Um de seus pedidos teve uma nova atualização.")
           playSound()
           fetchOrderCount()
       }
        if (user.isAdmin) {
            socket.connect()
            socket.emit("join_admin")


            socket.on("new_order", handleNewOrder)

            fetchOrderCount()
        } else {
            socket.connect()
            socket.emit("join_user", user.id)


            socket.on("order_status_updated", handleStatusUpdate)

            fetchOrderCount()
        }

        return () => {
            socket.off("new_order", handleNewOrder)
            socket.off("order_status_updated", handleStatusUpdate)
        }
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