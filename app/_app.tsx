import React, { useState } from 'react';
import Pagination from '../components/Pagination'; // Adjust the path as necessary

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Set your total pages here
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-center text-xl font-bold mb-4">Pagination Example</h1>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <p className="text-center mt-4">
          You are on page <strong>{currentPage}</strong> of {totalPages}.
        </p>
      </div>
    );
  };
  
  export default App;