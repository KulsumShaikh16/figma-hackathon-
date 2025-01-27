// import React from 'react'

// function Page() {
//   return (
//     <div className='flex justify-center items-center mt-14'>
        
//         <div className="flex gap-4 mx-auto align-middle justify-center items-center">
//                         {/* Box 1 */}
//                         <div className="bg-[#fbebb5] px-4 py-2 rounded-md">1</div>

//                         {/* Box 2 */}
//                         <div className="bg-[#fff9e5] px-4 py-2 rounded-md">2</div>

//                         {/* Box 3 */}
//                         <div className="bg-[#fff9e5] px-4 py-2 rounded-md">3</div>

//                         {/* Next Button */}
//                         <div className="bg-[#fff9e5] px-4 py-2 rounded-md cursor-pointer hover:bg-[#fbebb5]">
//                             Next
//                         </div>
//                     </div>
//     </div>
//   )
// }

// export default Page


"use client";

import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  return (
    <div className="flex justify-center items-center mt-14">
      <div className="flex gap-4 mx-auto align-middle justify-center items-center">
        {/* Previous Button */}
        <div
          className={`${
            currentPage === 1 ? "bg-gray-300" : "bg-[#fff9e5]"
          } px-4 py-2 rounded-md cursor-pointer`}
          onClick={handlePrev}
        >
          Prev
        </div>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <div
            key={index}
            className={`${
              currentPage === index + 1 ? "bg-[#fbebb5]" : "bg-[#fff9e5]"
            } px-4 py-2 rounded-md cursor-pointer`}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </div>
        ))}

        {/* Next Button */}
        <div
          className={`${
            currentPage === totalPages ? "bg-gray-300" : "bg-[#fff9e5]"
          } px-4 py-2 rounded-md cursor-pointer`}
          onClick={handleNext}
        >
          Next
        </div>
      </div>
    </div>
  );
}

export default Pagination;
