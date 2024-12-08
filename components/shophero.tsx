import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";

const Shophero = () => {
  return (
    <div>
       <div className='w-screen bg-[url(/shop.svg)] bg-cover bg-no-repeat bg-center object-fill h-auto lg:h-[316px]  lg:py-10 py-6 px-8 flex flex-col justify-center items-center gap-4'>
<Image
src="/Meubel House_Logos-05.svg"
alt="logo"
width={77}
height={77}

/>
<h1 className='text-[48px]  text-center text-[#000000] font-medium '>Shop</h1>
<div className='flex'><Link href="/home" className='text-[16px] font-medium'>Home</Link>
<IoIosArrowForward  className='text-[20px]'/>
<Link href="/shop" className='text-[16px] font-medium'>Shop</Link></div>


</div>
    </div>
  )
}

export default Shophero
