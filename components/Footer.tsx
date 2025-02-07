import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-[#FFFFFF] py-10 px-6 w-full overflow-hidden">
      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-screen-xl mx-auto px-4 lg:px-8">
        {/* Address Section */}
        <div className="text-center lg:text-start">
          <p className="text-gray-600">400 University Drive Suite 200 Coral</p>
          <p className="text-gray-600">Gables, FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div className="text-center">
          <h3 className="text-lg text-gray-500 font-semibold mb-4">Links</h3>
          <ul className="space-y-4 text-lg">
            <li><Link href="/"><p className="font-medium">Home</p></Link></li>
            <li><Link href="/shop"><p className="font-medium">Shop</p></Link></li>
            <li><Link href="/about"><p className="font-medium">About</p></Link></li>
            <li><Link href="/contact"><p className="font-medium">Contact</p></Link></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="text-center">
          <h3 className="text-lg text-gray-500 font-semibold mb-4">Help</h3>
          <ul className="space-y-4 text-lg">
            <li><Link href="/payment-options"><p className="font-medium">Payment Options</p></Link></li>
            <li><Link href="/returns"><p className="font-medium">Returns</p></Link></li>
            <li><Link href="/privacy-policies"><p className="font-medium">Privacy Policies</p></Link></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="text-center">
          <h3 className="text-lg text-gray-500 font-semibold mb-4">Newsletter</h3>
          <div className="flex flex-col md:flex-row items-center gap-2 w-full">
            <input
              type="email"
              placeholder="Email Address"
              className="font-medium flex-1 px-4 py-2 bg-gray-100 border-b-2 border-black focus:ring-2 focus:ring-black focus:outline-none w-full"
            />
            <button className="px-6 py-2 font-medium text-black border-b-2 border-black hover:no-underline w-full md:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="my-6 border-gray-300" />
      <p className="text-center text-gray-600 lg:text-left lg:pl-4">
        2022 Meubel House. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
