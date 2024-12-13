import React from 'react'
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from 'next/link';

const Header = ({ bgColor = "#FBEBB5" }) => {
  return (
    <div>
      <header className="text-gray-600 body-font" style={{backgroundColor:bgColor}}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base font-[500] text-[#000000] justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
      <Link href="/shop"className="mr-5 hover:text-gray-900">Shop</Link>
      <Link href=""className="mr-5 hover:text-gray-900">About</Link>
      <Link href="/blog"className="mr-5 hover:text-gray-900">Blog</Link>
      <Link href="/contact"className="mr-5 hover:text-gray-900">Contact</Link>
    </nav>
    <div className='flex text-[28px] text-[#000000] gap-8'>
    
    <Link href="/account"> <MdOutlinePersonAddAlt /></Link>

    <Link href="/"><CiSearch /></Link>
    <Link href="/"><CiHeart />
    </Link>
    
    
    <Link href="/shoppingcart">
    <AiOutlineShoppingCart />
    </Link>
    </div>
   
  </div>
</header>

    </div>
  )
}

export default Header
