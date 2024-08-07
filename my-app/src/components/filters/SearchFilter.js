// src/components/filters/SearchFilter.js
import React, { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
  const [showInput, setShowInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div>
      <button onClick={() => setShowInput(!showInput)}>🔍</button>
      {showInput && (
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
        />
      )}
    </div>
  );
};

export default SearchFilter;