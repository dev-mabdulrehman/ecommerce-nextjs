"use client";

import Image from 'next/image'

import menuIcon from "@/assets/icons/menuIcon.svg"
import timesIcon from "@/assets/icons/timesBlack.svg"

type Props = {
    type?: "open" | "close"
}

const MenuToggler = ({ type = 'open' }: Props) => {
    const handleButtonClick = () => {
        const mainBody = document.getElementsByClassName("group/main-body")[0];
        if (type == 'close') {
            mainBody.classList.remove('sidebar-opened')
        } else {
            mainBody.classList.add('sidebar-opened')
        }
    }
    return <>
        <button onClick={handleButtonClick} className='overflow-hidden flex lg:hidden rounded-full hover:bg-gray-100 p-2'>
            {type == 'open' ? <Image src={menuIcon} width={24} height={24} alt='Menu Icon' /> : <Image src={timesIcon} width={24} height={24} alt='Close Icon' />}
        </button>
    </>
}

export default MenuToggler;