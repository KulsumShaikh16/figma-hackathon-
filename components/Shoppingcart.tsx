// 'use client'
// import React, { useState } from 'react';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { RiShoppingBag4Line } from "react-icons/ri";
// import Image from 'next/image';
// import Link from 'next/link';

// function ShoppingCart() {
//     // State to toggle cart visibility
//     const [isCartVisible, setIsCartVisible] = useState(false);

//     const toggleCart = () => {
//         setIsCartVisible(!isCartVisible);
//     };

//     return (
//         <div className="relative">
//             {/* Cart Icon */}
//             <button
//                 onClick={toggleCart}
//                 className='flex text-[27px] text-[#000000] absolute right-0 top-0 -mt-4 '
//                 aria-label="Toggle Shopping Cart"
//             >
//                 <AiOutlineShoppingCart aria-label="Shopping Cart"  />
//             </button>

//             {/* Cart Sidebar */}
//             <div
//                 className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ${isCartVisible ? 'translate-x-0' : 'translate-x-full'} sm:w-[400px] sm:mx-auto md:mx-auto md:w-[450px] lg:w-[500px]`}
//             >
//                 <div className="p-4 overflow-y-auto h-full flex flex-col justify-between ml-2 ">
//                     <div>
//                         <h2 className="text-[24px] font-[600] mb-4">Shopping Cart</h2>
//                         <hr />

//                         {/* Cart Items */}
//                         <div className="space-y-4 mt-10">
//                             <div className="flex justify-between items-center">
//                                 <div className="flex">
//                                     <Image
//                                         src="/gallery14.svg"
//                                         height={150}
//                                         width={150}
//                                         alt="Asgaard Sofa"
//                                         className="object-cover bg-[#FBEBB5] rounded-[10px]"
//                                     />
//                                     <div className="ml-4">
//                                         <h3 className="mt-8 text-[16px]">Asgaard Sofa</h3>
//                                         <p className="my-2 text-[16px] font-[300]">1 x <span className="text-[#B88E2F] text-[12px] font-[500]">Rs. 250.000.00</span></p>
//                                     </div>
//                                 </div>
//                                 <div className="bg-[#9F9F9F] h-[30px] w-[30px] text-white rounded-full flex justify-center items-center  cursor-pointer">
//                                     <span className="p-0.5 text-xl font-medium">x</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Bottom Section (Subtotal + Buttons) */}
//                     <div className="mt-auto mx-10">
//                         <div className="flex justify-between ">
//                             <p className='text-[16px] '>Subtotal</p>
//                             <p className="ml-8 my-2 text-[#B88E2F] font-[600] text-[16px]">Rs. 250,000.00</p>
//                         </div>
//                         <hr />
//                         <div className="mt-4 flex justify-between  gap-4">
//                             <Link href='/cart'>
//                                 <button className="rounded-full text-[#000000] text-[12px] hover:text-white bg-white hover:bg-gray-800 px-8 py-2 border border-black">
//                                     View Cart
//                                 </button>
//                             </Link>
//                             <Link href='/checkout'>
//                                 <button className="rounded-full text-[#000000] text-[12px] hover:text-white bg-white hover:bg-gray-800 px-8 py-2 border border-black">
//                                     Checkout
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Close Cart Button */}
//                 <button
//                     onClick={toggleCart}
//                     className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//                     aria-label="Close Cart"
//                 >
//                    <RiShoppingBag4Line  className='text-[20px] text-[#9F9F9F] '/>
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default ShoppingCart;


"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiShoppingBag4Line } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  discountedPrice: number;
  quantity: number;
}
function ShoppingCart() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isMounted, setIsMounted] = useState(false); // To check if the component is mounted

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const router = useRouter();

  const handleCheckout = () => {
    if (!isMounted) return; // Ensure the component is mounted

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Navigate to Checkout page
    router.push("/checkout");
  };

  useEffect(() => {
    setIsMounted(true); // Ensure the component is mounted
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, [isCartVisible]);

  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter((item:CartItem) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (acc: number, item: CartItem) => acc + item.discountedPrice * item.quantity,
      0
    );
  };

  return (
    <div className="relative">
      <button
        onClick={toggleCart}
        className="flex text-[27px] text-[#000000] absolute right-0 top-0 -mt-4"
        aria-label="Toggle Shopping Cart"
      >
        <AiOutlineShoppingCart aria-label="Shopping Cart" />
      </button>

      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ${
          isCartVisible ? "translate-x-0" : "translate-x-full"
        } sm:w-[400px] md:w-[450px] lg:w-[500px]`}
      >
        <div className="p-4 overflow-y-auto h-full flex flex-col justify-between ml-2">
          <div>
            <h2 className="text-[24px] font-[600] mb-4">Shopping Cart</h2>
            <hr />

            <div className="space-y-4 mt-10">
              {cartItems.length > 0 ? (
                cartItems.map((item: CartItem) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center"
                  >
                    <div className="flex">
                      <Image
                        src={item.imageUrl}
                        height={150}
                        width={150}
                        alt={item.name}
                        className="object-cover bg-[#FBEBB5] rounded-[10px]"
                      />
                      <div className="ml-4">
                        <h3 className="mt-8 text-[16px]">{item.name}</h3>
                        <p className="my-2 text-[16px] font-[300]">
                          {item.quantity} x{" "}
                          <span className="text-[#B88E2F] text-[12px] font-[500]">
                            Rs. {item.discountedPrice.toFixed(2)}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div
                      onClick={() => removeItem(item.id)}
                      className="bg-[#9F9F9F] h-[30px] w-[30px] text-white rounded-full flex justify-center items-center cursor-pointer"
                    >
                      <span className="p-0.5 text-xl font-medium">x</span>
                    </div>
                  </div>
                ))
              ) : (
                <p>Your cart is empty</p>
              )}
            </div>
          </div>

          <div className="mt-auto mx-10">
            <div className="flex justify-between">
              <p className="text-[16px]">Subtotal</p>
              <p className="ml-8 my-2 text-[#B88E2F] font-[600] text-[16px]">
                Rs. {calculateSubtotal().toFixed(2)}
              </p>
            </div>
            <hr />
            <div className="mt-4 flex justify-between gap-4">
              <Link href="/cart">
                <button className="rounded-full text-[#000000] text-[12px] hover:text-white bg-white hover:bg-gray-800 px-8 py-2 border border-black">
                  View Cart
                </button>
              </Link>
              <button
                onClick={handleCheckout}
                className="rounded-full text-[#000000] text-[12px] hover:text-white bg-white hover:bg-gray-800 px-8 py-2 border border-black"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={toggleCart}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close Cart"
        >
          <RiShoppingBag4Line className="text-[20px] text-[#9F9F9F]" />
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;

