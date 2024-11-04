import React from 'react'
import Versace from "../assets/imgs/Versace.png";
import Zara from "../assets/imgs/Zara.png";
import Gucci from "../assets/imgs/Gucci.png";
import Prada from "../assets/imgs/Prada.png";
import CalvinKlein from "../assets/imgs/CalvinKlein.png";
import Image from 'next/image';

const Brands = () => {
    return (
        <div className='bg-black py-10'>
            <div className='container'>
                <section className='flex flex-wrap gap-2 gap-x-8 justify-center lg:justify-between'>
                    <figure className='flex items-center justify-center'>
                        <Image alt="Versace" height={28} src={Versace} />
                    </figure>
                    <figure className='flex items-center justify-center'>
                        <Image alt="Zara" height={28} src={Zara} />
                    </figure>
                    <figure className='flex items-center justify-center'>
                        <Image alt="Gucci" height={28} src={Gucci} />
                    </figure>
                    <div className='flex lg:hidden w-full'></div>
                    <figure className='flex items-center justify-center'>
                        <Image alt="Prada" height={28} src={Prada} />
                    </figure>
                    <figure className='flex items-center justify-center'>
                        <Image alt="CalvinKlein" height={28} src={CalvinKlein} />
                    </figure>
                </section>
            </div>
        </div>
    )
}

export default Brands