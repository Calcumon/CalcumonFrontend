import React from 'react';
import Banner1 from '../../assets/Banners/Calcumon-Banner1.png'

import { withRouter, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { ReducersMapObject, Reducer, compose } from 'redux'

import { logIn, LOGIN_STATE } from '../../actions/authentication' 

import { Link } from 'react-router-dom';

import './styles/login.css';

import { LOG_IN } from '../../constants/authConstants'

interface Props{
  user?: String | null;
  pending: boolean;
  loggedIn: ()=>void;
  mover: boolean;
}

interface StateProps {
  authentication: Reducer
}

interface data {
  status?: string,
  message?: string,
  Authorization?: string
}

interface LOG_IN {
  type: typeof LOG_IN,
  payload: LOGIN_STATE
}

interface DispatchProps {
  logIn: (payload: LOGIN_STATE) => LOG_IN
}


type props = StateProps & DispatchProps & Props

interface IErrorLoginState {
  showErrorMessage: Boolean;
  username: string;
  password: string;
  error: boolean;
  redirectPage: boolean;
}

class Login extends React.Component<props, IErrorLoginState> {

  constructor(props: props) {
    super(props);
    this.state = {
      showErrorMessage: false,
      username: '',
      password: '',
      error: false,
      redirectPage: false
    }
  }
  
  handleSignIn = async () => {
    const body = {username: this.state.username, password: this.state.password}

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
      if (data.status == "fail"){
        this.setState({ error: true})
      }else{
      this.props.logIn(data)
      console.log(data)
      this.setState({ redirectPage: true,error: false })
      }
    })
    .catch(err=>{
      console.log(err)
    })
  }

  render() {
    if (this.state.redirectPage){
      return <Redirect push to="/Dashboard"/> 
    } else{
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
          this.handleSignIn()
      }}
      >
        Sign In
      </button>

      <p>New Here?</p>
      <Link to='/signup'>
        <button id='submitButton'>
          Sign Up
        </button>
      </Link>
      {this.state.error ? <div><h1>Username or password is Incorrect Please Try again :)</h1></div> : ""}
      </div>
      
    </>
    )
    }
  }
}

const mapStateToProps = (state: ReducersMapObject) : StateProps => ({
  authentication: state.authentication
})

const mapDispatchToProps = () : DispatchProps => {
  return {
    logIn
  }
}

export default connect<StateProps, DispatchProps, Props>(mapStateToProps, mapDispatchToProps())(Login)