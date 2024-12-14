import { PiEyesFill } from "react-icons/pi";
import { FaCartArrowDown } from "react-icons/fa";

export default function CardPizza({ name, price, ingredients, img, desc }) {
    return (
        <div className="flex justify-center items-center bg-gray-100  ">
            <div className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
                {/* Espacio para poner la Imagen */}
                <img src={img} alt={`Pizza ${name}`} className="w-full h-48 object-cover" />

                {/* Espacio para el Título */}
                <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800">Pizza {name}</h3>
                </div>

                {/* Lista de ingredientes */}
                <ul className="border-t border-gray-200 p-4 bg-gray-50">
                    <li className="text-gray-600 text-sm">Ingredientes: {ingredients}</li>
                </ul>
                <ul className="border-t border-gray-200 p-4 bg-gray-50">
                    <li className="text-gray-600 text-sm">Descripción de la pizza: {desc}</li>
                </ul>

                {/* Cuerpo de la tarjeta  Precio y botones */}
                <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800">Precio: {price}</h4>
                    <div className="flex items-center justify-center gap-4 mt-4">
                        {/* Botón Ver Más */}
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-400 text-gray-600 rounded-lg hover:bg-gray-100">
                            Ver Más <PiEyesFill />
                        </button>
                        {/* Botón Añadir */}
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                            Añadir <FaCartArrowDown />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}



