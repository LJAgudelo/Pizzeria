import { useCart } from "../context/CartContext"
import { userUser } from "../context/userContext"
import CartCar from "../components/cards/CartCar"

import { formatCurrency } from "../utils/format";
import Header from "../components/layout/Header"




const Cart = () => {
    const { token } = userUser();
    const { cartItems, updateItemQuantity, calculateTotal } = useCart();


    const total = calculateTotal();

    return (
        <>
            <Header />
            <div className="flex items-center justify-between m-4 flex-col">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Detalles del pedido
                </h5>
            </div>
            {cartItems.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col items-center justify-between w-full h-full p-1 bg-white shadow-lg rounded-lg"
                >
                    <CartCar
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        id={item.id}
                        cantidad={item.cantidad}
                        onIncrement={() => updateItemQuantity(item.id, item.cantidad + 1)}
                        onDecrement={() =>
                            item.cantidad > 1
                                ? updateItemQuantity(item.id, item.cantidad - 1)
                                : null
                        }
                    />
                </div>
            ))}
            <div className="flex items-center justify-between m-4 flex-col">
                <label>Total: {formatCurrency(total)} </label>
                <button
                    disabled={!token}
                    className={`${token
                        ? "flex items-center px-2.5 py-1 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                        : "flex items-center px-2.5 py-1 bg-gray-400 text-white rounded-lg"
                        }`}
                >
                    Pagar
                </button>
            </div>
        </>
    );
};

export default Cart;
