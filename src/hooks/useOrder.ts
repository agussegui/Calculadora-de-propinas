import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
    
    const [order, setOrder] = useState<OrderItem[]>([])
    
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

    console.log(order)

    return{
        addItem 
    }

}   