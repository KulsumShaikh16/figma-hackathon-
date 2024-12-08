import React from 'react'
import Image from 'next/image'

const Newarrivals = () => {
  return (
    <div>
      <section className="bg-[#FFF9E5] body-font mx-auto">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    {/* <image */}
    <div className="lg:max-w-lg  md:w-1/2 w-5/6 mb-10 md:mb-0 lg:w-[983px]">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src="/Asgaard sofa 1.svg"
        width={983}
        height={799}
      />
    </div>

    {/* content */}
    <div className=" md:w-1/2  md:pl-16 flex flex-col md:items-start md:text-left  mx-auto text-center">
    
  <h1 className="title-font sm:text-4xl text-[24px] mb-4 font-medium text-gray-900 text-center">
    New Arrivals
  </h1>

      <p className="mb-8 leading-relaxed text-[48px] font-bold text-center">
      Asgaard sofa
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-[#000000] lg:w-[255px] justify-center items-center  border-[1px] border-black py-2 px-6  rounded text-xl">
        Order Now
        </button>
        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Newarrivals
