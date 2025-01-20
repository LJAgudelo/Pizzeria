import { PiEyesFill } from "react-icons/pi";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function CardPizza({ id, name, price, ingredients, img, desc }) {
    const { addItem } = useCart(); // Obtener la función `addItem` del contexto

    // Crear el objeto pizza que se añadirá al carrito
    const handleAddToCart = () => {
        const pizza = {
            id,
            name,
            price,
            img,
            desc,
            ingredients,
        };
        addItem(pizza);
    };

    return (
        <div className="flex justify-center items-center bg-gray-100">
            <div className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">

                <img src={img} alt={`Pizza ${name}`} className="w-full h-48 object-cover" />


                <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">Pizza {name}</h3>
                </div>


                <ul className="border-t border-gray-200 p-4 bg-gray-50">
                    <li className="text-gray-600 text-sm">Ingredientes: {ingredients}</li>
                </ul>
                <ul className="border-t border-gray-200 p-4 bg-gray-50">
                    <li className="text-gray-600 text-sm">Descripción de la pizza: {desc}</li>
                </ul>


                <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800">Precio: {price}</h4>
                    <div className="flex items-center justify-center gap-4 mt-4">
                        {/* Botón Ver Más */}
                        <Link
                            to={`/pizzas/${id}`}
                            className="flex items-center gap-2 px-4 py-2 border border-gray-400 text-gray-600 rounded-lg hover:bg-gray-100"
                        >
                            Ver Más <PiEyesFill />
                        </Link>

                        <button
                            onClick={handleAddToCart}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                        >
                            Añadir <FaCartArrowDown />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
