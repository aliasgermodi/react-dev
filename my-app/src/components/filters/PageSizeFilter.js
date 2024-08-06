// src/components/filters/PageSizeFilter.js
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const PageSizeFilter = () => {
  const { pageSize, setPageSize } = useContext(AppContext);

  return (
    <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
      {[5, 10, 20, 50].map(size => (
        <option key={size} value={size}>{size}</option>
      ))}
    </select>
  );
};

export default PageSizeFilter;