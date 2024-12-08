import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
        {/* <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav> */}

        <p className='mt-4 text-[16px] text-[#9F9F9F]'>400 University Drive Suite 200 Coral Gables,<br/>
        FL 33134 USA</p>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4  justify-evenly">
        <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-[16px] mb-3 pl-6">
          Links
        </h2>
        <nav className="list-none mb-10 space-y-10">
          <li>
            <a className="text-[#000000] text-[16px] py-20 font-semibold pl-6">Home</a>
          </li>
          <li>
            <a className="text-[#000000] text-[16px]  py-10 font-semibold pl-6">Shop</a>
          </li>
          <li>
            <a className="text-[#000000] text-[16px]  py-10 font-semibold pl-6">About</a>
          </li>
          <li>
            <a className="text-[#000000] text-[16px]  py-10 font-semibold pl-6">Contact</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-[16px] mb-3">
          Help
        </h2>
        <nav className="list-none mb-10 space-y-10">
          <li>
            <a className="text-[#000000] text-[16px]  py-10 font-semibold">Payment Options</a>
          </li>
          <li>
            <a className="text-[#000000] text-[16px]  py-10 font-semibold">Returns</a>
          </li>
          <li>
            <a className="text-[#000000] text-[16px]  py-10 font-semibold">Privacy policies</a>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 sm:flex-col ">
        <h2 className="title-font font-medium text-[#9F9F9F] tracking-widest text-[16px] mb-3">
         Newsletter
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start lg:flex-row ">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2 sm:flex-col sm:space-y-6 lg:flex ">
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              placeholder='Enter Your Email Address'
              className='text-[#9F9F9F] border-b-black border-[1px] lg:flex'/>
          <button className="lg:mt-2 xl:mt-0 sm:flex-col lg:inline-flex sm:block font-medium text-[#000000] border-b-black border-[1px]  ">
            Subscribe
          </button>
          </div>
        </div> 
        
        

       
      </div>

      {/* bottom section
       */}
<div>
      <p className='mt-40  text-16px text-[#000000]  sm:mx-auto'>2022 Meubel House. All rights reverved</p>
      </div>
    </div>
  </div>
  

  
</footer>

    </div>
  )
}

export default Footer
