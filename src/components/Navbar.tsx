import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import searchIcon from "@/assets/icons/searchIcon.svg"
import cartIcon from "@/assets/icons/cartIcon.svg"
import userIcon from "@/assets/icons/userIcon.svg"

import MenuToggler from '@/components/MenuToggler'

const SearchBar = () => {
    return <>
        <section className='bg-[#F0F0F0] hidden md:flex items-center py-3 px-4 w-full rounded-3xl'>
            <Image src={searchIcon} alt='Search Icon' width={20} height={20} className='mr-2' />
            <input type='text' className='bg-transparent outline-none' placeholder='Search for products...' />
        </section>
    </>
}



const Navbar = () => {

    const routes = [
        { href: "/", text: "Shop" },
        { href: "/", text: "On Sale" },
        { href: "/", text: "New Arrivals" },
        { href: "/", text: "Brands" },
    ]
    return (
        <>
            <div className='bg-white'>
                <nav className='grid grid-cols-2 items-center container'>
                    <section className='flex items-center gap-4 lg:gap-10 py-6'>
                        <MenuToggler />
                        <h2 className='text-3xl font-bold font-integral-cf uppercase'>SHOP.CO</h2>
                        <ul className='hidden font-satoshi items-center gap-6 lg:flex'>
                            {routes.map((route, routeIdx) => (
                                <li key={`${route.text}${routeIdx}`}>
                                    <Link className='text-black/60 transition-all hover:text-black' href={route.href}>{route.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className='flex w-full ml-auto gap-4 lg:gap-10 items-center'>
                        <SearchBar />
                        <section className='flex items-center ml-auto flex-shrink-0'>
                            <button className='overflow-hidden flex md:hidden rounded-full hover:bg-gray-100 p-2'>
                                <Image alt="Cart Icon" src={searchIcon} width={20} height={20} />
                            </button>
                            <button className='overflow-hidden rounded-full hover:bg-gray-100 p-2'>
                                <Image alt="Cart Icon" src={cartIcon} width={20} height={20} />
                            </button>
                            <button className='overflow-hidden rounded-full hover:bg-gray-100 p-2'>
                                <Image alt="Cart Icon" src={userIcon} width={20} height={20} />
                            </button>
                        </section>
                    </section>
                </nav>
            </div>
            <section className='fixed hidden group-[.sidebar-opened]/main-body:flex lg:group-[.sidebar-opened]/main-body:hidden top-0 -left-full bottom-0 w-screen group-[.sidebar-opened]/main-body:left-0 bg-black/80'>
                <aside className='fixed top-0 group-[.sidebar-opened]/main-body:left-0 -left-full w-11/12 bg-white h-screen'>
                    <div className='flex justify-end'>
                        <MenuToggler type='close' />
                    </div>
                    <nav>
                        <ul className='flex font-satoshi flex-col'>
                            {routes.map((route, routeIdx) => (
                                <li key={`${route.text}${routeIdx}`}>
                                    <Link className='text-black/60 p-4 block hover:bg-gray-300 transition-all hover:text-black' href={route.href}>{route.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
            </section>
        </>
    )
}

export default Navbar