import React, { useContext, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';

const UserFilters = () => {
  const { setUsers, setPageSize } = useContext(AppContext);
  const [filterValue, setFilterValue] = useState('');

  const handleFilter = async () => {
    const response = await axios.get(`https://dummyjson.com/users?${setPageSize}`);
    setUsers(response.data.users);
  };

  return (
    <div>
      <input type="text" value={filterValue} onChange={(e) => setFilterValue(e.target.value)} />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default UserFilters;