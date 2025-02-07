

// 'use client'
// import Link from 'next/link';
// import Image from 'next/image'
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



                
//              <Image
//                       src="/logo-removebg-preview.png"
//                       alt="Cozynest"
//                       width={100}
//                       height={100}
//                       className="justify-center items-center"
//                       />
             
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
//                     {/* <h1 className="text-lg font-bold"> */}
//                       <Image
//                       src="/logo-removebg-preview.png"
//                       alt="Cozynest"
//                       width={200}
//                       height={200}
//                       className="justify-center items-center"
//                       />
//                       {/* </h1> */}
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
// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import { FaRegUser } from "react-icons/fa";
// import { FiSearch } from "react-icons/fi";
// import { IoMdHeartEmpty } from "react-icons/io";
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
// import Shoppingcart from "@/components/Shoppingcart";
// import { ClerkProvider, SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
// //import { useWishlist } from "../components/Wishlist";

// function Header({ bgColor = "#FBEBB5" }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//  // const { wishlist, toggleWishlist } = useWishlist(); // Access wishlist from context

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header
//       className="text-gray-600 body-font"
//       style={{ backgroundColor: bgColor }}
//     >
//       <div className="flex justify-between items-center max-w-screen-2xl p-4">
//         <button
//           onClick={toggleMenu}
//           className="md:hidden text-2xl"
//           aria-label="Toggle Mobile Menu"
//         >
//           {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
//         </button>

//         <nav className="hidden md:block">
//           <ul className="flex space-x-16 md:ml-[400px] font-medium">
//             <li>
//               <Link href="/">Home</Link>
//             </li>
//             <li>
//               <Link href="/shop">Shop</Link>
//             </li>
//             <li>
//               <Link href="/blog">Blog</Link>
//             </li>
//             <li>
//               <Link href="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>

//         <div className="flex gap-3 md:space-x-8 md:mr-32 md:ml-20 items-center">

//         <Link href='/myaccount'>
//                          <FaRegUser aria-label="User Profile" size={20} /> 

                         
//                     </Link>

          
        
//           <FiSearch size={22} />
//           <Link href="/wishlist" className="relative">
//             <IoMdHeartEmpty size={25} />
//             {/* {wishlist.length > 0 && (
//               <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
//                 {wishlist.length}
//               </span>
//             )} */}
//           </Link>
//           <Shoppingcart />
//         </div>


//         <button className="btn border-2 border-black px-2 text-normal mx-auto" >Sign up</button>
//         <button>
//         <ClerkProvider>
//             <SignedOut>
//               <SignInButton />
//             </SignedOut>
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//           </ClerkProvider>
//           </button>

        
//         {/* <button className="btn">LOGIN</button> */}
//       </div>
//     </header>
//   );
// }

// export default Header;



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
           
            

            <Shoppingcart  />
            
            

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
