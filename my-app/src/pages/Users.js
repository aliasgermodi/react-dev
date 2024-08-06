import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import PageSizeFilter from '../components/filters/PageSizeFilter';
import SearchFilter from '../components/filters/SearchFilter';
import UserFilters from '../components/filters/UserFilters';

const Users = () => {
  const { users, setUsers, pageSize } = useContext(AppContext);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`https://dummyjson.com/users?limit=${5}`);
      setUsers(response.data.users);
    };

    fetchUsers();
  }, [pageSize, setUsers]);

  const handleSearch = (value) => {
    const filteredUsers = users.filter(user => user.id.toString().includes(value));
    setUsers(filteredUsers);
  };

  return (
    <div>
      <h1>Users</h1>
      <PageSizeFilter />
      <SearchFilter onSearch={handleSearch} />
      <UserFilters />
      <table>
        <thead>
          <tr>
            {/* Add your table headers here */}
            <th>ID</th>
            <th>Name</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName} {user.lastName}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;