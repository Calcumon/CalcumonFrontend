
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

// Redux connection

// Components
// import SignUp from './components/Signup/index'
import Login from './components/Login/index'
import Dashboard from './components/landingPage/index'
import LevelOne from './components/levels/level1/index'

//This is for authenicated route
import AuthenicatedRoute from './highOrderComponents/AuthenicatedRoute';

import reducers from './reducers';
import Signup from './components/Signup';
const store = createStore(reducers)

{/* TODO: Add after login form is moved out of landing page: <Route path ='/login' component={Login}/> */}

//add logout to authenitacted routes

interface Props{

}

interface appState{
}
export default class App extends React.Component<Props, appState>  {
  constructor(props: Props){
    super(props)
    this.state ={
    }
  }



  render(){
    return (
      <Provider store={store} >
        <Router>
            <div>
              <Switch>
                <Route exact path ='/' component={ Login }/>
                <Route path = '/signup' component = { Signup }/>
                {/* <AuthenicatedRoute pending={false} path='/Dashboard' user={true} component={ Dashboard } /> */}
                <Route path = '/Dashboard' component={ Dashboard }/>
                <Route path = '/level/1' component = { LevelOne }/>
              </Switch>
            </div>
        </Router>
      </Provider>
    );
    } 
}
