import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Auth0Provider } from './contexts/auth0.context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';

function App() {
  return (
    <Auth0Provider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className={'container'}>
            <Switch>
              <Route path={'/'} exact={true} component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
