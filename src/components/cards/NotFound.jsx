import React from 'react'
import perdido from '../../assets/perdido.jpg'
import { TiArrowBack } from "react-icons/ti";
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <>
            <div className="relative w-full  flex items-center justify-center bg-gray-100">
                <img
                    src={perdido}
                    alt="Perrito con domicilio"
                    className="width: auto " />
                <div className="absolute flex flex-col items-center justify-center bg-black bg-opacity-70 text-white text-center gap-2">
                    <p>¿Te perdiste?</p>
                    <p>No encontramos esta pagina</p>
                    <p>Error 404</p>
                    <p>NOT FOUNd</p>
                    <Link
                        to='/Home'
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"><TiArrowBack />Volver</Link>

                </div>

            </div>



        </>
    )
}

export default NotFound