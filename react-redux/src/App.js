import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './Components/Navbar';
import { Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import AddComnact from './Components/AddComnact';

const App = () => {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={()=><Home/>}/>            
          

          <Route path="/add">
            <AddComnact/>
          </Route>

          <Route path="/edit/:id">
            <h1>I am edit Component</h1>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
