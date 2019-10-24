import React from 'react';
import { bool } from 'prop-types';
import { booleanLiteral } from '@babel/types';
import {Link} from 'react-router-dom'
import './styles/Signup.css'
export interface Props {
    signUpAuthenication: Function;
}

export interface State {
    username: string;
    email?: string;
    password: string;
    verifiedPassword: string;
    error: boolean;
}

class Signup extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            username: '',
            email: "",
            password: '',
            verifiedPassword: '',
            error: false
        };
    }

    handleSignIn = () =>{
        //#TODO update url to meet api standard

        fetch(`https://calcumon-user-api.herokuapp.com/user/`,{
          method: 'post',
            headers: {
              'accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: this.state.password, username: this.state.username, password: this.state.password})
          })
      }

    render() {
        return (
        <div>
            <div className="singUpContainer">
            <input type="password"
                    name="inputPassword"
                    id="inputPassword"
                    className="form-control"
                    placeholder="email"
                    onChange={(e) => this.setState({ email : e.target.value})}
                    required />
              <input type="string"
                    name="username"
                    id="inputUsername"
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
              {/* <input type="password"
                    name="inputPassword"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Verify Password"
                    onChange={(e) => this.setState({ verifiedPassword : e.target.value})}
                    required /> */}
              <button id="submitButton" type="submit" onClick={() => {
                // TODO: validate data function
                this.handleSignIn()
              }}>REGISTER</button>
            <div id='register'>
              <p>Already Registered?</p>
              <Link to='/'><button id='submitButton'>Login</button></Link>
            </div>
          </div>
      </div>
       );
    }
}

export default Signup;
