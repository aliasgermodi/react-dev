import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Users from './pages/Users';
import Products from './pages/Products';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
