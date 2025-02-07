"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
//import { FaShoppingCart } from "react-icons/fa";
import Shoppingcart from "@/components/Shoppingcart";
import { ClerkProvider, SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";


function Header({ bgColor = "#FBEBB5" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 
 

  return (
    <ClerkProvider>
      <header className="text-gray-600 body-font" style={{ backgroundColor: bgColor }}>
        <div className="flex justify-between items-center max-w-screen-2xl p-4 mx-auto">

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-2xl" aria-label="Toggle Mobile Menu">
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>

          {/* Logo */}
          <div className="flex justify-center flex-1 md:flex-none mt-[-4px]">
            <Link href="/">
              <Image
                src="/logo-removebg-preview.png"
                alt="Cozynest"
                width={100}
                height={60}
                className="mx-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center space-x-10 font-medium m-[-4px]">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/shop" className="hover:underline">Shop</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>

          {/* Icons & Authentication */}
          <div className="flex gap-4 md:space-x-6 items-center md:mr-6">
            <Link href='/myaccount'>
              <FaRegUser aria-label="User Profile" size={20} />
            </Link>

            {/* Search icon toggles SearchInput */}
            <FiSearch size={22} />
            <IoMdHeartEmpty aria-label="Favorites" size={25} />
           
            

            <Shoppingcart />
            
            

            {/* Authentication Section */}
            <SignedOut>
              <button className="border-2 border-black px-3 py-1 rounded-md">
                <SignInButton />
              </button>
              <button className="border-2 border-black px-3 py-1 rounded-md">
                <Link href="/signup">Sign Up</Link>
              </button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav className={`fixed top-0 left-0 w-full h-full bg-white z-20 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center p-4 border-b">
           
            <button onClick={toggleMenu} className="text-2xl" aria-label="Close Mobile Menu">
              <HiOutlineX />
            </button>
          </div>
          <ul className="flex flex-col items-center space-y-6 py-8">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/shop" className="hover:underline">Shop</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </ClerkProvider>
  );
}

export default Header;