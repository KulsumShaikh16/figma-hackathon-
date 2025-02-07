"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
//import { useRouter } from "next/navigation";

interface WishlistItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

function Wishlist() {
  const [isWishlistVisible, setIsWishlistVisible] = useState(false);
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [isMounted, setIsMounted] = useState(false); // To check if the component is mounted

  const toggleWishlist = () => {
    setIsWishlistVisible(!isWishlistVisible);
  };


  const handleAddToCart = (item: WishlistItem) => {
    if (!isMounted) return; // Ensure the component is mounted

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({ ...item, quantity: 1, discountedPrice: item.price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} has been added to your cart.`);
  };

  useEffect(() => {
    setIsMounted(true); // Ensure the component is mounted
    try {
      const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlistItems(storedWishlist);
    } catch (error) {
      console.error("Error loading wishlist:", error);
      setWishlistItems([]);
    }
  }, [isWishlistVisible]);

  const removeItem = (id: string) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="relative">
      <button
        onClick={toggleWishlist}
        className="flex text-[27px] text-[#000000] absolute right-0 top-0 -mt-4"
        aria-label="Toggle Wishlist"
      >
        <AiOutlineHeart aria-label="Wishlist" />
      </button>

      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ${
          isWishlistVisible ? "translate-x-0" : "translate-x-full"
        } sm:w-[400px] md:w-[450px] lg:w-[500px]`}
      >
        <div className="p-4 overflow-y-auto h-full flex flex-col justify-between ml-2">
          <div>
            <h2 className="text-[24px] font-[600] mb-4">Wishlist</h2>
            <hr />

            <div className="space-y-4 mt-10">
              {wishlistItems.length > 0 ? (
                wishlistItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
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
                          <span className="text-[#B88E2F] text-[12px] font-[500]">
                            Rs. {item.price ? item.price.toFixed(2) : "0.00"}
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
                <p>Your wishlist is empty</p>
              )}
            </div>
          </div>

          <div className="mt-auto mx-10">
            <div className="flex justify-between gap-4">
              <Link href="/wishlist">
                <button className="rounded-full text-[#000000] text-[12px] hover:text-white bg-white hover:bg-gray-800 px-8 py-2 border border-black">
                  View Wishlist
                </button>
              </Link>
              <button
                onClick={() => handleAddToCart(wishlistItems[0])} // Add selected item to cart
                className="rounded-full text-[#000000] text-[12px] hover:text-white bg-white hover:bg-gray-800 px-8 py-2 border border-black"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={toggleWishlist}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close Wishlist"
        >
          <AiOutlineHeart className="text-[20px] text-[#9F9F9F]" />
        </button>
      </div>
    </div>
  );
}

export default Wishlist;
