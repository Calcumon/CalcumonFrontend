import React from 'react';
import {Link, Redirect} from 'react-router-dom'
import '../Login/styles/login.css'
export interface Props {
    signUpAuthenication: Function;
    loggedIn: ()=>void
}

export interface State {
    username: string;
    email?: string;
    password: string;
    verifiedPassword: string;
    error: boolean;
    errorMessage:String
    redirector: boolean;
}

class Signup extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            username: '',
            email: "",
            password: '',
            verifiedPassword: '',
            error: false,
            errorMessage: "",
            redirector: false
        };
    }

    handleSignUp = () =>{
        fetch(`https://calcumon-user-api.herokuapp.com/user/`,{
          method: 'post',
            headers: {
              'accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: this.state.email, username: this.state.username, password: this.state.password})
          }).then(data=>{
            return data.json()
          })
          .then((response)=>{
            console.log(response)
            if(response.status == "fail"){
              this.setState({error:true})
              if(this.state.password == ""){
                this.setState({errorMessage: "Please type in a password"})
              }else if(this.state.username ==""){
                this.setState({errorMessage: "Please type in a username"})
              }else{
                this.setState({errorMessage: "Problem Please contact an admin"})
              }
            }else{
              this.setState({redirector: true, error:false})
              this.props.loggedIn()
            }
          })
          .catch((err)=>{
            console.log(err)
          })
      }

    render() {
        if(!this.state.redirector){
        return (
        <div>
            <div className="singUpContainer">
            <input type="email"
                    name="inputPassword"
                    id="inputPassword" //email id seperate tag
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
              <button id="submitButton" type="submit" onClick={() => {
                this.handleSignUp()
              }}>REGISTER</button>
            <div id='register'>
              <p>Already Registered?</p>
              <Link to='/'><button id='submitButton'>Login</button></Link>
            </div>
          </div>
            {this.state.error ? <div><h1>{this.state.errorMessage}</h1></div>: ""}
      </div>
       );
    }else{
      return <Redirect push to='/Dashboard'/>
    }
    }
}

export default Signup;
