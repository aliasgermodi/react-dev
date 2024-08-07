// src/components/PaginationControls.js
import React from 'react';

const PaginationControls = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button key={page} onClick={() => onPageChange(page)} disabled={page === currentPage}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default PaginationControls;