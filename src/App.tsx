
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

// Redux connection

// Components
import Login from './components/Login/index'
import Signup from './components/Signup/index'
import Dashboard from './components/landingPage/index'

//This is for authenicated route
import AuthenicatedRoute from './highOrderComponents/AuthenicatedRoute';

import reducers from './reducers';
const store = createStore(reducers)

{/* TODO: Add after login form is moved out of landing page: <Route path ='/login' component={Login}/> */ }

//add logout to authenitacted routes

interface Props {

}

interface appState {
  mover: Boolean
}
export default class App extends React.Component<Props, appState>  {
  constructor(props: Props) {
    super(props)
    this.state = {
      mover: false
    }
  }



  render() {
    console.log("hello", this.state.mover)
    console.log("inside else condition location", this.state.mover)
    return (
      <Provider store={store} >
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/signup' component={Signup} />
              {/* TODO: user={"Add variable from redux store"} */}

              {/* <AuthenicatedRoute pending={false} path='/Dashboard' user={true} component={ Dashboard } /> */}
              <Route path='/Dashboard' component={Dashboard} />
              {/* <AuthenicatedRoute pending={false} path='/Dashboard' user={true} component={ () => <h1>Hello Test</h1> } /> */}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
