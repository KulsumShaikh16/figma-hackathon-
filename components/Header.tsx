

// 'use client'
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { FaRegUser } from 'react-icons/fa';
// import { FiSearch } from 'react-icons/fi';
// import { IoMdHeartEmpty } from 'react-icons/io';
// import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'; 
// import Shoppingcart from '@/components/Shoppingcart';

// function Header({ bgColor = "#FBEBB5" }) {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     // Toggle menu visibility
//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//       <div>
//         <header  className="text-gray-600 body-font"
//             style={{ backgroundColor: bgColor }}>

//             <div className="flex justify-between items-center max-w-screen-2xl p-4">
              

//                 {/* Mobile Menu Button */}
//                 <button
//                     onClick={toggleMenu}
//                     className="md:hidden text-2xl"
//                     aria-label="Toggle Mobile Menu"
//                 >
//                     {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
//                 </button>

//                 {/* Navigation Links for Desktop */}
//                 <nav className="hidden md:block">
//                     <ul className="flex space-x-16 md:ml-[400px] font-medium">
//                         <li>
//                             <Link href="/" aria-label="Navigate to Home" className="hover:underline">Home</Link>
//                         </li>
//                         <li>
//                             <Link href="/shop" aria-label="Navigate to Shop" className="hover:underline">Shop</Link>
//                         </li>
                       
//                         <li>
//                             <Link href="/blog" aria-label="Navigate to Blog" className="hover:underline">Blog</Link>
//                         </li>
//                         <li>
//                             <Link href="/contact" aria-label="Navigate to Contact" className="hover:underline">Contact</Link>
//                         </li>
//                     </ul>
//                 </nav>

//                 {/* Icons */}
//                 <div className="flex gap-3 md:space-x-8 md:mr-32 md:ml-20 items-center">
//                     <Link href='/myaccount'>
//                         <FaRegUser aria-label="User Profile" size={20} />
//                     </Link>
//                     <FiSearch aria-label="Search" size={22} />
//                     <IoMdHeartEmpty aria-label="Favorites" size={25} />
//                     <div className="flex items-center z-10 p-6">
//                         <Shoppingcart />
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu (Visible when isMenuOpen is true) */}
//             <nav
//                 className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-20 transition-transform duration-300 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
//             >
//                 <div className="flex justify-between items-center p-4 border-b">
//                     <h1 className="text-lg font-bold">Your Logo</h1>
//                     <button
//                         onClick={toggleMenu}
//                         className="text-2xl"
//                         aria-label="Close Mobile Menu"
//                     >
//                         <HiOutlineX />
//                     </button>
//                 </div>
//                 <ul className="flex flex-col items-center space-y-6 py-8">
//                     <li>
//                         <Link href="/" aria-label="Navigate to Home" className="hover:underline">Home</Link>
//                     </li>
//                     <li>
//                         <Link href="/shop" aria-label="Navigate to Shop" className="hover:underline">Shop</Link>
//                     </li>
                    
//                     <li>
//                         <Link href="/blog" aria-label="Navigate to Blog" className="hover:underline">Blog</Link>
//                     </li>
//                     <li>
//                         <Link href="/contact" aria-label="Navigate to Contact" className="hover:underline">Contact</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//         </div>
//     );
// }

// export default Header;
"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Shoppingcart from "@/components/Shoppingcart";
//import { useWishlist } from "../components/Wishlist";

function Header({ bgColor = "#FBEBB5" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 // const { wishlist, toggleWishlist } = useWishlist(); // Access wishlist from context

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="text-gray-600 body-font"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex justify-between items-center max-w-screen-2xl p-4">
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl"
          aria-label="Toggle Mobile Menu"
        >
          {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-16 md:ml-[400px] font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="flex gap-3 md:space-x-8 md:mr-32 md:ml-20 items-center">
          <Link href="/myaccount">
            <FaRegUser size={20} />
          </Link>
          <FiSearch size={22} />
          <Link href="/wishlist" className="relative">
            <IoMdHeartEmpty size={25} />
            {/* {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {wishlist.length}
              </span>
            )} */}
          </Link>
          <Shoppingcart />
        </div>
      </div>
    </header>
  );
}

export default Header;
