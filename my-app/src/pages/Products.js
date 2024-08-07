// src/pages/Products.js
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import PageSizeFilter from '../components/filters/PageSizeFilter';
import SearchFilter from '../components/filters/SearchFilter';
import ProductFilters from '../components/filters/ProductFilters';
import PaginationControls from '../components/PaginationControls';


const Products = () => {
  const { products, setProducts, pageSize, currentPage, setCurrentPage } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`https://dummyjson.com/products?limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`);
      setProducts(response.data.products);
      setFilteredProducts(response.data.products);
    };

    fetchProducts();
  }, [pageSize, currentPage, setProducts]);

  useEffect(() => {
    const filtered = products.filter(product => 
      product.id.toString().includes(searchValue) || 
      product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchValue.toLowerCase()) ||
      product.category.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchValue, products]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h1>Products</h1>
      <PageSizeFilter />
      <SearchFilter onSearch={setSearchValue} />
      <ProductFilters />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <PaginationControls 
        totalPages={Math.ceil(100 / pageSize)} 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
};

export default Products;