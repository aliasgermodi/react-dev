// src/pages/Users.js
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import PageSizeFilter from '../components/filters/PageSizeFilter';
import SearchFilter from '../components/filters/SearchFilter';
import UserFilters from '../components/filters/UserFilters';
import PaginationControls from '../components/PaginationControls';


const Users = () => {
  const { users, setUsers, pageSize, currentPage, setCurrentPage } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`https://dummyjson.com/users?limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`);
      setUsers(response.data.users);
      setFilteredUsers(response.data.users);
    };

    fetchUsers();
  }, [pageSize, currentPage, setUsers]);

  useEffect(() => {
    const filtered = users.filter(user => 
      user.id.toString().includes(searchValue) || 
      user.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchValue, users]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h1>Users</h1>
      <PageSizeFilter />
      <SearchFilter onSearch={setSearchValue} />
      <UserFilters />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
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

export default Users;