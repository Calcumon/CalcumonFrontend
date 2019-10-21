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
    correctPassword: string;
    error: boolean;
}
 
class Signup extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            username: 'name',
            email: "@gmail.com",
            password: 'password',
            correctPassword: 'Same Password',
            error: false
        };
    }

    handleSignIn = () =>{
        //#TODO update url to meet api standard 
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
      
      }

    render() { 
        return ( 
        <div>
            <div className="singUpContainer">
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
              <button id="submitButton" type="submit" onSubmit={() => {
                // TODO: validate data function
                this.handleSignIn()
              }}>REGISTER</button>
            <div id='register'>
              <p>Already Registered?</p>
              <h5>LOGIN</h5>
            </div>
          </div>
      </div>
       );
    }
}
 
export default Signup;