import { Box } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/Signup';

import TodoList from './Components/TodoList';
import TodoItem from './Components/TodoItem';
import Navbar from './Components/Navbar';
import Adhoc from './Adhoc/Adhoc';

const Allroutes = () => {
  return (
    <Routes>
      <Route
        path="/:id"
        element={
          <Adhoc>
            <Navbar />
            <TodoList />
          </Adhoc>
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  );
};

export default Allroutes;
