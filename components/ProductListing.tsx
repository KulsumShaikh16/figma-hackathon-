

"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import Filter from "./Filter";
import Pagination from "./Pagination";
import { IoMdHeartEmpty } from 'react-icons/io';
import { FaCartShopping } from "react-icons/fa6";

interface Product1 {
  _id: string;
  name: string;
  slug: string;
  price: number;
  imageUrl: string;
}
const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [view, setView] = useState("grid"); // State to track view type
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
console.log(products)
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(`
        *[_type == "product"]{
          _id,
          name,
          "slug": slug.current,
          price,
          "imageUrl": image.asset->url
        }
      `);
      setProducts(data);
      setFilteredProducts(data);
    };

    fetchProducts();
  }, []);

  const handleViewChange = (newView: string) => {
    setView(newView); // Update the view state
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const addToCart = () => {
    // Add your add to cart logic here
    console.log("Product added to cart");
  };

  return (
    <div className="bg-[#FFFFFF] mb-10">
      <Filter onViewChange={handleViewChange} />

      <div className="container mx-auto px-5 h-full">
        <div
          className={`flex flex-wrap -m-4 h-full ${
            view === "list" ? "flex-col " : "flex-row"
          }`}
        >
          
          {paginatedProducts.map((item:Product1) => (
            <div
              key={item._id}
              className={`${
                view === "list" ? "w-full" : "p-4 md:w-1/2 lg:w-1/4 h-full "
              }`}
            >
              <Link href={`/product/${item.slug}`}>
  <div className="overflow-hidden">
    {item.imageUrl ? (
      <Image
        className={`object-cover rounded-lg ${
          view === "list" ? "h-full object-contain  object-center w-full" : "lg:h-48 md:h-36"
        }`}
        src={item.imageUrl}
        alt={item.name}
        width={750}
        height={384.86}
      />
    ) : (
      <div className="flex justify-center items-center h-48 bg-gray-200 rounded-lg">
        <p>No Image Available</p>
      </div>
                  )}
                  <div className="flex justify-between item-center">
                  <div className="p-6">
                    <h1 className="title-font text-lg text-[#000000] mb-3">
                      {item.name}
                    </h1>
                   
                    <p className="leading-relaxed mb-3 text-xl font-medium ">
                      Rs. {item.price}
                    </p>
                    </div>
                    <div className="flex flex-col p-6">
                      <button  className="flex ml-auto text-black  border-0 py-2 px-6 focus:outline-none rounded"> <IoMdHeartEmpty aria-label="Favorites" size={25} /></button>
                    <button
                  onClick={addToCart}
                  className="flex ml-auto text-black text-[25px] border-0 py-2 px-6 focus:outline-none rounded"
                >
                 <FaCartShopping />
                </button>
                </div>
                </div>
                
                 
                </div>
              </Link>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ProductListing;

