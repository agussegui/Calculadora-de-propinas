import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
    //Esto es la orden  
    const [order, setOrder] = useState<OrderItem[]>([])
    //Esto es la Propina
    const [tip, setTip] = useState(0)
    
    const addItem = (item : MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist) {
            //Con esto ya se que existe pero tiene que identificar cual es el repetido
            const updateOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
            setOrder(updateOrder)
        } else {
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder 
    }

}   