import React from 'react';
import './App.css';
import { Routes, Route } from "react-router"
import Signup from './component/Signup';
import Login from './component/login';
import Home from './component/Home';
import Mytodolist from './component/Mytodolist';
import ToDo from './component/ToDo';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/list' element={<ToDo />} />
      <Route path='/table' element={<Mytodolist />} />
    </Routes>
  )
}

export default PublicRoutes