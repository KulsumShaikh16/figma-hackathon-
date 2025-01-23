

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { BsFacebook } from "react-icons/bs";
// import { FaLinkedin, FaTwitter } from "react-icons/fa";
// import { IoIosStar } from "react-icons/io";
// import { IoIosStarHalf } from "react-icons/io";
// import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

// export default async function Products(params: { product: string }) {
//   const fetchData = await fetch(`https://template-0-beta.vercel.app/api/product?name=${params.product}`);
//   if (!fetchData.ok) {
//     throw new Error(`Failed to fetch product data: ${fetchData.statusText}`);
//   }
//   const data = await fetchData.json();
//   return (
//     <div className="overflow-x-hidden">
//       {/* Updated Header with better responsiveness */}
      
//       <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 ">
//         {/* Navigation */}
//         <nav className="text-gray-700 text-sm sm:text-base flex items-center space-x-2 mt-6">
//           <Link href="/" className="font-bold hover:underline">
//             Home
//           </Link>
//           <span className="font-bold">{">"}</span>
//           <Link href="/shop" className="hover:underline">
//             Shop
//           </Link>
//           <span className="font-bold">{">"}</span>
//           <span>Asgaard Sofa</span>
//         </nav>

//         <div className="flex flex-col lg:flex-row gap-5 mt-8 lg:ml-5">
//           {/* Left Side: Small Images */}
//           <div className="lg:flex flex-row lg:flex-col gap-4 w-full lg:w-[200px]  ">
//             <Image src="/smallimg1.svg" alt="Sofa Image 1" height={120} width={120} className="rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform bg-[#FFF9E5]" />
//             <Image src="/smallimg2.svg" alt="Sofa Image 2" height={120} width={120} className="rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform bg-[#FFF9E5]" />
//             <Image src="/smallimg3.svg" alt="Sofa Image 3" height={120} width={120} className="rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform bg-[#FFF9E5]" />
//             <Image src="/smallimg4.svg" alt="Sofa Image 3" height={120} width={120} className="rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform bg-[#FFF9E5]" />
//           </div>

//           {/* Center: Big Image */}
//           <div className="flex-1 lg:-ml-8">
//             <Image
//               src="/singleproduct.svg"
//               alt="Main Sofa Image"
//               height={500}
//               width={500}
//               className="w-full h-[300px] sm:h-[400px] lg:h-[550px] rounded-lg object-fill bg-[#FFF9E5] "
//             />
//           </div>

//           {/* Right Side: Product Details */}
//           <div className="flex-1 space-y-4">
//             <h3 className="text-xl sm:text-2xl font-medium">Asgaard Sofa</h3>
//             <p className="text-lg sm:text-xl text-gray-500">Rs: 250,000.00</p>
//             <div className="flex items-center space-x-2 mt-2">
//               <span className="text-yellow-500 flex"><IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf /></span>
//               <span className="text-gray-700 text-sm sm:text-base">(5 Customer Reviews)</span>
//             </div>
//             <p className="mt-4 text-[#000000] text-[13px] sm:text-base">
//             Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.


//             </p>

//             {/* Size Options */}
//             <div className="mt-4">
//               <h4 className="text-[#9F9F9F]">Size</h4>
//               <div className="flex lg:gap-4 mt-2 lg:w-[30px] sm:w-[18px] sm:mx-auto h-[30px] items-center ">
//                 <button className="border rounded-md px-6 py-2 text-sm sm:text-base hover:bg-[#FFF9E5]  ">L</button>
//                 <button className="border rounded-md px-6 py-2 text-sm sm:text-base hover:bg-[#FFF9E5]  ">MD</button>
//                 <button className="border rounded-md px-6 py-2 text-sm sm:text-base hover:bg-[#FFF9E5]  ">XL</button>
                
//               </div>
//             </div>
                
//             {/* Color Options */}
//             <div className="mt-4">
//               <h4 className="text-[#9F9F9F]">Color</h4>
//               <div className="flex gap-2 mt-2">
//                 <div className="rounded-full h-5 w-5 bg-[#816DFA]"></div>
//                 <div className="rounded-full h-5 w-5 bg-[#000000]"></div>
//                 <div className="rounded-full h-5 w-5 bg-[#CDBA7B]"></div>
//               </div>
//             </div>

//             {/* Quantity and Add to Cart */}
//             <div className="flex items-center gap-4 mt-6 flex-wrap">
//               <div className="flex items-center border p-2 gap-4">
//                 <button aria-label="Decrease quantity">-</button>
//                 <span>1</span>
//                 <button aria-label="Increase quantity">+</button>
//               </div>
//               <Link href="/cart">
//               <button className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90">
//                 Add To Cart
//               </button>
//               </Link>
//             </div>

//             <hr className="my-6" />

//             {/* Additional Information */}
//             <div className="space-y-4 text-[16px] text-[#9F9F9F]">
//               <div className="flex ">
//                 <span className="mr-10">SKU</span>
//                 <span className="mr-3">:</span>
//                 <span>SS001</span>
//               </div>
//               <div className="flex ">
//                 <span className="mr-10">Category</span>
//                 <span className="mr-3">:</span>
//                 <span>Sofas</span>
//               </div>
//               <div className="flex ">
//                 <span className="mr-10">Tags</span>
//                 <span className="mr-3">:</span>
//                 <span>Sofa, Chair, Home, Shop</span>
//               </div>
//               <div className="flex  items-center mt-4">
//                 <span className="mr-10">Share</span>
//                 <span className="mr-3">:</span>
//                 <div className="flex space-x-2 text-[#000000]">
//                   <BsFacebook className="cursor-pointer" size={25} />
//                   <FaLinkedin className="cursor-pointer" size={25} />
//                   <FaTwitter className="cursor-pointer" size={25} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <hr className="mt-8" />

       
        
        
//       </div>
//     </div>
// }
//   );




