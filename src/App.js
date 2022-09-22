import React from 'react'
import Nav from './components/layout/Nav'
import Register from './components/pages/Register'
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import User from './components/pages/User';
import Edit from './components/pages/Edit';
import Add from './components/pages/Add';
import Footer from './components/layout/Footer';
import Protected from './components/pages/Protected';
import Profile from './components/pages/Profile';
import Unprotected from './components/pages/Unprotected';

const App = () => {
  return (
    <>
      <Nav/>

      <Routes>
        <Route path="/" element={<Unprotected Component = {Register} />} />
        <Route path="/home" element={<Protected Component = {Home} />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add" element={<Add />} />
        <Route path="/profile" element={<Protected Component = {Profile} />} />
        
      </Routes>
    </>
  )
}

export default App