import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Login from './components/Login'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          {/* <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/events">
            <Events />
          </Route> */}
        </Switch>
    </Router>

      </header>
    </div>
  );
}

export default App;
