import React, { useState } from 'react'
import Header from '../layout/Header'
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const contraseñaSecreta = 123456;
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState(false);

    const validarDatos = (e) => {
        e.preventDefault();
        if (correo === '' || contraseña === '') {
            setError(true)
            return
        }
        if (contraseña.length < 6) {
            setError(true)
            toast.warn('la contraseña debe tener al menos 6 caracteres.')
            return
        }
        if (contraseña !== contraseñaSecreta.toString()) {
            setError(true)
            toast.error('Las contraseñas no coinciden.')
            setContraseña('');
            return

        }
        setError(false)
        toast.success("Iniciando sesión.")
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


                    <div className='flex justify-center'>
                        <button type="submit" className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">Crear cuenta</button>

                    </div>


                </form>
            </div>
            <ToastContainer />

        </>
    )
}

export default Login;


