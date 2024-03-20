import { useCallback  } from "react" //useMemo y useCallback funcionan igual lo unico que cambiar es su sintaxis
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void 
}

const OrderTotals = ({order, tip, placeOrder}: OrderTotalsProps) => {
    //Usememo me va a permitir que únicamente se renderice o se vuelva a ejecutar este código cuando cambie
    //calcular el subtotal a pagar en base al precio de los artículos y sus cantidades.
    const subTotalAmaount = useCallback(() => order.reduce((total, item) => total +  (item.quantity * item.price), 0), [order])
    const tipAmaount = useCallback(() => subTotalAmaount() * tip,  [tip, order])
    const TotalAmaount = useCallback(() => subTotalAmaount() + tipAmaount(),  [tip, order])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propina</h2>

            <p>SubTotal a pagar:
                <span className="font-bold">{formatCurrency(subTotalAmaount())} </span>
            </p>

            <p>Propina:
                <span className="font-bold"> {formatCurrency(tipAmaount())}</span>
            </p>

            <p>Total a pagar:
                <span className="font-bold"> ${formatCurrency(TotalAmaount())}</span>
            </p>
        </div>

        <button
            className="w-full bg-indigo-700 text-white p-4 uppercase rounded-md font-bold hover:bg-indigo-900 hover:transition-all disabled:opacity-10"
            disabled={TotalAmaount() === 0}
            onClick={placeOrder}
        >Guardar Orden</button>
    </>
  )
}

export default OrderTotals