import React from 'react'

const Insta = () => {
  return (
    <div>
    <div className='w-screen bg-[url(/insta-bg.svg)] bg-cover bg-no-repeat bg-center h-auto lg:h-[450px]  lg:py-10 py-6 px-8 my-6 flex flex-col justify-center items-center gap-4'>

      <h1 className='text-6xl  text-center text-[#000000] font-bold '>Our Instagram</h1>
      <p className='text-[20px] text-center lg:w-[297px]'>Follow our store on Instagram</p>
      <button className='bg-[#FAF4F4] border-white border-[1px] w-[255px] h-[64px] rounded-[50px] text-[#000000]'>Follow us</button>
    </div>
    </div>
  )
}

export default Insta
