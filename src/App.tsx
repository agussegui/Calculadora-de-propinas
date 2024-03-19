import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"  

function App() {

  const {addItem} = useOrder()

  return (
    <>
      <header className="bg-indigo-800 py-8">
        <h1 className="text-white font-bold text-center text-4xl">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 ">
        <div className="p-8 shadow-lg bg-gray-100 m-8 ">
          <h2 className="text-2xl font-bold py-2 ">Menú</h2>
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

        <div className="p-8 m-8 bg-gray-100 shadow-md">
          <h2 className="text-2xl font-bold ">Consumo</h2>
        </div>
      </main>
    </>
  )
}

export default App
