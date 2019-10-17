
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

// this will check authenication
import { setAuthentication } from './actions/authentication'
import request from './utils/request';

//This is for authenicated route
import AuthenicatedRoute from './highOrderComponents/AuthenicatedRoute';

import reducers from './reducers';
const store = createStore(reducers)

{/* TODO: Add after login form is moved out of landing page: <Route path ='/login' component={Login}/> */}
export default class App extends React.Component  {
  
  // Moved to LOGIN route
  // componentDidMount(){
  //   request('/auth/token')
  //   .then(response => this.props.setAuthentication(response.data))
  //   .catch(err => this.props.setAuthentication(null))
  // }

  render(){
  return (
    <Provider store={store} >
      <Router>
          <div>
            <Switch>
              <Route exact path ='/' component={ Login }/>
              {/* TODO: user={"Add variable from redux store"} */}
              <AuthenicatedRoute path='/Dashboard' user={ false } component={ Dashboard } />
            </Switch> 
          </div>
      </Router>
    </Provider>
  );
}
}

// const mapDispatchToProps = () => {
//   return {
//     setAuthentication
//   }
//  }
 
// //  dispatch =>
// //   bindActionCreators({
// //     setAuthentication
// //   }, dispatch)

// export default connect(null, mapDispatchToProps)(App)