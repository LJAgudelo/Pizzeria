import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { ImProfile } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { RiLoginBoxFill } from "react-icons/ri";
import { GiArchiveRegister } from "react-icons/gi";
import { TbCashRegister } from "react-icons/tb";
import { formatCurrency } from '../../utils/format';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const total = 25000;


const navigation = [
    { name: 'Home', to: '/Home', icon: <IoHome />, current: true },
    { name: 'Register', to: '/register', icon: <GiArchiveRegister />, current: false },
    { name: 'Login', to: '/login', icon: <RiLoginBoxFill />, current: false },
    { name: 'Cart', to: '/cart', icon: <FaCartShopping /> },
    { name: 'Profile', to: '/profile', icon: <ImProfile />, current: false },
    { name: `Total: ${formatCurrency(total)}`, to: '/cart', icon: <TbCashRegister />, current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-black">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="block h-6 w-6 group-data-[open]:hidden" aria-hidden="true" />
                            <XMarkIcon className="hidden h-6 w-6 group-data-[open]:block" aria-hidden="true" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://i.pinimg.com/736x/c1/27/c0/c127c0dc4b1acfb19700f7c0049b20bd.jpg"
                                alt="Logo de la pizzería"
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-5">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white',
                                            'rounded-md px-4 py-2 text-sm font-medium flex items-center'
                                        )}
                                    >
                                        {item.icon}
                                        <span className="ml-2">{item.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium'
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
