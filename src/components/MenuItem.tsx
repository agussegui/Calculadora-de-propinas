import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void  // El void significa que no retorna nada y adentro del parentesis toma un parametro y ahi puede retornar un valor
}

const MenuItem = ({item, addItem} : MenuItemProps) => {
  return (
    <button
        className="border-2 rounded-md border-indigo-700 hover:bg-indigo-900 hover:text-white w-full p-3 flex justify-between my-2"
        onClick={() => addItem(item)}
    >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    
    </button>
  )
}

export default MenuItem