import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Dashboard';
// import Host from './pages/Host';
import SignupLogin from './pages/SignupLogin';
// import Logout from './pages/Logout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from '../src/context'

function App() {
  return (
    <Provider>
      <Router>
        <div className='App'>
          <Navigation />
            <Switch>
              <Route path='/' exact component={Home} />
              {/* <Route path='/host' component={Host} /> */}
              <Route path='/SignupLogin' component={SignupLogin} />
              {/* <Route path='/logout' component={Logout} /> */}
            </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
