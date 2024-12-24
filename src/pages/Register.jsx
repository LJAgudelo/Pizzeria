import React, { useState } from 'react'
import Header from '../components/layout/Header'
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {

    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmacontraseña, setConfrimacontraseña] = useState('');
    const [error, setError] = useState(false);

    const validarDatos = (e) => {
        e.preventDefault();
        if (correo === '' || contraseña === '' || confirmacontraseña === '') {
            setError(true)
            return
        }
        if (contraseña.length < 6) {
            setError(true)
            toast.warn('la contraseña debe tener al menos 6 caracteres.')
            return
        }
        if (contraseña !== 1234567) {
            setError(true)
            toast.error('Las contraseñas no coinciden.')
            setContraseña('');
            setConfrimacontraseña('');

            return

        }
        setError(false)

        toast.success("Formulario enviado con éxito.")

        setCorreo('');
        setContraseña('');
        setConfrimacontraseña('');

    }


    return (
        <>
            <Header />
            <div className=" flex  justify-center bg-gray-100 py-8">

                <form className="max-w-sm w-full bg-white p-6 rounded-lg shadow-md" onSubmit={validarDatos}>

                    <div className="mb-8">
                        <label htmlFor="email" className="block mb-3 text-sm font-medium text-black ">Correo electronico</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Ingrese su correo electronico" required
                            onChange={(e) => setCorreo(e.target.value)} value={correo} />
                    </div>
                    <div className="mb-8">
                        <label htmlFor="password" className="block mb-3 text-sm font-medium text-black ">Contraseña</label>
                        <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Ingrese su contraseña' required
                            onChange={(e) => setContraseña(e.target.value)} value={contraseña} />
                    </div>
                    <div className="mb-8">
                        <label htmlFor="repeat-password" className="block mb-3 text-sm font-medium text-black ">Confirmar contraseña</label>
                        <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='Confirme su contraseña' required
                            onChange={(e) => setConfrimacontraseña(e.target.value)} value={confirmacontraseña} />
                    </div>
                    <div className="flex items-start mb-8">
                        <div className="flex items-center h-5">
                            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-black dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="terms" className="ms-2 text-sm font-medium text-black dark:text-gray-300">confirmo que he leído y acepto los <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Términos y Condiciones</a></label>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">Crear cuenta</button>

                    </div>


                </form>
            </div>
            <ToastContainer />

        </>
    )
}

export default Register