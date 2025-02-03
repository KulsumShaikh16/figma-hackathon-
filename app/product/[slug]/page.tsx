// // import { groq } from "next-sanity"
// // import { client } from "@/sanity/lib/sanityClient"
// // import product from "@/sanity/schemaTypes/product"
// // import Image from "next/image"
// // import Header from "@/components/Header"
// // import Footer from "@/components/Footer"
// // import { useState } from "react"

// // interface Product {
// //     _id: string;
// //     name: string;
// //     price: number;
// //     description: string;
// //     category: string;
// //     discountPercentage: number;
// //     imageUrl: string;
// // }


// // interface ProductPageProps{
// //     params : Promise<{slug : string}>
// // }

// // async function getProduct(slug:string):Promise<Product>{
// //     return client.fetch(
// //         groq`*[_type == "product" && slug.current == $slug][0]{
// //             _id,
// //             name,
// //             price,
// //             description,
// //             category,
// //             discountPercentage,
// //             "imageUrl": image.asset->url
// //         }
// //     `, {slug})
// // } 

// // export default async function ProductPage({ params }: ProductPageProps) {
// //     const { slug } = await params;
// //     const product = await getProduct(slug);
// //     const [cartItem, setCartItem] = useState({
// //         id: product?._id,
// //         name: product?.name,
// //         price: product?.price,
// //         description: product?.description,
// //         category: product?.category,
// //         discountPercentage: product?.discountPercentage,
// //         imageUrl: product?.imageUrl,
// //         uuid: undefined as number | string | undefined,
// //     });

// //     if (!product) {
// //         return <div>Product not found</div>;
// //     }
// //     return (
// //         <div>
// //             <Header bgColor="#FFFFFF"/>
// //             {/* <h1>{product.name}</h1>
// //             <p>{product.description}</p>
// //             <p>Price: {product.price}</p>
// //             <p>Discount: {product.discountPercentage}%</p>
// //             <img src={product.imageUrl} alt={product.name} />
// //             Render the product details */}

// // <section className="text-gray-600 body-font overflow-hidden">
// //   <div className="container px-5 py-24 mx-auto">
// //     <div className="lg:w-4/5 mx-auto flex flex-wrap">
// //       <Image
        
       
// //         src={product.imageUrl} 
// //         alt={product.name}
// //         width={750}
// //         height={700}
// //          className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
// //       />
// //       <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        
// //         <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
// //          {product.name}
// //         </h1>
// //         <div className="flex mb-4">
// //           <span className="flex items-center">
// //             <svg
// //               fill="currentColor"
// //               stroke="currentColor"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               className="w-4 h-4 text-indigo-500"
// //               viewBox="0 0 24 24"
// //             >
// //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// //             </svg>
// //             <svg
// //               fill="currentColor"
// //               stroke="currentColor"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               className="w-4 h-4 text-indigo-500"
// //               viewBox="0 0 24 24"
// //             >
// //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// //             </svg>
// //             <svg
// //               fill="currentColor"
// //               stroke="currentColor"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               className="w-4 h-4 text-indigo-500"
// //               viewBox="0 0 24 24"
// //             >
// //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// //             </svg>
// //             <svg
// //               fill="currentColor"
// //               stroke="currentColor"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               className="w-4 h-4 text-indigo-500"
// //               viewBox="0 0 24 24"
// //             >
// //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// //             </svg>
// //             <svg
// //               fill="none"
// //               stroke="currentColor"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               className="w-4 h-4 text-indigo-500"
// //               viewBox="0 0 24 24"
// //             >
// //               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// //             </svg>
// //             <span className="text-gray-600 ml-3">4 Reviews</span>
// //           </span>
// //           <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
// //             <a className="text-gray-500">
// //               <svg
// //                 fill="currentColor"
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 className="w-5 h-5"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
// //               </svg>
// //             </a>
// //             <a className="text-gray-500">
// //               <svg
// //                 fill="currentColor"
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 className="w-5 h-5"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
// //               </svg>
// //             </a>
// //             <a className="text-gray-500">
// //               <svg
// //                 fill="currentColor"
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 className="w-5 h-5"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
// //               </svg>
// //             </a>
// //           </span>
// //         </div>
// //         <p className="leading-relaxed">
// //           {product.description}
// //         </p>
// //         <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
// //           <div className="flex">
// //             <span className="mr-3">Color</span>
// //             <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
// //             <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
// //             <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
// //           </div>
// //           <div className="flex ml-6 items-center">
// //             <span className="mr-3">Size</span>
// //             <div className="relative">
// //               <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
// //                 <option>SM</option>
// //                 <option>M</option>
// //                 <option>L</option>
// //                 <option>XL</option>
// //               </select>
// //               <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
// //                 <svg
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   className="w-4 h-4"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path d="M6 9l6 6 6-6" />
// //                 </svg>
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="flex gap-10">
// //           <span className="title-font font-medium text-2xl text-gray-900 line-through">
// //             ${product.price}
// //           </span>
// //           <span className="title-font font-medium text-2xl text-gray-900">
// //             ${product.discountPercentage}
// //           </span>
// //           <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
// //             Add to Cart
// //           </button>
// //           <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
// //             <svg
// //               fill="currentColor"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               className="w-5 h-5"
// //               viewBox="0 0 24 24"
// //             >
// //               <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
// //             </svg>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // </section>
// // <Footer />
// //         </div>
// //     )
// // }

// "use client"

// import { groq } from "next-sanity";
// import { client } from "@/sanity/lib/sanityClient";
// import Image from "next/image";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { useState, useEffect } from "react";

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   category: string;
//   discountPercentage: number;
//   imageUrl: string;
// }

// interface ProductPageProps {
//   params: { slug: string };
// }

// async function getProduct(slug: string): Promise<Product> {
//   return client.fetch(
//     groq`*[_type == "product" && slug.current == $slug][0]{
//       _id,
//       name,
//       price,
//       description,
//       category,
//       discountPercentage,
//       "imageUrl": image.asset->url
//     }`,
//     { slug }
//   );
// }

// export default function ProductPage({ params }: ProductPageProps) {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const productData = await getProduct(params.slug);
//         setProduct(productData);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//         setProduct(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [params.slug]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const discountedPrice = (
//     product.price - (product.price * product.discountPercentage) / 100
//   ).toFixed(2);

//   return (
//     <div>
//       <Header bgColor="#FFFFFF" />
//       <section className="text-gray-600 body-font overflow-hidden">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="lg:w-4/5 mx-auto flex flex-wrap">
//             <Image
//               src={product.imageUrl}
//               alt={product.name}
//               width={750}
//               height={550}
//               className="lg:w-1/2 w-full lg:h-auto h-54 object-cover object-center rounded"
//             />
//             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-12 mt-6 lg:mt-0">
//               <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//                 {product.name}
//               </h1>
//               <p className="leading-relaxed">{product.description}</p>
//               <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//                 <div className="flex">
//                   <span className="mr-3">Color</span>
//                   <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
//                   <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
//                   <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
//                 </div>
//                 <div className="flex ml-6 items-center">
//                   <span className="mr-3">Size</span>
//                   <div className="relative">
//                     <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
//                       <option>SM</option>
//                       <option>M</option>
//                       <option>L</option>
//                       <option>XL</option>
//                     </select>
//                     <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
//                       <svg
//                         fill="none"
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         className="w-4 h-4"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M6 9l6 6 6-6" />
//                       </svg>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex gap-10">
//                 <span className="title-font font-medium text-2xl text-gray-900 line-through">
//                   ${product.price}
//                 </span>
//                 <span className="title-font font-medium text-2xl text-gray-900">
//                   ${discountedPrice}
//                 </span>
//                 <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }




"use client";

import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect,use } from "react"; // Import Wishlist hook

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  discountPercentage: number;
  imageUrl: string;
}

// interface ProductPageProps {
//   params: { slug: string };
// }

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      price,
      description,
      category,
      discountPercentage,
      "imageUrl": image.asset->url
    }`,
    { slug }
  );
}

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}
export default function ProductPage({ params }: ProductPageProps ) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1); // Quantity state
 // const { wishlist, toggleWishlist } = useWishlist(); // Access wishlist and toggleWishlist
const Params = use(params)
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProduct(Params.slug);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [Params.slug]);

  const addToCart = () => {
    if (!product) return;

    // Create cart item
    const cartItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      discountedPrice:
        product.price - (product.price * product.discountPercentage) / 100,
      quantity,
      imageUrl: product.imageUrl,
    };

    // Save to local storage
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItemIndex = cart.findIndex((item: Product) => item._id === product._id);

    if (existingItemIndex > -1) {
      // Update quantity if item already exists
      cart[existingItemIndex].quantity += quantity;
    } else {
      // Add new item
      cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${quantity} item(s) added to cart!`);
  };

  if (loading) {
    return
    
     <div>
      <Image 
      src="https://i.gifer.com/ZKZg.gif"
      alt="loading"
      width={100}
      height={100}/>

    </div>
    
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const discountedPrice = (
    product.price - (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div>
      <Header bgColor="#FFFFFF" />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={750}
              height={550}
              className="lg:w-1/2 w-full lg:h-auto h-54 object-cover object-center rounded"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-12 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex items-center">
                  <span className="mr-3">Quantity</span>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-16 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                  />
                </div>
              </div>
              <div className="flex gap-10">
                <span className="title-font font-medium text-2xl text-gray-900 line-through">
                  ${product.price}
                </span>
                <span className="title-font font-medium text-2xl text-gray-900">
                ${discountedPrice}
                </span>
                <button
                  onClick={addToCart}
                  className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
                >
                  Add to Cart
                </button>
              </div>
              {/* <div className="flex gap-3 mt-6">
                <button
                  onClick={() => toggleWishlist(product._id)}
                  className="flex items-center text-red-500"
                >
                  {wishlist.includes(product._id) ? (
                    <IoMdHeart size={30} />
                  ) : (
                    <IoMdHeartEmpty size={30} />
                  )}
                  <span className="ml-2">
                    {wishlist.includes(product._id)
                      ? "Remove from Wishlist"
                      : "Add to Wishlist"}
                  </span>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

