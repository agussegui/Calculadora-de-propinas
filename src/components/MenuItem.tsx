import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
    addItem: (item: MenuItem) => void  // El void significa que no retorna nada y adentro del parentesis toma un parametro y ahi puede retornar un valor
}

const MenuItem = ({item, addItem} : MenuItemProps) => {
  return (
    <button
        className="border-2 rounded-md text-white bg-sky-600 hover:bg-sky-900 hover:transition-all hover:text-white w-full p-3 flex justify-between my-2"
        onClick={() => addItem(item)}
    >
        <p className="font-bold">{item.name}</p>
        <p className="font-bold">${item.price}</p>
    
    </button>
  )
}

export default MenuItem