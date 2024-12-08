// import React from 'react'
// import Image from 'next/image'

// const Hero = () => {
//   return (
//     <div className=''>
//       <section className="bg-[#FBEBB5] body-font  top-[100px]">
//   <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col  items-center">
//     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col lg:w-[440px] lg:flex-row  md:text-left mb-16 md:mb-0 items-center text-center">
//       <h1 className=" sm:text-4xl text-[64px]  p-8 tracking-[4px] font-medium text-[#000000] font-poppins">
//       Rocket single 
//         <br className="hidden lg:inline-block  top-[428px] left-[202px]" />
//          seater
//       </h1>
      
    
       
     
//         <button className=" text-black border-b-black border-[2px] lg:flex-col lg:flex  text-[24px] font-[500]">
//           Shop Now
//         </button>
//         </div>
//     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//       <Image
//         className=" left-[1440px] top-[80px]"
//         alt="seater"
//         src="/Rocket single seater 1.svg"
//         width={853}
//         height={1000}
//       />
//     </div>
//   </div>
// </section>

//     </div>
//   )
// }

// export default Hero


import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <section className="bg-[#FBEBB5] body-font pt-24 lg:pt-0 flex">
        <div className="container mx-auto lg:flex-row lg:justify-center flex flex-col items-center px-5 lg:first-letter:py-24 lg:py-0 ">
          <h1 className="sm:text-4xl lg:text-[64px] p-8 tracking-[4px] font-medium text-[#000000] font-poppins text-center lg:text-start">
            Rocket single 
            <br className="hidden lg:inline-block" />
            seater <br/>
            <button 
            className="text-black border-b-black border-[2px] lg:text-[24px] sm:text-[20px] font-[500] py-2 lg:py-0 px-4 mt-4 lg:-mt-6 lg:text-start lg:px-0"
            
          >
            Shop Now
          </button>
          </h1>
          
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-8 ">
            <Image
              className="object-cover object-center rounded mx-auto h-auto"
              alt="Rocket single seater"
              src="/Rocket single seater 1.svg"
              width={825}
              height={1000}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
