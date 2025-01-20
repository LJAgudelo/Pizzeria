import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../utils/format";

const CartCar = ({ img, name, price, id }) => {
    const { addItem, removeItem } = useCart();

    return (
        <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="sm:py-2">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src={img}
                                    alt="Imagen de la pizza"
                                />
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    {name}
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white gap-2">
                                <span>{formatCurrency(price)}</span>

                                <div className="flex gap-2">
                                    <button
                                        className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                                        onClick={() => addItem({ id, name, price, img })}
                                    >
                                        +
                                    </button>

                                    <button
                                        className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                                        onClick={() => removeItem(id)}
                                    >
                                        -
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CartCar;

