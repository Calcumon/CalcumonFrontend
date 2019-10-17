import React from 'react';
import { request } from 'http';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom'

import { setAuthentication } from '../../actions/authentication'

// TODO: What will be in our LoginInterface?
// interface LoginInterface {

// }

class Login extends React.Component {
    
    constructor(){
        super(props);
        this.state = { 
            showErrorMessage: False
        }
    }

    handleSignIn = (event) =>{
        event.preventDefault();

        const {login, password} = event.target

        request('auth/tokem', {username: login, password})
        .then((response=> {
            this.setState({ showErrorMessage: False })
            localStorage.setItem('token', response.data.token)
            return request('/auth/token')
        })
        .then(response=> {
            this.props.setAuthentication(response.data)
            this.props.history.push('/landingPage')
        })
        .catch(response => {
            this.setState({showErrorMessage: False})
        })
    }

    render() {
    return (
              <div className="login">
        <form onSubmit={this.handleSignIn} className="login-form">
          <div>
            <h1>Log in</h1>
          </div>

          <div>
            <input type="text" name="inputEmail" id="inputEmail" placeholder="Email address" required autoFocus />
          </div>

          <div>
            <input type="password" name="inputPassword" id="inputPassword" className="form-control" placeholder="Password" required />
          </div>
          <div className={ !this.state.showErrorMessage ? 'login-auth-error login-hide-auth-error' : 'login-auth-error' }>
            Invalid Username or Password
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
        <Link to="/"><button></button></Link>
      </div>
      )
}
}

export default Login;