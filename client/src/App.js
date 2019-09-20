import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Host from './pages/Host';
import Join from './pages/Join';
import Logout from './pages/Logout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from './components/context'

function App() {
  return (
    <Provider>
      <Router>
        <div className='App'>
          <Navigation />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/host' component={Host} />
            <Route path='/join' component={Join} />
            <Route path='/logout' component={Logout} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
