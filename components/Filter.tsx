


// import React from 'react'
// import { HiAdjustmentsHorizontal } from "react-icons/hi2";
// import { HiMiniSquares2X2 } from "react-icons/hi2";
// import { BsViewList } from "react-icons/bs";

// function Filter() {
//   return (
//     <div className="bg-[#F4F4F4] py-4 px-6 flex justify-between items-center flex-wrap">
//       {/* Left Section */}
//       <div className="flex items-center gap-4 flex-wrap mb-4 sm:mb-0">
//         <div className="flex items-center gap-1 cursor-pointer">
//           <HiAdjustmentsHorizontal  className="text-xl" />
//           <p className='ml-2'>Filter</p>
//         </div>
//         <div className="flex items-center gap-2">
//         <HiMiniSquares2X2 className='text-[16px] ml-5 mt-2' />
       
//         <BsViewList className="text-xl ml-2 cursor-pointer" />
//         </div>
//         <div className="w-[2px] h-10 bg-gray-400 mx-4"></div>
//         <p>Showing 1-6 of 32 results</p>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center gap-4">
//         <div className="flex items-center gap-2">
//           <p>Show</p>
//           <div className="px-2 py-1 bg-white border border-gray-300 rounded-md cursor-pointer">16</div>
//         </div>
//         <div className="flex items-center gap-2">
//           <p>Sort by</p>
//           <div className="px-2 py-1 bg-white border border-gray-300 rounded-md cursor-pointer">Default</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Filter

"use client";

import React from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { BsViewList } from "react-icons/bs";

interface FilterProps {
  onViewChange: (view: string) => void; // Accept a function as a prop
}

const Filter = ({ onViewChange }: FilterProps) => {
  const handleViewChange = (newView: string) => {
    onViewChange(newView); // Call the function passed from the parent
  };

  return (
    <div className="bg-[#F4F4F4] py-4 px-6 mb-10 flex justify-between items-center flex-wrap">
      {/* Left Section */}
      <div className="flex items-center gap-4 flex-wrap mb-4 sm:mb-0">
        <div className="flex items-center gap-1 cursor-pointer">
          <HiAdjustmentsHorizontal className="text-xl " />
          <p className="ml-2">Filter</p>
        </div>
        <div className="flex items-center gap-2 ">
          <HiMiniSquares2X2
            className="text-[16px] ml-5 mt-2 cursor-pointer "
            onClick={() => handleViewChange("grid")} // Trigger view change
          />
          <BsViewList
            className="text-xl ml-2 cursor-pointer "
            onClick={() => handleViewChange("list")} // Trigger view change
          />
        </div>
        <div className="w-[2px] h-10 bg-gray-400 mx-4"></div>
        <p>Showing 1-8 of 32 results</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <p>Show</p>
          <div className="px-2 py-1 bg-white border border-gray-300 rounded-md cursor-pointer">16</div>
        </div>
        <div className="flex items-center gap-2">
          <p>Sort by</p>
          <div className="px-2 py-1 bg-white border border-gray-300 rounded-md cursor-pointer">Default</div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
