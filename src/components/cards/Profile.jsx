import fotoPerfil from "../../assets/fotoPerfil.jpg";
import { IoLogOut } from "react-icons/io5";

const Profile = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 gap-2">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center gap-4">
                    <img className="w-24 h-55 mb-3 rounded-full shadow-lg m-5" src={fotoPerfil} alt="Perfil" />
                    <h1 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        Leidy J Agudelo Gutierrez
                    </h1>
                    <span className="text-sm text-gray-500 dark:text-gray-400">leidy1421@live.com</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Colombia - Medellín</span>
                    <div className="flex mt-4 md:mt-6">
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 m-5">
                            <IoLogOut /> Salir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;