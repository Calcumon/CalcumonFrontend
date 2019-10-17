import React from 'react'
// import {Link} from 'react-router-dom'

export interface Props {
    
}
 
export interface State {
    showErrorMessage: boolean;
    username: string;
    password: string;
}
 
class Login extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            showErrorMessage: true,
            username: '',
            password: ''
        };
    }

    handleSignIn = () =>{

    }

    render() { 
        return ( 
        <div>
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
        {/* <Link to="/"><button></button></Link> */}
        </div> );
    }
}
 
export default Login;