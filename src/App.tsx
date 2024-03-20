import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"  

import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"



function App() {

  const {order, tip, setTip, addItem, removeItem, placeOrder} = useOrder()

  return (
    <>
      <header className="bg-indigo-800 py-8">
        <h1 className="text-white font-bold text-center text-4xl">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 ">
        <div className="p-8 shadow-lg bg-gray-100 m-8 ">
          <h2 className="text-4xl font-bold py-2">Menú</h2>
          <div className="space-y-3">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>  
        </div>

        <div className=" shadow-xl border-slate-300 rounded-lg p-5 space-y-10 bg-gray-100 ">
          {order.length > 0 ? (
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              />
              <TipPercentageForm
                setTip={setTip}
                tip={tip}

              />
              <OrderTotals
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ): (
            <p className="text-center font-bold text-3xl">La orden esta vacia</p>
          )}
          
        </div>
      </main>
    </>
  )
}

export default App
