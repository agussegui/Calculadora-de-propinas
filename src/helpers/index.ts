//Con esto creo una funcion para que muestre en que moneda quiero quiero representa el precio
export function formatCurrency(quantity:number){
    return new Intl.NumberFormat('en-ES', {
        style: 'currency', currency: 'USD'
    }).format(quantity)
}