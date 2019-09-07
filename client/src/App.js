import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Host from './components/Host';
import Join from './components/Join';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Home />
      <Host />
      <Join />
    </div>
  );
}

export default App;
