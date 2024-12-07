import CartCar from "../components/cards/CartCar"
import Header from "../components/layout/Header"
import { pizzasCart } from ".././data/data"
import { formatCurrency } from "../utils/format"
import { useState } from "react"

const Cart = () => {

    const [total, setTotal] = useState(0)

    const calcularTotal = (subtotal) => {
        setTotal((prevTotal) => prevTotal + subtotal)
    }

    return (
        <>
            <Header />
            <div className="flex items-center justify-between m-4 flex-col">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Detalles del pedido</h5>
            </div>
            {pizzasCart.map((pizzaCart) => (
                <div key={pizzaCart.id}
                    className="flex flex-col items-center justify-between w-full h-full p-1 bg-white shadow-lg rounded-lg">
                    <CartCar
                        img={pizzaCart.img}
                        name={pizzaCart.name}
                        price={pizzaCart.price}
                        calcularTotal={calcularTotal}
                    />

                </div>
            ))}
            <div className="flex items-center justify-between m-4 flex-col">
                <label>Total: {(formatCurrency(total))} </label>
                <button className="flex items-center  px-2.5 py-1 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                    Pagar
                </button>
            </div>
        </>

    )
}

export default Cart