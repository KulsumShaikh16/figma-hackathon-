// import React from 'react'
// import Image from 'next/image'

// const Toppick = () => {
//   return (
//     <div>
    
//   <div className="container px-5 py-24 mx-auto bg-[#FFFFFF]">
//     <div className="flex flex-col text-center w-full mb-20">
//       <h2 className="text-[36px] text-[#000000] title-font font-medium title-font mb-1">
//       Top Picks For You
//       </h2>
//       <p className="sm:text-[14px] text-[16px] font-medium  mb-4 text-[#9F9F9F]">
//       Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
//       </p>
     
//     </div>
//      {/* images card */}
     
//   <div className="container px-5  mx-auto ">
//     <div className="flex  -m-4">
//       <div className="p-4 md:w-1/3">
//         <div className="h-full overflow-hidden">
//           <Image
//             className="lg:h-48 md:h-36 w-full object-cover object-center"
//             src="/top1.svg"
//             alt="blog"
//             width={750}
//             height={384.86}
//           />
//           <div className="p-6">
            
//             <h1 className="title-font text-[16px]  text-[#000000] mb-3">
//             Trenton modular sofa_3
//             </h1>
//             <p className="leading-relaxed mb-3 text-[24px] font-medium ">
//             Rs. 25,000.00
//             </p>
          
//           </div>
//         </div>
//       </div>
//       <div className="p-4 md:w-1/3 flex-wrap">
//         <div className="h-full  overflow-hidden">
//         <Image
//             className="lg:h-48 md:h-36 w-full object-cover object-center"
//             src="/top2.svg"
//             alt="blog"
//             width={255}
//             height={184}
//           />
//           <div className="p-6">
//           <h1 className="title-font text-[16px]  text-[#000000] mb-3">
//           Granite dining table with dining chair
//             </h1>
//             <p className="leading-relaxed mb-3 text-[24px] font-medium ">
//             Rs. 25,000.00
//             </p>
           
//           </div>
//         </div>
//       </div>
//       <div className="p-4 md:w-1/3">
//         <div className="h-full overflow-hidden">
//         <Image
//             className="lg:h-48 md:h-36 w-full object-cover object-center"
//             src="/top3.svg"
//             alt="blog"
//             width={250}
//             height={376}
//           />
//           <div className="p-6">
//           <h1 className="title-font text-[16px]  text-[#000000] mb-3">
//           Outdoor bar table and stool
//             </h1>
//             <p className="leading-relaxed mb-3 text-[24px] font-medium ">
//             Rs. 25,000.00
//             </p>
            
//           </div>

          
//         </div>
//       </div>



//       <div className="p-4 md:w-1/3">
//         <div className="h-full  overflow-hidden">
//         <Image
//             className="lg:h-48 md:h-36 w-full object-cover object-center"
//             src="/top4.svg"
//             alt="blog"
//             width={250}
//             height={376}
//           />
//           <div className="p-6">
//           <h1 className="title-font text-[16px]  text-[#000000] mb-3">
//           Plain console with teak mirror
//             </h1>
//             <p className="leading-relaxed mb-3 text-[24px] font-medium ">
//             Rs. 25,000.00
//             </p>
            
//           </div>

          
//         </div>
//       </div>

//     </div>
  
//     <div className="flex justify-center items-center ">
//   <button className="flex justify-center items-center text-[#000000] border-b-black border-[2px] text-[20px] font-medium">
//     View More
//   </button>
// </div>

//   </div>

//   </div>

//     </div>
//   )
// }

// export default Toppick



import React from 'react';
import Image from 'next/image';

const Toppick = () => {
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
              src: '/top1.svg',
              title: 'Trenton modular sofa_3',
              price: 'Rs. 25,000.00',
            },
            {
              src: '/top2.svg',
              title: 'Granite dining table with dining chair',
              price: 'Rs. 25,000.00',
            },
            {
              src: '/top3.svg',
              title: 'Outdoor bar table and stool',
              price: 'Rs. 25,000.00',
            },
            {
              src: '/top4.svg',
              title: 'Plain console with teak mirror',
              price: 'Rs. 25,000.00',
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
          <button className="flex justify-center items-center text-[#000000] border-b-black border-[2px] text-lg font-medium">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toppick;