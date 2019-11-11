
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
  loggedIn: Boolean
}
export default class App extends React.Component<Props, appState>  {
  constructor(props: Props){
    super(props)
    this.state ={
      loggedIn: false
    }
  }

  loggedIn = (value: Boolean) => {
    if(this.state.loggedIn){
      this.setState({ loggedIn: true})
    }else{
      console.log("not true")
    }
  }

  render(){
    console.log("hello", this.loggedIn)
    if(!this.state.loggedIn){
      return <Provider store={store}>
        <Router>
            <div>
              <Switch>
                <Route exact path ='/' loggedIn= {this.loggedIn} component={ Login }/>
                <Route path = '/signup' loggedIn= {this.loggedIn} component = { Signup }/>
                {/* TODO: user={"Add variable from redux store"} */}
                {/* <AuthenicatedRoute pending={false} path='/Dashboard' user={true} component={ Dashboard } /> */}
                {/* <Route path = '/Dashboard'/> */}
                {/* <AuthenicatedRoute pending={false} path='/Dashboard' user={true} component={ () => <h1>Hello Test</h1> } /> */}
              </Switch>
            </div>
        </Router>
      </Provider>
    } else{
    return (
      <Provider store={store} >
        <Router>
            <div>
              <Switch>
                <Route exact path ='/' component={ Login }/>
                <Route path = '/signup' component = { Signup }/>
                {/* TODO: user={"Add variable from redux store"} */}

                {/* <AuthenicatedRoute pending={false} path='/Dashboard' user={true} component={ Dashboard } /> */}
                <Route path = '/Dashboard' component={Dashboard}/>
                {/* <AuthenicatedRoute pending={false} path='/Dashboard' user={true} component={ () => <h1>Hello Test</h1> } /> */}
              </Switch>
            </div>
        </Router>
      </Provider>
    );
    }
  }
}
