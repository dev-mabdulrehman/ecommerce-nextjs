import React from 'react'
import HeroImage from "../assets/imgs/HeroImage.png"
import Image from 'next/image'

type HeroStateProps = {
    count: string,
    label: string
}

const HeroStat = ({ count, label }: HeroStateProps) => {
    return (
        <section className='flex items-center xl:items-start font-satoshi flex-col border-l-2 first:border-0 px-6 sm:px-12 md:px-6 lg:px-12 last:border-l-0 xl:last:border-l-2'>
            <h3 className='font-bold text-2xl xl:text-4xl'>{count}</h3>
            <p className='text-black/60 text-sm xl:text-base'>{label}</p>
        </section>
    )
}

const Hero = () => {
    return (
        <div className='w-full bg-[#F2F0F1]'>
            <section className='md:container flex items-center'>
                <div className='flex flex-col lg:grid lg:grid-cols-4 xl:grid-cols-3'>
                    <section className='container flex justify-center items-start flex-col col-span-2 pb-0 pt-8 lg:py-12'>
                        <h2 className="font-bold font-integral-cf text-4xl md:text-5xl xl:text-6xl">FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
                        <p className='font-satoshi text-black/60 text-sm xl:text-base mt-8'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <button className='py-4 px-16 rounded-[62px] bg-black text-white font-satoshi font-medium mt-8 block w-full md:w-auto md:inline-block'>Shop Now</button>
                        <section className='flex justify-center xl:justify-start xl:gap-0 gap-y-4 w-full flex-wrap mt-12'>
                            <HeroStat count='200+' label='International Brands' />
                            <HeroStat count='30,000+' label='Happy Customers' />
                            <div className="w-full flex-shrink-0 flex xl:hidden"></div>
                            <HeroStat count='2,000+' label='High Quality Products' />
                        </section>
                    </section>
                    <section className='flex items-end col-span-2 xl:col-span-1'>
                        <section className='w-full flex justify-center'>
                            <Image src={HeroImage} alt="Hero Image" />
                        </section>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Hero