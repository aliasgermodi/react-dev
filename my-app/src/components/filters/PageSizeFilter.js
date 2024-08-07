// src/components/filters/PageSizeFilter.js
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const PageSizeFilter = () => {
  const { pageSize, setPageSize, setCurrentPage } = useContext(AppContext);

  const handleChange = (e) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when changing the page size
  };

  return (
    <select value={pageSize} onChange={handleChange}>
      {[5, 10, 20, 50].map(size => (
        <option key={size} value={size}>{size}</option>
      ))}
    </select>
  );
};

export default PageSizeFilter;