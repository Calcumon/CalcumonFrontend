import React from 'react';
import { request } from 'http';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom'

import { setAuthentication } from '../../actions/authentication'

// TODO: What will be in our LoginInterface?
interface IErrorLoginState {
    showErrorMessage: Boolean;
    username: string;
    password: string;
    error: boolean;
}

interface Props{
    setAuthentication: Function;
    request: Function
}

class Login extends React.Component<Props, IErrorLoginState> {
    
    constructor(props: Props){
        super(props)
        this.state = { 
            showErrorMessage: false,
            username: '',
            password: '',
            error: false,
        }
    }

    // TODO: integrate in LOGIN component
    // componentDidMount(){
    //   request('/auth/token')
    //   .then(response => this.props.setAuthentication(response.data))
    //   .catch(err => this.props.setAuthentication(null))
    // }


    handleSignIn = () =>{

      fetch("/auth", {
        method: "post",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      }).then((response) => response.json())
      .then((data) => {
          // TODO: find what data backend sends us
          if (!data.status) {
            this.setState({ error : true });
          } else {
            // TODO: Update redux to call authenticate action as true
          }
      })
      .catch((err) => {
          console.log(err)
          this.setState({ error : true });
      })
    
        // event.preventDefault();

        // const { login, password } = event.target

        // request('auth/tokem', {username: login, password})
        // .then((response=> {
        //     this.setState({ showErrorMessage: false })
        //     localStorage.setItem('token', response.data.token)
        //     return request('/auth/token')
        // })
        // .then(response=> {
        //     this.props.setAuthentication(response.data)
        //     this.props.history.push('/landingPage')
        // })
        // .catch(response => {
        //     this.setState({ showErrorMessage: false })
        // })
    }

    render() {
      // TODO: If redux authenticated is true: redirect to user dashboard

    return (
        <div className="login">
        {/* <form onSubmit={this.handleSignIn} className="login-form">
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
        <Link to="/"><button></button></Link> */}
        <input type="string" 
               name="username" 
               id="inputEmail" 
               placeholder="Username" 
               onChange={(e) => this.setState({ username : e.target.value})}
               required autoFocus />
        <input type="password" 
               name="inputPassword" 
               id="inputPassword" 
               className="form-control" 
               placeholder="Password" 
               onChange={(e) => this.setState({ password : e.target.value})}
               required />
        <button className="btn btn-lg btn-primary btn-block" type="submit" onSubmit={() => {
          // TODO: validate data function
          this.handleSignIn()
        }}>Sign in</button>
      </div>
      )
}
}

export default Login;