import { useState } from "react";
import { formatCurrency } from "../../utils/format"

const CartCar = ({ img, name, price, calcularTotal }) => {

    const [cantidad, setCantidad] = useState(0);


    const sumar = (e) => {
        e.preventDefault();
        setCantidad((prevCantidad) => {
            const nuevaCantidad = prevCantidad + 1;
            calcularTotal(price)

            return nuevaCantidad;

        })

    }

    const restar = (e) => {
        e.preventDefault();
        if (cantidad > 0) {

            setCantidad((prevCantidad) => {
                const nuevaCantidad = prevCantidad - 1;
                if (nuevaCantidad >= 0) {
                    calcularTotal(-price)
                }
                return nuevaCantidad;
            })

        } else {
            return null;
        }
    }



    return (
        <>
            < div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="sm:py-2">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img className="w-10 h-10 rounded-full" src={img} alt="Imagen de la pizza" />
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        {name}
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white gap-1">

                                    {formatCurrency(price)}

                                    <button className="flex items-center  px-2 py-1 bg-gray-800 text-white rounded-lg hover:bg-gray-700 " onClick={sumar}>
                                        +
                                    </button>
                                    <label className="mx-2">{cantidad}

                                    </label>
                                    <button className="flex items-center  px-2.5 py-1 bg-gray-800 text-white rounded-lg hover:bg-gray-700" onClick={restar}>
                                        -
                                    </button>

                                    <label className="ms-4">
                                        Subtotal: {formatCurrency(cantidad * price)}
                                    </label>

                                </div>


                            </div>
                        </li>
                    </ul>
                </div>
            </div >




        </>


    )
}

export default CartCar