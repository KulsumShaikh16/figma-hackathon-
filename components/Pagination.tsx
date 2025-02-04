"use client";

import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

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
      <button
        className={`${
          currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#fff9e5]"
        } px-4 py-2 rounded-md`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Previous Page"
      >
        Previous
      </button>

      {/* Page Numbers */}
      {totalPages > 0 &&
        [...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`${
              currentPage === index + 1 ? "bg-[#fbebb5]" : "bg-[#fff9e5]"
            } px-4 py-2 rounded-md`}
            onClick={() => onPageChange(index + 1)}
            aria-label={`Go to page ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}

      {/* Next Button */}
      <button
        className={`${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-[#fff9e5]"
        } px-4 py-2 rounded-md`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;