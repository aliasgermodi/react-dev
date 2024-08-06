// src/components/filters/ProductFilters.js
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';

const ProductFilters = () => {
  const { setProducts, setPageSize } = useContext(AppContext);
  const [filterValue, setFilterValue] = useState('');

  const handleFilter = async () => {
    const response = await axios.get(`https://dummyjson.com/products?limit=${setPageSize}`);
    setProducts(response.data.products);
  };

  return (
    <div>
      <input type="text" value={filterValue} onChange={(e) => setFilterValue(e.target.value)} />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default ProductFilters;