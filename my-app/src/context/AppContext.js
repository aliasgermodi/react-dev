// src/contexts/AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <AppContext.Provider value={{ users, setUsers, products, setProducts, pageSize, setPageSize, currentPage, setCurrentPage }}>
      {children}
    </AppContext.Provider>
  );
};