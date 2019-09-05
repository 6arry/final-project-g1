import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Login />
      <Home />
    </div>
  );
}

export default App;
