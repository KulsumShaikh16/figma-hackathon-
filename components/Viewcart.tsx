import React from 'react'
import Image from "next/image"
import Link from "next/link"
import Shopcta from './Shopcta'
import Footer from './Footer'

const Viewcart = () => {
  return (
    <div
       className="max-w-screen-2xl container mx-auto pb-8 px-4">
            <div className='bg-[#faf4f4]'></div>
                
            
            {/* Banner Section */}
            <div className="relative text-black">
                <Image
                    src="/shop.svg" 
                    alt="Shop Banner"
                    height={400}
                    width={1600}
                    className="w-full h-[200px] md:h-auto object-cover"
                />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold">
                    Cart
                </h1>
                {/* Breadcrumb Section */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
                    <p className="text-gray-700 text-xs md:text-xl flex items-center">
                        <Link href="/" className="font-bold hover:underline">Home</Link>
                        <span className="font-bold mx-2">{'>'}</span>
                        <Link href="/shop" className=" hover:underline">Cart</Link>
                    </p>
                </div>
            </div>
{/* 
            {/* Cart Table Section */}
            <div className="mt-8 flex flex-col lg:flex-row justify-between md:gap-8">
                {/* Cart Items */}
<div className="w-full lg:w-3/4 bg-white rounded-lg p-4 sm:p-6">
    <table className="w-full text-xs md:text-lg table-auto border-collapse">
        <thead className="bg-[#FFF9E5] text-gray-800">
            <tr>
                <th className="py-3 text-left">Product</th>
                <th className="py-3 text-left hidden lg:table-cell">Price</th> {/* Hidden on small devices, visible on large */}
                <th className="py-3 text-left">Quantity</th>
                <th className="py-3 text-left">Subtotal</th>
                <th className="py-3 text-left"></th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-t">
                <td className="flex flex-col md:flex-row items-center py-4">
                    <Image
                        src='/gallery14.svg'
                        height={120}
                        width={120}
                        alt="Asgaard Sofa"
                        className='bg-[#FFF9E5]'
                    />
                    <p className="ml-4  text-[#9F9F9F] text-base">Asgaard Sofa <br /> x 1</p>
                </td>
                <td className="py-4 text-base md:text-lg text-[#9F9F9F] hidden lg:table-cell">Rs: 250,000.00</td> {/* Hidden on small devices, visible on large */}
                <td className="py-4 text-xs md:text-lg  text-[#9F9F9F]">
                    <input type="number" value="1" className="w-12 text-xs md:text-lg text-center border md:p-2 rounded-md" />
                </td>
                <td className="py-4 text-left text-[#000000] text-base md:text-sm ">Rs: 250,000.00</td>
               
            </tr>
        </tbody>
    </table>
</div>



                {/* Cart Totals Section */}
                <div className="w-full lg:w-2/6 bg-[#FFF9E5] rounded-md p-10 mt-8 lg:mt-0">
                    <h2 className="text-[32px] font-semibold mb-4 text-center text-[#000000]">Cart Totals</h2>
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr>
                                <th className="py-3 text-left text-base font-[500]">Subtotal</th>
                                <th className="py-3 text-right  text-[#9F9F9F]">Rs: 250,000.00</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-3 text-left font-bold">Total</td>
                                <td className="py-3 text-right text-lg font-bold text-[#B88E2F]">Rs: 250,000.00</td>
                            </tr>
                            <tr>
                                <td colSpan={2} className="py-4">
                                    <Link href="/checkout">
                                        <button className="w-full px-6 py-3 border border-[#000000] text-[20px] rounded-xl">
                                            Checkout
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='my-10'>
                <Shopcta />
                <Footer />
            </div> 
    </div>
  )
}

export default Viewcart
