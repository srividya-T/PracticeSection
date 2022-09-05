import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from "react-router-dom";

import Home from './Components/Home';
import AddComnact from './Components/AddComnact';
import EditContact from './Components/EditContact';

const App = () => {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/add" element={<AddComnact/>}/>
          <Route path="/edit/:id" element={<EditContact/>}/>
      </Routes>
    </div>
  );
}

export default App;
