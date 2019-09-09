import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Host from './components/Host';
import Join from './components/Join';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/host' component={Host} />
          <Route path='/join' component={Join} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
