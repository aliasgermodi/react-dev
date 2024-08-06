// src/pages/Products.js
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import PageSizeFilter from '../components/filters/PageSizeFilter';
import SearchFilter from '../components/filters/SearchFilter';
import ProductFilters from '../components/filters/ProductFilters';

const Products = () => {
  const { products, setProducts, pageSize } = useContext(AppContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`https://dummyjson.com/products?limit=${pageSize}`);
      setProducts(response.data.products);
    };

    fetchProducts();
  }, [pageSize, setProducts]);

  const handleSearch = (value) => {
    const filteredProducts = products.filter(product => product.id.toString().includes(value));
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1>Products</h1>
      <PageSizeFilter />
      <SearchFilter onSearch={handleSearch} />
      <ProductFilters />
      <table>
        <thead>
          <tr>
            {/* Add your table headers here */}
            <th>ID</th>
            <th>Title</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;