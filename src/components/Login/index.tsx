import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Banner1 from '../../assets/Banners/Calcumon-Banner1.png'


import { Link } from 'react-router-dom';

import './styles/login.css';

import { setAuthentication } from '../../actions/authentication'
import { async } from 'q';


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

interface requestBody {
  username: string;
  password: string;
}

interface responseBody {
  status: string;
  message: string;
  Authorization: string;
}

class Login extends React.Component<Props, IErrorLoginState> {

  constructor(props: Props) {
    super(props);
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


  handleSignIn = async () => {
    // this.props.logIn({username: this.state.username, password: this.state.password})
    console.log("I am here")
    const body: requestBody = {username: this.state.username, password: this.state.password}

    return fetch(`https://calcumon-user-api.herokuapp.com/auth/login`, {
    method: 'POST',
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response=>{
      return response.json()
    }).then((data)=>{
      // this.props.history.push('/dashboard')
      // this.props.logIn(data.body)
      console.log(data)
    })
    .catch(err=>{console.log(err)})
  }

  render() {
    // TODO: If redux authenticated is true: redirect to user dashboard
    return (
    <>
      <img
        src={Banner1}
        className='splash-logo'
      />

      <div className='inputContainer'>
        <input
          type='string'
          name='USERNAME'
          id='inputUsername'
          placeholder='USERNAME'
          onChange={(e) => {
            this.setState({ username: e.target.value})
          }}
          required
          autoFocus
        />

        <input
          type='password'
          name='inputPassword'
          id='inputPassword'
          className='form-control'
          placeholder='PASSWORD'
          onChange={(e) => {
            this.setState({ password: e.target.value})
          }}
          required
        />
      <button
        id='submitButton'
        type='submit'
        onClick={() => {
          
          // TODO: validate data function
          this.handleSignIn()
      }}>
        Sign In
      </button>

      <p>New Here?</p>
      <Link to='/signup'>
        <button id='submitButton'>
          Sign Up
        </button>
      </Link>
      </div>

    </>
    )
  }
}

export default Login;
