"use client";

import React, { useState } from "react";
import Pagination from "../components/Pagination"; // Adjust the path as necessary

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    console.log("Navigating to page:", page);
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Pagination Example</h1>
      <Pagination
        totalPages={10}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
