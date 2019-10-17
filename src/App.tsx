
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

// Redux connection
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';


// Components 
// import SignUp from './components/Signup/index'
import Login from './components/Login/index'
import Dashboard from './components/landingPage/index'

// this will check authenication
import { setAuthentication } from './actions/authenication'
import request from './utils/request';

//This is for authenicated route
import AuthenicatedRoute from './highOrderComponents/AuthenicatedRoute';



export default class App extends React.Component  {

  componentDidMount(){
    request('/auth/token')
    .then(response => this.props.setAuthentication(response.data))
    .catch(err => this.props.setAuthentication(null))
  }

  render(){
  return (
    <Router>
        <div>
          <Switch>
            <Route exact path ='/login' component={Login}/>
            <AuthenticatedRoute path='/Dashboard' component={Dashboard} />
          </Switch> 
        </div>
    </Router>
  );
}
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setAuthentication
  }, dispatch)

export default connect(null, mapDispatchToProps)(App)