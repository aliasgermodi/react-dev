// src/components/filters/SearchFilter.js
import React, { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
  const [showInput, setShowInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div>
      <button onClick={() => setShowInput(!showInput)}>🔍</button>
      {showInput && (
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            onSearch(e.target.value);
          }}
        />
      )}
    </div>
  );
};

export default SearchFilter;