

"use client";

import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

// Pagination Component
const Pagination: React.FC<PaginationProps> = ({
  totalPages = 5,
  currentPage = 1,
  onPageChange,
}) => {
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 my-4">
      {/* Previous Button */}
      <div
        className={`${
          currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#fff9e5]"
        } px-4 py-2 rounded-md cursor-pointer`}
        onClick={handlePrevious}
        role="button"
        aria-label="Previous Page"
        tabIndex={currentPage === 1 ? -1 : 0}
      >
        Previous
      </div>

      {/* Page Numbers */}
      {totalPages > 0 &&
  [...Array(totalPages)].map((_, index) => (
    <div
      key={index}
      className={`${
        currentPage === index + 1 ? "bg-[#fbebb5]" : "bg-[#fff9e5]"
      } px-4 py-2 rounded-md cursor-pointer`}
      onClick={() => onPageChange(index + 1)}
      role="button"
      aria-label={`Go to page ${index + 1}`}
      tabIndex={0}
    >
      {index + 1}
    </div>
  ))}


      {/* Next Button */}
      <div
        className={`${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-[#fff9e5]"
        } px-4 py-2 rounded-md cursor-pointer`}
        onClick={handleNext}
        role="button"
        aria-label="Next Page"
        tabIndex={currentPage === totalPages ? -1 : 0}
      >
        Next
      </div>
    </div>
  );
};

export default Pagination;

