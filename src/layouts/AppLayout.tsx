"use client";

// NextJS
import Image from "next/image";
import Link from "next/link";

// ReactJS
import { Fragment, useState } from "react";

// HeadlessUI
import { Dialog, Menu, Transition } from "@headlessui/react";

// Icons
import { IconCalendarClock, IconChevronDown, IconMenu2, IconSettings, IconShieldLock, IconUsers } from "@tabler/icons-react";

// Utils
import { joinClassNames } from "@utils/functions";

const navigation = [
    {
        children: [
            { name: "Usuarios", href: "security/users", icon: IconUsers, current: false },
            { name: "Roles", href: "security/roles", icon: IconShieldLock, current: false },
        ],
        current: false,
        href: "security",
        icon: IconShieldLock,
        name: "Seguridad"
    },
    {
        children: [],
        current: false,
        href: "parameters",
        icon: IconSettings,
        name: "Parametrización"
    },
    {
        children: [],
        current: false,
        href: "reservations",
        icon: IconCalendarClock,
        name: "Reservas",
    },
];

const userNavigation = [
    { name: "Your profile", href: "#" },
    { name: "Sign out", href: "#" },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
    // States
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <main>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                        <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                            <span className="sr-only">Close sidebar</span>
                                            <IconMenu2 color="white" size={24} />
                                        </button>
                                    </div>
                                </Transition.Child>
                                
                                <div className="flex flex-col items-center gap-y-10 bg-primary p-6 grow">
                                    <Image
                                        alt="MOAI Logo"
                                        height={32}
                                        src="/logo.png"
                                        width={100}
                                    />
                                    <nav className="flex flex-col w-full">
                                        <ul className="flex flex-col gap-y-4">                                            
                                            {navigation.map((item) => (
                                                <li key={item.name}>
                                                    <Link
                                                        href={item.href}
                                                        className={joinClassNames(
                                                            item.current ? "bg-hover" : "hover:bg-hover",
                                                            "bg-active flex gap-x-3 rounded-lg p-3 text-sm font-semibold text-white"
                                                        )}
                                                    >
                                                        <item.icon color="white" size={24} />

                                                        {item.name}
                                                    </Link>
                                                    {item.children.length > 0 && (
                                                        <ul className="flex flex-col gap-y-4 ml-4">
                                                            {item.children.map((child) => (
                                                                <li key={child.name}>
                                                                    <Link
                                                                        href={child.href}
                                                                        className={joinClassNames(
                                                                            child.current ? "bg-child" : "hover:bg-child",
                                                                            "bg-active flex gap-x-3 rounded-lg p-3 text-sm font-semibold text-white"
                                                                        )}
                                                                    >
                                                                        <child.icon color="white" size={24} />

                                                                        {child.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <aside className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                <div className="flex flex-col items-center gap-y-10 bg-primary p-6 grow">
                    <Image
                        alt="MOAI Logo"
                        height={32}
                        src="/logo.png"
                        width={100}
                    />
                    <nav className="flex flex-col w-full">
                        <ul className="flex flex-col gap-y-4">                                            
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={joinClassNames(
                                            item.current ? "bg-hover" : "hover:bg-hover",
                                            "bg-active flex gap-x-3 rounded-lg p-3 text-sm font-semibold text-white"
                                        )}
                                    >
                                        <item.icon color="white" size={24} />

                                        {item.name}
                                    </Link>
                                    {item.children.length > 0 && (
                                        <ul className="flex flex-col gap-y-2 bg-active rounded-lg p-3">
                                            {item.children.map((child) => (
                                                <li key={child.name}>
                                                    <Link
                                                        href={child.href}
                                                        className={joinClassNames(
                                                            child.current ? "bg-child" : "hover:bg-child",
                                                            "bg-active flex gap-x-3 rounded-lg p-3 text-sm font-semibold text-white"
                                                        )}
                                                    >
                                                        <child.icon color="white" size={24} />

                                                        {child.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>

            <aside className="lg:pl-72">
                <section className="sticky flex justify-between h-16 items-center border-b border-gray-200 bg-white shadow-sm lg:justify-end">
                    <button type="button" className="flex items-center justify-center p-3 text-white h-16 w-16 bg-primary lg:hidden" onClick={() => setSidebarOpen(true)}>
                        <IconMenu2 color="white" size={24} />
                    </button>
                    
                    <Menu as="div" className="relative mr-2">
                        <Menu.Button className="flex items-center gap-1 p-2">
                            <Image
                                alt=""
                                className="rounded-full"
                                height={40}
                                src="https://ui-avatars.com/api/?name=Jorge+Areiza&background=5F77F3&color=FFF&bold=true"
                                width={40}
                            />
                            <IconChevronDown color="#303030" size={24} />
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                {userNavigation.map((item) => (
                                    <Menu.Item key={item.name}>
                                        {({ active }) => (
                                            <Link
                                                href={item.href}
                                                className={joinClassNames(
                                                    active ? "bg-gray-50" : "",
                                                    "block px-3 py-1 text-sm leading-6 text-gray-900"
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </Menu.Item>
                                ))}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </section>

                <section className="py-10">
                    <div className="px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </section>
            </aside>
        </main>
    );
}


