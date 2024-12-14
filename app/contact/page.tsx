import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoLocationSharp } from 'react-icons/io5'
import { FaPhoneAlt } from 'react-icons/fa'
import { BsFillClockFill } from 'react-icons/bs'
import { IoIosArrowForward } from "react-icons/io";
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function Contact() {
    return (
        <div>

<div>
      <Header bgColor="#FFFFFF"/>
    </div>
        <div className="max-w-screen-xl container mx-auto pb-8 px-4">
             
            
    
            {/* Banner Section */}
            <div className='w-screen bg-[url(/shop.svg)] bg-cover bg-no-repeat bg-center object-fill h-auto lg:h-[316px]  lg:py-10 py-6 px-8 flex flex-col justify-center items-center gap-4'>
<Image
src="/Meubel House_Logos-05.svg"
alt="logo"
width={77}
height={77}

/>
<h1 className='text-[48px]  text-center text-[#000000] font-medium '>Contact</h1>
<div className='flex'><Link href="/home" className='text-[16px] font-medium'>Home</Link>
<IoIosArrowForward  className='text-[20px]'/>
<Link href="/account" className='text-[16px] font-medium'>Contact</Link></div>


</div>


           {/* Contact Info Section */}
<section className="mt-16 text-center px-4 md:px-32">
    <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
    <p className="mt-4 text-lg  text-[#9F9F9F]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
</section>

<div className="flex flex-col md:flex-row justify-between mt-12 gap-12 md:gap-16 ">
    {/* Contact Details */}
    <div className="flex flex-col gap-8 ">
        <div className="flex items-center space-x-4 my-6">
            <div>
                <span className='flex '>
                    <IoLocationSharp size={25} className="text-4xl text-primary " />
                    <h3 className="font-semibold text-xl ml-4">Address</h3>
                </span>
                <p className='ml-10'>
                    238 5<sup>th</sup> SE Avenue,
                    <br /> New York NY10000,
                    <br /> United States
                </p>
            </div>
        </div>
        <div className="flex items-center space-x-4 my-6">
            <div>
                <span className='flex'>
                    <FaPhoneAlt size={25} className="text-4xl text-primary" />
                    <h3 className="font-semibold ml-4 text-lg">Phone</h3>
                </span>
                <p className='ml-10'>Mobile : +(84)546-6789</p>
                <p className='ml-10'>Hotline : +(84)546-6789</p>
            </div>
        </div>
        <div className="flex items-center space-x-4 my-6">
            <div>
                <span className='flex'>
                    <BsFillClockFill size={25} className="text-4xl text-primary" />
                    <h3 className="ml-4 font-semibold text-lg">Working Time</h3>
                </span>
                <p className='ml-10'>Monday-Friday: 9:00 - 
                    <br />22:00</p>
                <p className='ml-10'>Saturday-Sunday: 9:00 - 
                    <br />21:00</p>
            </div>
        </div>
    </div>

    {/* Contact Form Section */}
    <div className="mt-16 bg-[#FFFFFF] rounded-lg p-8 md:w-1/2">
        <form className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-[16px] font-medium  text-[#000000]">Your Name</label>
                <input type="text" id="name" placeholder="Abc" className="w-full px-6 py-3 mt-2 text-[16px]  text-[#9F9F9F] border  rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
                <label htmlFor="email" className="block text-[16px] font-medium  text-[#000000]"> Email Address</label>
                <input type="email" id="email" placeholder="Abc@def.com" className="w-full px-6 py-3 text-[16px]  text-[#9F9F9F] mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
                <label htmlFor="subject" className="block text-[16px] font-medium  text-[#000000]">Subject</label>
                <input type="text" id="subject" placeholder="This is optional" className="w-full px-6 text-[16px]  text-[#9F9F9F] py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
                <label htmlFor="message" className="block text-[16px] font-medium  text-[#000000]">Your Message</label>
                <textarea id="message" placeholder="Hi, I would like to ask about..." rows={4} className="w-full px-6 py-3 mt-2 border text-[16px]  text-[#9F9F9F] rounded-md focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
            </div>
        </form>
        <button type="submit" className="py-3 px-16 border border-[#000000] text-[16px] rounded-xl mt-8">Submit</button>
    </div>
</div>

        </div>
        <Footer />
        </div>
    )
}

export default Contact;