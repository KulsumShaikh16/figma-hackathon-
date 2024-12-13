import React from 'react'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { BsViewList } from "react-icons/bs";


const Filter = () => {
  return (
    <div className='py-6 px-14 flex gap-4 justify-between bg-[#FAF4F4] mt-10'>
        <div className='flex justify-center items-center'> <HiAdjustmentsHorizontal className='text-[28px] pt-3' />
        <p className='text-[20px]  ml-3'> Filter</p>
       
        <HiMiniSquares2X2 className='text-[16px] ml-5 mt-2' />
        <BsViewList className='text-[16px]  mx-2 mt-2' />

        
        <p className='pl-6  mt-2 text-[16px] ml-2'>Showing 1–16 of 32 results</p>
        </div>


        <div className='flex gap-4 justify-center items-center'>
            <h3>Show</h3>
            <p className='text-[#9F9F9F] text-[20px] w-[55px] h-[55px] bg-[#FFFFFF] justify-center items-center flex'>16</p>
            <p>Short by</p>
            <h2 className='text-[#9F9F9F] text-[20px] w-[188px] h-[55px] bg-[#FFFFFF] justify-start pl-4 items-center flex'>Default</h2>
        </div>
    </div>
  )
}

export default Filter
