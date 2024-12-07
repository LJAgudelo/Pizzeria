import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';

const Review = () => {
    const [correo, setCorreo] = useState('');
    const [comentario, setComentario] = useState('');
    const [error, setError] = useState(false);

    const ValidarR = (e) => {
        e.preventDefault();
        if (correo === '' || comentario === '') {
            setError(true)
            toast.warn('Debe diligenciar todos los campos')
            return

        }
        setError(false);
        toast.success("Publicado")
        setCorreo('');
        setComentario('');

    }

    return (
        <>
            <div className=" flex  justify-center bg-gray-100 py-1">

                <form className="max-w-sm w-full bg-white p-5 rounded-lg shadow-md" onSubmit={ValidarR} >

                    <div className="mb-8">
                        <label htmlFor="email" className="block mb-3 text-sm font-medium text-black ">Correo electronico</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Ingrese su correo electronico"
                            onChange={(e) => setCorreo(e.target.value)} value={correo} />

                    </div>
                    <div className="mb-8 ">
                        <label htmlFor="comment" className="block mb-3 text-sm font-medium text-black ">Dejanos tu comentario...</label>
                        <textarea id="comment" rows="3" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Comentario..."
                            onChange={(e) => setComentario(e.target.value)} value={comentario} />

                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">Publicar</button>
                    </div>
                </form>
            </div>
            <ToastContainer />

        </>
    )
}

export default Review