
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

// Redux connection
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

// Components
// import SignUp from './components/Signup/index'
import Login from './components/Login/index'
import Dashboard from './components/landingPage/index'

//This is for authenicated route
import AuthenicatedRoute from './highOrderComponents/AuthenicatedRoute';

import reducers from './reducers';
import Signup from './components/Signup';
const store = createStore(reducers)

{/* TODO: Add after login form is moved out of landing page: <Route path ='/login' component={Login}/> */}

//add logout to authenitacted routes
export default class App extends React.Component  {
  render(){
    return (
      <Provider store={store} >
        <Router>
            <div>
              <Switch>
                <Route exact path ='/' component={ Login }/>
                <Route path = '/signup' component = { Signup }/>
                {/* TODO: user={"Add variable from redux store"} */}
                <AuthenicatedRoute pending={false} path='/Dashboard' user={true} component={ Dashboard } />
              </Switch>
            </div>
        </Router>
      </Provider>
    );
  }
}
