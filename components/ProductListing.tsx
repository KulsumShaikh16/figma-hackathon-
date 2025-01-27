// import React from "react";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { productType } from "./Utils/helper";



// const Gallery =async () => {
//    const products = await client.fetch(`
//       *[_type == "product"]{
//           _id,
//           name,
//           price,
//           "imageUrl": image.asset->url,
//           description,
//           category,
//           discountPercentage,
//           }`)
  
 
//   return (
//     <div className="bg-[#FFFFFF] py-24">
//       <div className="container mx-auto text-center mb-20 px-5">
//         <h2 className="text-3xl md:text-4xl text-[#000000] font-medium mb-1">
//           Top Picks For You
//         </h2>
//         <p className="text-sm md:text-base font-medium mb-4 text-[#9F9F9F]">
//           Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
//         </p>
//       </div>

//       {/* Images Card */}
//       <div className="container mx-auto px-5">
//       {products.map((product: productType) => (
//         <div 
//         key={product.id}className="flex flex-wrap -m-4">
//           {[
//             {
//               src: '/gallery1.svg',
//               title: 'Trenton modular sofa_3',
//               price: 'Rs. 25,000.00',
//             },
//             {
//               src: '/gallery2.svg',
//               title: 'Granite dining table with dining chair',
//               price: 'Rs. 25,000.00',
//             },
//             {
//               src: '/gallery3.svg',
//               title: 'Outdoor bar table and stool',
//               price: 'Rs. 25,000.00',
//             },
//             {
//               src: '/gallery4.svg',
//               title: 'Plain console with teak mirror',
//               price: 'Rs. 25,000.00',
//             },
//             {
//               src: '/gallery5.svg',
//               title: 'Grain coffee table',
//               price: 'Rs. 15,000.00',
//             },
//             {
//               src: '/gallery6.svg',
//               title: 'Kent coffee table',
//               price: 'Rs. 225,000.00',
//             },
//             {
//               src: '/gallery7.svg',
//               title: 'Round coffee table_color 2',
//               price: 'Rs. 251,000.00',
//             },
//             {
//               src: '/gallery8.svg',
//               title: 'Reclaimed teak coffee table',
//               price: 'Rs. 25,200.00',
//             },
//             {
//               src: '/gallery9.svg',
//               title: 'Plain console_',
//               price: 'Rs. 258,200.00',
//             },
//             {
//               src: '/gallery10.svg',
//               title: 'Reclaimed teak Sideboard',
//               price: 'Rs. 20,000.00',
//             },
//             {
//               src: '/gallery11.svg',
//               title: 'SJP_0825 ',
//               price: 'Rs. 200,000.00',
//             },
//             {
//               src: '/gallery12.svg',
//               title: 'Bella chair and table',
//               price: 'Rs. 100,000.00',
//             },
//             {
//               src: '/gallery13.svg',
//               title: 'Granite square side table',
//               price: 'Rs. 258,800.00',
//             },
//             {
//               src: '/gallery14.svg',
//               title: 'Asgaard sofa',
//               price: 'Rs. 250,000.00',
//             },
//             {
//               src: '/gallery15.svg',
//               title: 'Maya sofa three seater',
//               price: 'Rs. 115,000.00',
//             },{
//               src: '/gallery16.svg',
//               title: 'Outdoor sofa set',
//               price: 'Rs. 244,000.00',
//             },
           
//           ].map((item, index) => (
//             <div key={index} className="p-4 md:w-1/2 lg:w-1/4">
//               <div className="h-full overflow-hidden">
//                 <Image
//                   className="lg:h-48 md:h-36 w-full object-cover object-center"
//                   src={item.src}
//                   alt={item.title}
//                   width={750}
//                   height={384.86}
//                 />
//                 <div className="p-6">
//                   <h1 className="title-font text-lg text-[#000000] mb-3">
//                     {item.title}
//                   </h1>
//                   <p className="leading-relaxed mb-3 text-xl font-medium">
//                     {item.price}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center items-center mt-8">
//           <button className="flex justify-center items-center text-[#000000] underline underline-offset-8 text-lg font-medium">
//             View More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;






// import { client } from "@/sanity/lib/sanityClient"; // Update path as needed
// import { urlFor } from "@/sanity/lib/image"; // Ensure urlFor is imported
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// //Define the product type
// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   imageUrl: string; // Use a string for the resolved URL
//   slug: { current: string }; // Add the slug property
// }

// const ProductListing = async () => {
//   // Fetch data from Sanity
//   const data = await client.fetch(`
//    *[_type == "product"]{
//   _id,
//   name,
//   "slug": slug.current,
//   price,
// "imageUrl": image.asset->url
// }
//   `);
//   console.log(data);

//   return (
//     <div className="bg-[#FFFFFF] py-24">
//       <div className="container mx-auto text-center mb-20 px-5">
//         <h2 className="text-3xl md:text-4xl text-[#000000] font-medium mb-1">
//           Top Picks For You
//         </h2>
//         <p className="text-sm md:text-base font-medium mb-4 text-[#9F9F9F]">
//           Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
//         </p>
//       </div>

//       {/* Images Card */}
//       <div className="container mx-auto px-5">
//         <div className="flex flex-wrap -m-4">
//         {data.map((item: Product) => (
//             <div key={item._id} className="p-4 md:w-1/2 lg:w-1/4">
//              <Link href={`/product/${item.slug}`}>
//               <div className="h-full overflow-hidden">
//               {item.imageUrl ? (
//                   <Image
//                     className="lg:h-48 md:h-36 w-full object-cover object-center"
//                     src={item.imageUrl}
//                     alt={item.name}
//                     width={750}
//                     height={384.86}
//                   />): (
//                     <div className="flex justify-center items-center h-48 bg-gray-200">
//                       <p>No Image Available</p>
//                     </div>
//                   )}
                

//                 <div className="p-6">
//                   <h1 className="title-font text-lg text-[#000000] mb-3">
//                     {item.name}
//                   </h1>
//                   <p className="leading-relaxed mb-3 text-xl font-medium">
//                     Rs. {item.price}
//                   </p>
//                 </div>
//               </div>
//               </Link>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center items-center mt-8">
//           <button className="flex justify-center items-center text-[#000000] underline underline-offset-8 text-lg font-medium">
//             View More
//           </button>
         
//         </div>
//       </div>
     
//     </div>
//   );
// };

// export default ProductListing;




"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/sanityClient";
import Image from "next/image";
import Link from "next/link";
import Filter from "./Filter";
import Pagination from "./Pagination";
import { IoMdHeartEmpty } from 'react-icons/io';
import { FaCartShopping } from "react-icons/fa6";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [view, setView] = useState("grid"); // State to track view type
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

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
          
          {paginatedProducts.map((item: any) => (
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