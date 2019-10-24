import React from 'react';
import { request } from 'http';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Banner1 from '../../assets/Banners/Calcumon-Banner1.png'


import { Link } from 'react-router-dom';

import './styles/login.css';

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
    // this.props.logIn({username: this.state.username, password: this.state.password})
    
    return fetch(`${process.env.REACT_APP_BACKEND}auth/login`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    },
    {username: this.state.username, password: this.state.password})
    .then((response)=>{
      console.log(response)
    })
  }

  render() {
    // TODO: If redux authenticated is true: redirect to user dashboard

    return (
    <>
      <img src={Banner1} className='header'/>
      <div className="inputContainer">
      <input type="string"
        name="USERNAME"
        id="inputUsername"
        placeholder="USERNAME"
        onChange={(e) => this.setState({ username : e.target.value})}
        required autoFocus />
      <input type="password"
        name="inputPassword"
        id="inputPassword"
        className="form-control"
        placeholder="PASSWORD"
        onChange={(e) => this.setState({ password : e.target.value})}
        required />
      <button id='submitButton' type="submit" onSubmit={() => {
        // TODO: validate data function
        this.handleSignIn()
      }}>Sign In</button>
      <div id='register'>
        <p>New Here?</p>
        <Link to='/signup'><button id='submitButton'>Sign Up</button></Link>
      </div>
      </div>
    </>
    )
  }
}

export default Login;
