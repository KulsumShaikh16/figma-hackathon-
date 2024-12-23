import React from "react";
import Image from "next/image";


const Gallery = () => {
  return (
    <div className="bg-[#FFFFFF] py-24">
      <div className="container mx-auto text-center mb-20 px-5">
        <h2 className="text-3xl md:text-4xl text-[#000000] font-medium mb-1">
          Top Picks For You
        </h2>
        <p className="text-sm md:text-base font-medium mb-4 text-[#9F9F9F]">
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </p>
      </div>

      {/* Images Card */}
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap -m-4">
          {[
            {
              src: '/gallery1.svg',
              title: 'Trenton modular sofa_3',
              price: 'Rs. 25,000.00',
            },
            {
              src: '/gallery2.svg',
              title: 'Granite dining table with dining chair',
              price: 'Rs. 25,000.00',
            },
            {
              src: '/gallery3.svg',
              title: 'Outdoor bar table and stool',
              price: 'Rs. 25,000.00',
            },
            {
              src: '/gallery4.svg',
              title: 'Plain console with teak mirror',
              price: 'Rs. 25,000.00',
            },
            {
              src: '/gallery5.svg',
              title: 'Grain coffee table',
              price: 'Rs. 15,000.00',
            },
            {
              src: '/gallery6.svg',
              title: 'Kent coffee table',
              price: 'Rs. 225,000.00',
            },
            {
              src: '/gallery7.svg',
              title: 'Round coffee table_color 2',
              price: 'Rs. 251,000.00',
            },
            {
              src: '/gallery8.svg',
              title: 'Reclaimed teak coffee table',
              price: 'Rs. 25,200.00',
            },
            {
              src: '/gallery9.svg',
              title: 'Plain console_',
              price: 'Rs. 258,200.00',
            },
            {
              src: '/gallery10.svg',
              title: 'Reclaimed teak Sideboard',
              price: 'Rs. 20,000.00',
            },
            {
              src: '/gallery11.svg',
              title: 'SJP_0825 ',
              price: 'Rs. 200,000.00',
            },
            {
              src: '/gallery12.svg',
              title: 'Bella chair and table',
              price: 'Rs. 100,000.00',
            },
            {
              src: '/gallery13.svg',
              title: 'Granite square side table',
              price: 'Rs. 258,800.00',
            },
            {
              src: '/gallery14.svg',
              title: 'Asgaard sofa',
              price: 'Rs. 250,000.00',
            },
            {
              src: '/gallery15.svg',
              title: 'Maya sofa three seater',
              price: 'Rs. 115,000.00',
            },{
              src: '/gallery16.svg',
              title: 'Outdoor sofa set',
              price: 'Rs. 244,000.00',
            },
           
          ].map((item, index) => (
            <div key={index} className="p-4 md:w-1/2 lg:w-1/4">
              <div className="h-full overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={item.src}
                  alt={item.title}
                  width={750}
                  height={384.86}
                />
                <div className="p-6">
                  <h1 className="title-font text-lg text-[#000000] mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed mb-3 text-xl font-medium">
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8">
          <button className="flex justify-center items-center text-[#000000] underline underline-offset-8 text-lg font-medium">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

