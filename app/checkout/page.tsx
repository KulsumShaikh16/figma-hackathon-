// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import Shopcta from '@/components/Shopcta'
// import Header from '@/components/Header'
// import Footer from '@/components/Footer'
// import { IoIosArrowForward } from "react-icons/io";

// function CheackOut() {
//     return (

//         <div>
//         <div>
//      <Header bgColor="#FFFFFF"/>
//    </div>
//         <div className="max-w-screen-2xl container  pb-8 px-4">
            

//             {/* Banner Section */}
//             <div className='w-screen bg-[url(/shop.svg)] bg-cover bg-no-repeat bg-center object-fill h-auto lg:h-[316px]  lg:py-10 py-6 px-8 flex flex-col justify-center items-center gap-4'>
// <Image
// src="/Meubel House_Logos-05.svg"
// alt="logo"
// width={77}
// height={77}

// />
// <h1 className='text-[48px]  text-center text-[#000000] font-medium '>Checkout</h1>
// <div className='flex'><Link href="/home" className='text-[16px] font-medium'>Home</Link>
// <IoIosArrowForward  className='text-[20px]'/>
// <Link href="/account" className='text-[16px] font-medium'>Checkout</Link></div>


// </div>


//             {/* Billing Section */}
// <div className="flex flex-col lg:flex-row mx-10 gap-6 mt-8">
//     <div className="w-full lg:w-1/2 md:mx-20">
//         <h3 className="font-semibold text-2xl mt-10 mb-8">Billing Details</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//                 <label htmlFor="firstName" className="block my-4">First Name</label>
//                 <input type="text" id="firstName" className="w-full border border-gray-500 rounded p-3" />
//             </div>
//             <div>
//                 <label htmlFor="lastName" className="block my-4">Last Name</label>
//                 <input type="text" id="lastName" className="w-full border border-gray-500 rounded p-3" />
//             </div>
//         </div>

//         <div className="mt-4">
//             <label htmlFor="companyName" className="block my-4 mt-6">Company Name (Optional)</label>
//             <input type="text" id="companyName" className="w-full border-gray-500 rounded border p-3" />
//         </div>

//         <div className="mt-4">
//             <label htmlFor="country" className="block my-4 mt-6">Country / Region</label>
//             <input type="text" id="country" className="w-full border-gray-500 rounded border p-3" />
//         </div>

//         <div className="mt-4">
//             <label htmlFor="address" className="block my-4 mt-6">Street Address</label>
//             <input type="text" id="address" className="w-full border-gray-500 rounded border p-3" />
//         </div>

//         <div className="gap-4 mt-4">
//             <div>
//                 <label htmlFor="town" className="block my-4 mt-6">Town / City</label>
//                 <input type="text" id="town" className="w-full border-gray-500 rounded border p-3" />
//             </div>
//             <div>
//                 <label htmlFor="province" className="block my-4 mt-6">Province</label>
//                 <input type="text" id="province" className="w-full border-gray-500 rounded border p-3" />
//             </div>
//         </div>

//         <div className="mt-4">
//             <label htmlFor="zip" className="block my-4 mt-6">ZIP Code</label>
//             <input type="text" id="zip" className="w-full border-gray-500 rounded border p-3" />
//         </div>

//         <div className="mt-4">
//             <label htmlFor="phone" className="block my-4 mt-6">Phone</label>
//             <input type="text" id="phone" className="w-full border-gray-500 rounded border p-3" />
//         </div>

//         <div className="mt-4">
//             <label htmlFor="email" className="block my-4 mt-6">Email Address</label>
//             <input type="text" id="email" className="w-full border-gray-500 rounded border p-3" />
//         </div>

//         <div className="mt-4">
//             <input type="text" id="additionalInfo" placeholder="Additional Information" className="w-full border-gray-500 my-4 mt-6 rounded border p-3" />
//         </div>
//     </div>

//     {/* Order Summary */}
//     <div className="w-full lg:w-1/2 md:mx-20 mt-4 lg:mt-0">
//         <div className="mt-4">
//             <table className="w-full table-auto">
//                 <thead>
//                     <tr>
//                         <th className="py-2 text-left text-xl">Product</th>
//                         <th className="py-2 text-right text-xl">Subtotal</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td className="py-2 text-gray-500">Asgaard Sofa x 1</td>
//                         <td className="py-2 text-right">Rs: 250,000.00</td>
//                     </tr>
//                     <tr>
//                         <td className="py-2 font-semibold">Subtotal</td>
//                         <td className="py-2 text-right">Rs: 250,000.00</td>
//                     </tr>
//                     <tr className="border-b font-semibold">
//                         <td className="py-2">Total</td>
//                         <td className="py-2 text-yellow-700 text-right text-xl">Rs: 250,000.00</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>

//         {/* Payment Method */}
//         <div className="flex items-center mt-4">
//             <input type="radio" id="bankTransfer" name="payment" className="mr-2" />
//             <label htmlFor="bankTransfer" className="text-md">Direct Bank Transfer</label>
//         </div>
//         <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at arcu at eros malesuada facilisis.</p>

//         <div className="flex items-center mt-4 text-gray-400">
//             <input type="radio" id="cod" name="payment" className="mr-2" />
//             <label htmlFor="cod" className="text-md">Cash On Delivery</label>
//         </div>
//         <p className="text-sm text-gray-600 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at arcu at eros malesuada facilisis.</p>

//         <button className="mt-6 border border-black py-3 px-14 rounded-xl">Place Order</button>
//     </div>
// </div>

//            <div className='my-10'>
//            <Shopcta />
//            <Footer />
//            </div>
//         </div>
//         </div>
//     )
// }

// export default CheackOut
// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { IoIosArrowForward } from "react-icons/io";

// function Checkout() {
//   interface CartItem {
//     name: string;
//     discountedPrice: number;
//     quantity: number;
//   }

//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [subtotal, setSubtotal] = useState(0);
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCart(cartData);

//     const total = cartData.reduce(
//       (acc: number, item: { discountedPrice: number; quantity: number }) =>
//         acc + item.discountedPrice * item.quantity,
//       0
//     );
//     setSubtotal(total);
//   }, []);

//   const handlePlaceOrder = () => {
//     if (!selectedPaymentMethod) {
//       setError("Please select a payment method.");
//       return;
//     }

//     setError(null);
//     alert(`Order placed successfully! Total: Rs. ${subtotal.toFixed(2)}`);
//     localStorage.removeItem("cart");
//     setCart([]);
//     setSubtotal(0);
//   };

//   return (
//     <div>
//       <Header bgColor="#FFFFFF" />
//       <div className="max-w-screen-2xl container pb-12 px-4">
//         {/* Banner Section */}
//         <div className="w-screen bg-[url('/shop.svg')] bg-cover bg-no-repeat bg-center h-auto lg:h-[316px] lg:py-10 py-6 px-8 flex flex-col justify-center items-center gap-4">
//           <Image
//             src="/Meubel House_Logos-05.svg"
//             alt="logo"
//             width={77}
//             height={77}
//           />
//           <h1 className="text-[40px] lg:text-[48px] text-center text-[#000000] font-medium">
//             Checkout
//           </h1>
//           <div className="flex items-center text-[16px] font-medium space-x-2">
//             <Link href="/home" className="hover:text-yellow-600 transition">
//               Home
//             </Link>
//             <IoIosArrowForward className="text-[20px]" />
//             <span className="text-gray-600">Checkout</span>
//           </div>
//         </div>

//         {/* Order Summary Section */}
//         <div className="mt-10 ">
//           <h3 className="font-semibold text-2xl mb-8">Your Order</h3>
//           <table className="w-full border border-gray-200 rounded-lg shadow-sm">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="py-4 px-6 text-left text-xl font-semibold">Product</th>
//                 <th className="py-4 px-6 text-right text-xl font-semibold">Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.length > 0 ? (
//                 cart.map((item, index) => (
//                   <tr key={index} className="border-b border-gray-200">
//                     <td className="py-4 px-6 text-gray-600">
//                       {item.name} x {item.quantity}
//                     </td>
//                     <td className="py-4 px-6 text-right text-gray-800">
//                       Rs: {(item.discountedPrice * item.quantity).toFixed(2)}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={2} className="py-8 text-center text-gray-500">
//                     Your cart is empty.
//                   </td>
//                 </tr>
//               )}
//               <tr className="border-t border-gray-200">
//                 <td className="py-4 px-6 font-semibold text-lg">Subtotal</td>
//                 <td className="py-4 px-6 text-right text-lg text-gray-800">
//                   Rs: {subtotal.toFixed(2)}
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-4 px-6 font-semibold text-lg">Total</td>
//                 <td className="py-4 px-6 text-right text-lg text-yellow-700">
//                   Rs: {subtotal.toFixed(2)}
//                 </td>
//               </tr>
//             </tbody>
//           </table>

//           {/* Payment Section */}
//           <div className="mt-10">
//             <h4 className="font-semibold text-xl mb-6">Payment Method</h4>
//             <div className="space-y-6">
//               <label className="flex items-center space-x-4">
//                 <input
//                   type="radio"
//                   name="payment"
//                   value="bank"
//                   onChange={(e) => setSelectedPaymentMethod(e.target.value)}
//                   className="w-5 h-5 text-yellow-500 focus:ring-yellow-600"
//                 />
//                 <span className="text-gray-700">Direct Bank Transfer</span>
//               </label>
//               <p className="text-sm text-gray-500 ml-9">
//                 Make your payment directly into our bank account. Please use your
//                 Order ID as the payment reference.
//               </p>
//               <label className="flex items-center space-x-4">
//                 <input
//                   type="radio"
//                   name="payment"
//                   value="cod"
//                   onChange={(e) => setSelectedPaymentMethod(e.target.value)}
//                   className="w-5 h-5 text-yellow-500 focus:ring-yellow-600"
//                 />
//                 <span className="text-gray-700">Cash On Delivery</span>
//               </label>
//             </div>

//             {error && (
//               <p className="text-red-500 text-sm mt-4">{error}</p>
//             )}
//           </div>

//           {/* Place Order Button */}
//           <div className="mt-8 flex ">
//             <button
//               onClick={handlePlaceOrder}
//               className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-10 rounded-xl text-lg font-semibold transition"
//             >
//               Place Order
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Checkout;





"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IoIosArrowForward } from "react-icons/io";

function Checkout() {
  interface CartItem {
    name: string;
    discountedPrice: number;
    quantity: number;
  }

  const [cart, setCart] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartData);

    const total = cartData.reduce(
      (acc: number, item: { discountedPrice: number; quantity: number }) =>
        acc + item.discountedPrice * item.quantity,
      0
    );
    setSubtotal(total);
  }, []);

  const handlePlaceOrder = () => {
    if (!selectedPaymentMethod) {
      setError("Please select a payment method.");
      return;
    }

    setError(null);
    alert(`Order placed successfully! Total: Rs. ${subtotal.toFixed(2)}`);
    localStorage.removeItem("cart");
    setCart([]);
    setSubtotal(0);
  };

  return (
    <div>
      <Header bgColor="#FFFFFF" />
      <div className="max-w-screen-2xl container pb-12 px-4">
        {/* Banner Section */}
        <div className="w-screen bg-[url('/shop.svg')] bg-cover bg-no-repeat bg-center h-auto lg:h-[316px] lg:py-10 py-6 px-8 flex flex-col justify-center items-center gap-4">
          <Image
            src="/Meubel House_Logos-05.svg"
            alt="logo"
            width={77}
            height={77}
          />
          <h1 className="text-[40px] lg:text-[48px] text-center text-[#000000] font-medium">
            Checkout
          </h1>
          <div className="flex items-center text-[16px] font-medium space-x-2">
            <Link href="/home" className="hover:text-yellow-600 transition">
              Home
            </Link>
            <IoIosArrowForward className="text-[20px]" />
            <span className="text-gray-600">Checkout</span>
          </div>
        </div>

        {/* Billing Section */}
 <div className="flex flex-col lg:flex-row mx-10 gap-6 mt-8">
    <div className="w-full lg:w-1/2 md:mx-20">
        <h3 className="font-semibold text-2xl mt-10 mb-8">Billing Details</h3>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div>
                 <label htmlFor="firstName" className="block my-4">First Name</label>
                 <input type="text" id="firstName" className="w-full border border-gray-500 rounded p-3" />
             </div>
            <div>
                 <label htmlFor="lastName" className="block my-4">Last Name</label>
                 <input type="text" id="lastName" className="w-full border border-gray-500 rounded p-3" />
             </div>
         </div>

         <div className="mt-4">
             <label htmlFor="companyName" className="block my-4 mt-6">Company Name (Optional)</label>
            <input type="text" id="companyName" className="w-full border-gray-500 rounded border p-3" />
         </div>

         <div className="mt-4">
             <label htmlFor="country" className="block my-4 mt-6">Country / Region</label>
            <input type="text" id="country" className="w-full border-gray-500 rounded border p-3" />
        </div>

         <div className="mt-4">
           <label htmlFor="address" className="block my-4 mt-6">Street Address</label>
            <input type="text" id="address" className="w-full border-gray-500 rounded border p-3" />
        </div>

         <div className="gap-4 mt-4">
            <div>
                 <label htmlFor="town" className="block my-4 mt-6">Town / City</label>
                 <input type="text" id="town" className="w-full border-gray-500 rounded border p-3" />
             </div>
             <div>
                 <label htmlFor="province" className="block my-4 mt-6">Province</label>
                <input type="text" id="province" className="w-full border-gray-500 rounded border p-3" />
             </div>
         </div>

         <div className="mt-4">
             <label htmlFor="zip" className="block my-4 mt-6">ZIP Code</label>
             <input type="text" id="zip" className="w-full border-gray-500 rounded border p-3" />
         </div>

         <div className="mt-4">
             <label htmlFor="phone" className="block my-4 mt-6">Phone</label>
             <input type="text" id="phone" className="w-full border-gray-500 rounded border p-3" />
         </div>

        <div className="mt-4">
            <label htmlFor="email" className="block my-4 mt-6">Email Address</label>
             <input type="text" id="email" className="w-full border-gray-500 rounded border p-3" />
        </div>

         <div className="mt-4">
             <input type="text" id="additionalInfo" placeholder="Additional Information" className="w-full border-gray-500 my-4 mt-6 rounded border p-3" />
         </div>
     </div>


          {/* Order Summary Section */}
          <div className="w-full lg:w-1/2 mt-10">
            <h3 className="font-semibold text-2xl mb-8">Your Order</h3>
            <table className="w-full border border-gray-200 rounded-lg shadow-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-4 px-6 text-left text-xl font-semibold">Product</th>
                  <th className="py-4 px-6 text-right text-xl font-semibold">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-4 px-6 text-gray-600">
                        {item.name} x {item.quantity}
                      </td>
                      <td className="py-4 px-6 text-right text-gray-800">
                        Rs: {(item.discountedPrice * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2} className="py-8 text-center text-gray-500">
                      Your cart is empty.
                    </td>
                  </tr>
                )}
                <tr className="border-t border-gray-200">
                  <td className="py-4 px-6 font-semibold text-lg">Subtotal</td>
                  <td className="py-4 px-6 text-right text-lg text-gray-800">
                    Rs: {subtotal.toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-lg">Total</td>
                  <td className="py-4 px-6 text-right text-lg text-yellow-700">
                    Rs: {subtotal.toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Payment Section */}
            <div className="mt-10">
              <h4 className="font-semibold text-xl mb-6">Payment Method</h4>
              <div className="space-y-6">
                <label className="flex items-center space-x-4">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-yellow-500 focus:ring-yellow-600"
                  />
                  <span className="text-gray-700">Direct Bank Transfer</span>
                </label>
                <p className="text-sm text-gray-500 ml-9">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                </p>
                <label className="flex items-center space-x-4">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-yellow-500 focus:ring-yellow-600"
                  />
                  <span className="text-gray-700">Cash On Delivery</span>
                </label>
              </div>

              {error && (
                <p className="text-red-500 text-sm mt-4">{error}</p>
              )}
            </div>

            {/* Place Order Button */}
            <div className="mt-8">
              <button
                onClick={handlePlaceOrder}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-10 rounded-xl text-lg font-semibold transition"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
