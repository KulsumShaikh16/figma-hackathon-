import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import { IoIosArrowForward } from "react-icons/io";
import Shopcta from '@/components/Shopcta'
import Footer from '@/components/Footer'


const page = () => {
  return (
    <div>
         <div>
      <Header bgColor="#FFFFFF"/>
    </div>
      {/* ACCOUNT HERO */}
        {/* Banner Section */}
        <div className='w-screen bg-[url(/shop.svg)] bg-cover bg-no-repeat bg-center object-fill h-auto lg:h-[316px]  lg:py-10 py-6 px-8 flex flex-col justify-center items-center gap-4'>
<Image
src="/Meubel House_Logos-05.svg"
alt="logo"
width={77}
height={77}

/>
<h1 className='text-[48px]  text-center text-[#000000] font-medium '>Account</h1>
<div className='flex'><Link href="/home" className='text-[16px] font-medium'>Home</Link>
<IoIosArrowForward  className='text-[20px]'/>
<Link href="/account" className='text-[16px] font-medium'>Account</Link></div>


</div>


      
 {/* Content Section */}
 <div className="mt-8 grid gap-8 mx-4 lg:mx-32 lg:grid-cols-2">
    {/* Login Section */}
    <div className="p-4 rounded">
        <h2 className="text-[36px] font-[600] my-8">Log In</h2>
        <div className='flex flex-col'>
            <label className="my-2 text-[#000000] text-[16px] mb-2 font-[500]" htmlFor="username">
                Username or email address
            </label>
            <input
                type="text"
                id="username"
                className="w-full sm:w-[300px] my-2 border border-gray-400 rounded p-2 mb-4"
            />
        </div>
        <div className='flex flex-col'>
            <label className="my-2 text-[#000000] text-[16px] font-[500] mb-2" htmlFor="password">
                Password
            </label>
            <input
                type="password"
                id="password"
                className="w-full sm:w-[300px] my-2 border border-gray-400 rounded p-2 mb-4"
            />
        </div>
        <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-[#000000] text-[16px]  my-4">
                Remember me
            </label>
        </div>
        <div className="flex items-center">
            <button className="border border-black font-medium text-[#000000] text-[20px] px-10 py-3 rounded-xl hover:text-white hover:bg-gray-700">
                Log In
            </button>
            <p className="ml-6 text-gray-500 text-[16px] font-[300] hover:underline cursor-pointer">
                Lost Your Password?
            </p>
        </div>
    </div>

    {/* Register Section */}
    <div className="p-4 rounded">
        <h2 className="text-[36px] font-[600] text-[#000000] my-8">Register</h2>
        <label className="block my-2 text-[#000000] text-[16px] font-[500] mb-2" htmlFor="register-email">
            Email address
        </label>
        <input
            type="text"
            id="register-email"
            className="w-full sm:w-[300px] my-2 border border-gray-400 rounded p-2 mb-4"
        />
        <p className="text-[#000000] text-[16px] font-[300] my-4">
            A link to set a new password will be sent to your email address.
        </p>
        <p className="text-[#000000] text-[16px] font-[300] mb-4">
            Your personal data will be used to support your experience throughout this
            website, to manage access to your account, and for other purposes described
            in our <span className="font-bold text-[#000000] ">privacy policy</span>.
        </p>
        <button className="border my-10 border-black  text-[#000000] text-[20px] px-10 py-3 rounded-xl hover:text-white hover:bg-gray-700">
            Register
        </button>
    </div>
</div>
            


            <Shopcta />
            <Footer />
    </div> 
  )
}

export default page
