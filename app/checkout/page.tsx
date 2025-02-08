// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { IoIosArrowForward } from "react-icons/io";

// export default function Checkout() {
//   interface CartItem {
//     name: string;
//     discountedPrice: number;
//     quantity: number;
//     image?: string;
//   }

//   const [cart, setCart] = useState<CartItem[]>([]);
//   const [subtotal, setSubtotal] = useState(0);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("");

//   // Load cart from localStorage
//   useEffect(() => {
//     const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
//     setCart(cartData);
//     const total = cartData.reduce(
//       (acc: number, item: CartItem) => acc + item.discountedPrice * item.quantity,
//       0
//     );
//     setSubtotal(total);
//   }, []);

//   // Handle Stripe Payment
//   const handleStripePayment = async () => {
//     if (!cart || cart.length === 0) {
//       setError("Your cart is empty!");
//       return;
//     }
//     setError(null);
//     setLoading(true);

//     try {
//       const response = await fetch("/api/checkout", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ cart }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         window.location.href = data.url;
//       } else {
//         setError(data.error || "Failed to initiate payment. Please try again.");
//       }
//     } catch (error) {
//       console.error("Payment Error:", error);
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <Header bgColor="#FFFFFF" />
//       <div className="max-w-screen-2xl container pb-12 px-4">
//         {/* Banner */}
//         <div className="w-screen bg-[url('/shop.svg')] bg-cover bg-no-repeat bg-center h-auto lg:h-[316px] lg:py-10 py-6 px-8 flex flex-col justify-center items-center gap-4">
//           <Image src="/Meubel House_Logos-05.svg" alt="logo" width={77} height={77} />
//           <h1 className="text-[40px] lg:text-[48px] text-center text-[#000000] font-medium">Checkout</h1>
//           <div className="flex items-center text-[16px] font-medium space-x-2">
//             <Link href="/home" className="hover:text-yellow-600 transition">Home</Link>
//             <IoIosArrowForward className="text-[20px]" />
//             <span className="text-gray-600">Checkout</span>
//           </div>
//         </div>

//         {/* Billing Details */}
//         <div className="flex flex-col lg:flex-row mx-10 gap-6 mt-8">
//           <div className="w-full lg:w-1/2">
//             <h3 className="font-semibold text-2xl mt-10 mb-8">Billing Details</h3>
//             <input type="text" placeholder="First Name" className="w-full border p-3 my-2" />
//             <input type="text" placeholder="Last Name" className="w-full border p-3 my-2" />
//             <input type="text" placeholder="Street Address" className="w-full border p-3 my-2" />
//             <input type="text" placeholder="City" className="w-full border p-3 my-2" />
//             <input type="text" placeholder="ZIP Code" className="w-full border p-3 my-2" />
//             <input type="text" placeholder="Phone" className="w-full border p-3 my-2" />
//             <input type="email" placeholder="Email" className="w-full border p-3 my-2" />
//           </div>

//           {/* Order Summary */}
//           <div className="w-full lg:w-1/2">
//             <h3 className="font-semibold text-2xl mb-8">Your Order</h3>
//             <table className="w-full border">
//               <tbody>
//                 {cart.length > 0 ? cart.map((item, index) => (
//                   <tr key={index}>
//                     <td className="py-4 px-6">{item.name} x {item.quantity}</td>
//                     <td className="py-4 px-6 text-right">Rs: {(item.discountedPrice * item.quantity).toFixed(2)}</td>
//                   </tr>
//                 )) : (
//                   <tr>
//                     <td colSpan={2} className="py-8 text-center text-gray-500">Your cart is empty.</td>
//                   </tr>
//                 )}
//                 <tr>
//                   <td className="py-4 px-6 font-semibold text-lg">Total</td>
//                   <td className="py-4 px-6 text-right text-lg text-yellow-700">Rs: {subtotal.toFixed(2)}</td>
//                 </tr>
//               </tbody>
//             </table>

//             {/* Stripe Button */}
//             <div className="mt-8">
//               <button onClick={handleStripePayment} disabled={loading}
//                 className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-10 rounded-xl text-lg font-semibold transition">
//                 {loading ? "Processing..." : "Pay with Stripe"}
//               </button>

//               <label className="flex items-center space-x-3">
//               <input
//                 type="radio"
//                 name="payment"
//                 value="cod"
//                 onChange={(e) => setSelectedPaymentMethod(e.target.value)}
//                 className="w-5 h-5"
//               />
//               <span>Cash On Delivery</span>
//             </label>
//               {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
//               {selectedPaymentMethod && <p className="text-green-500 text-sm mt-4">Selected Payment Method: {selectedPaymentMethod}</p>}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }



"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Checkout() {
  interface CartItem {
    name: string;
    discountedPrice: number;
    quantity: number;
    image?: string;
  }

  const [cart, setCart] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Load cart from localStorage
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartData);
    const total = cartData.reduce(
      (acc: number, item: CartItem) => acc + item.discountedPrice * item.quantity,
      0
    );
    setSubtotal(total);
  }, []);

  // Handle Stripe Payment
  const handleStripePayment = async () => {
    if (!cart || cart.length === 0) {
      setError("Your cart is empty!");
      return;
    }
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart }),
      });

      const data = await response.json();

      if (response.ok) {
        window.location.href = data.url;
      } else {
        setError(data.error || "Failed to initiate payment. Please try again.");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle COD Order
  const handleCODPayment = () => {
    if (!selectedPaymentMethod) {
      setError("Please select a payment method.");
      return;
    }
    setError(null);
    alert(`Order placed successfully with Cash on Delivery! Total: Rs. ${subtotal.toFixed(2)}`);
    localStorage.removeItem("cart");
    setCart([]);
    setSubtotal(0);
    router.push("/order-success");
  };

  return (
    <div>
      <Header bgColor="#FFFFFF" />
      <div className="max-w-screen-2xl container pb-12 px-4">
        {/* Banner */}
        <div className="w-screen bg-[url('/shop.svg')] bg-cover bg-no-repeat bg-center h-auto lg:h-[316px] lg:py-10 py-6 px-8 flex flex-col justify-center items-center gap-4">
          <Image src="/Meubel House_Logos-05.svg" alt="logo" width={77} height={77} />
          <h1 className="text-[40px] lg:text-[48px] text-center text-[#000000] font-medium">Checkout</h1>
          <div className="flex items-center text-[16px] font-medium space-x-2">
            <Link href="/home" className="hover:text-yellow-600 transition">Home</Link>
            <IoIosArrowForward className="text-[20px]" />
            <span className="text-gray-600">Checkout</span>
          </div>
        </div>

        {/* Checkout Section */}
        <div className="flex flex-col lg:flex-row mx-10 gap-6 mt-8">
         {/* Billing Section */}
 <div className="flex flex-col lg:flex-row mx-10 gap-6 mt-8 mb-4">
    <div className="w-full lg:w-1/2 md:mx-20">
        <h3 className="font-semibold text-2xl mt-10 mb-8">Billing Details </h3>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div>
                 <label htmlFor="firstName" className="block my-4" >First Name </label>
                 <input type="text" id="firstName" className="w-full border rounded-lg shadow-md p-3" />
             </div>
            <div>
                 <label htmlFor="lastName" className="block my-4">Last Name</label>
                 <input type="text" id="lastName" className="w-full border rounded-lg shadow-md p-3" />
             </div>
         </div>

         <div className="mt-4">
             <label htmlFor="companyName" className="block my-4 mt-6">Company Name (Optional)</label>
            <input type="text" id="companyName" className="w-full border rounded-lg shadow-md p-3" />
         </div>

         <div className="mt-4">
             <label htmlFor="country" className="block my-4 mt-6">Country / Region</label>
            <input type="text" id="country" className="w-full border rounded-lg shadow-md p-3" />
        </div>

         <div className="mt-4">
           <label htmlFor="address" className="block my-4 mt-6">Street Address</label>
            <input type="text" id="address" className="w-full border rounded-lg shadow-md p-3" />
        </div>

         <div className="gap-4 mt-4">
            <div>
                 <label htmlFor="town" className="block my-4 mt-6">Town / City</label>
                 <input type="text" id="town" className="w-full border rounded-lg shadow-md p-3" />
             </div>
             <div>
                 <label htmlFor="province" className="block my-4 mt-6">Province</label>
                <input type="text" id="province" className="w-full border rounded-lg shadow-md p-3" />
             </div>
         </div>

         <div className="mt-4">
             <label htmlFor="zip" className="block my-4 mt-6">ZIP Code</label>
             <input type="text" id="zip" className="w-full border rounded-lg shadow-md p-3" />
         </div>

         <div className="mt-4">
             <label htmlFor="phone" className="block my-4 mt-6">Phone</label>
             <input type="text" id="phone" className="w-full border rounded-lg shadow-md p-3" />
         </div>

        <div className="mt-4">
            <label htmlFor="email" className="block my-4 mt-6">Email Address</label>
             <input type="text" id="email" className="w-full border rounded-lg shadow-md p-3" />
        </div>

         <div className="mt-4">
             <input type="text" id="additionalInfo" placeholder="Additional Information" className="w-full border rounded-lg shadow-md p-3" />
         </div>
     </div>



          {/* Order Summary */}
          <div className="w-full lg:w-1/2">
            <h3 className="font-semibold text-2xl mb-8 mt-10">Your Order</h3>
            <table className="w-full border">
              <tbody>
                {cart.length > 0 ? cart.map((item, index) => (
                  <tr key={index}>
                    <td className="py-4 px-6">{item.name} x {item.quantity}</td>
                    <td className="py-4 px-6 text-right">Rs: {(item.discountedPrice * item.quantity).toFixed(2)}</td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={2} className="py-8 text-center text-gray-500">Your cart is empty.</td>
                  </tr>
                )}
                <tr>
                  <td className="py-4 px-6 font-semibold text-lg">Total</td>
                  <td className="py-4 px-6 text-right text-lg text-yellow-700">Rs: {subtotal.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>

            {/* Payment Method Section */}
            <div className="mt-8 border p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-lg mb-4">Select Payment Method</h4>

              <label className="flex items-center space-x-3 mb-3">
                <input
                  type="radio"
                  name="payment"
                  value="stripe"
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  className="w-5 h-5"
                />
                <span>Credit/Debit Card (Stripe)</span>
              </label>

              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  className="w-5 h-5"
                />
                <span>Cash On Delivery</span>
              </label>

              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>

            {/* Payment Buttons */}
            <div className="mt-8">
              {selectedPaymentMethod === "stripe" && (
                <button
                  onClick={handleStripePayment}
                  disabled={loading}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl text-lg font-semibold transition"
                >
                  {loading ? "Processing..." : "Pay with Stripe"}
                </button>
              )}

              {selectedPaymentMethod === "cod" && (
                <button
                  onClick={handleCODPayment}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl text-lg font-semibold transition"
                >
                  Place Order (COD)
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
}
