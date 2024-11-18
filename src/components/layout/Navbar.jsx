import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { ImProfile } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { RiLoginBoxFill } from "react-icons/ri";
import { SiOpensourceinitiative } from "react-icons/si";
import { TbCashRegister } from "react-icons/tb";
import { formatCurrency } from '../../utils/format';

const total = 25000;
const token = true;

const navigation = [
    { name: 'Home', href: '#', icon: <LiaPizzaSliceSolid />, current: true },
    ...(token
        ? [
            { name: 'Profile', href: '#', icon: <ImProfile />, current: false },
            { name: 'Logout', href: '#', icon: <FiLogOut />, current: false },
        ]
        : [
            { name: 'Login', href: '#', icon: <RiLoginBoxFill />, current: false },
            { name: 'Register', href: '#', icon: <SiOpensourceinitiative />, current: false },
        ]
    ),
    { name: `Total: ${formatCurrency(total)}`, href: '#', icon: <TbCashRegister />, current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    {/*Se incorporan las variables*/ }

    return (
        <Disclosure as="nav" className="bg-black">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <img
                                alt="Logo de la pizzeria"
                                src="https://i.pinimg.com/736x/c1/27/c0/c127c0dc4b1acfb19700f7c0049b20bd.jpg"
                                className="w-10 h-auto rounded-full"

                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-5">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}

                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white',
                                            'rounded-md px-4 py-2 text-sm font-medium flex items-center  ',
                                        )}
                                    >

                                        {item.icon}
                                        {item.name}


                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div>
                                {/*  Creacion de foto de perfil                               <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        alt=""
                                        src="#"
                                        className="size-8 rounded-full"
                                    />
                                </MenuButton> */}
                            </div>

                        </Menu>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}