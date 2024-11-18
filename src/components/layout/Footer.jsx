import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub } from "react-icons/io";


export default function Footer() {
    return (
        <>
            <footer className="bg-black text-white py-8">
                <div className="container mx-auto px-4">
                    {/* Sección superior: Navegación y redes sociales */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                        {/* Navegación */}
                        <div className="flex space-x-6 mb-4 md:mb-0">
                            <a href="#" className="hover:text-gray-400">About</a>
                            <a href="#" className="hover:text-gray-400">Services</a>
                            <a href="#" className="hover:text-gray-400">Contact</a>
                        </div>
                        {/* Redes Sociales */}
                        <div className="flex space-x-4">
                            <a href="https://x.com/LeidyJ186735" className="hover:text-gray-400" target='blank'>
                                <FaTwitter className="w-6 h-6" />
                            </a>
                            <a href="https://www.instagram.com/leidy_johannna186/" className="hover:text-gray-400" target='blank'>
                                <FaInstagram className="w-6 h-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/leidy-j-agudelo/" className="hover:text-gray-400" target='blank'>
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                            <a href="https://github.com/LJAgudelo" className="hover:text-gray-400" target='blank'>
                                <IoLogoGithub className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                    {/* Sección inferior: Derechos de autor */}
                    <div className="text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} Mi Pizzería. Todos los derechos reservados.
                    </div>
                </div>
            </footer>
        </>

    )
}

