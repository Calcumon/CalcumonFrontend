import React from 'react';
import Banner1 from '../../assets/Banners/Calcumon-Banner1.png'

import { withRouter, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { ReducersMapObject, Reducer } from 'redux'

import { logIn } from '../../actions/authentication' 

import { Link } from 'react-router-dom';

import './styles/login.css';


// TODO: What will be in our LoginInterface?
interface IErrorLoginState {
  showErrorMessage: Boolean;
  username: string;
  password: string;
  error: boolean;
  redirectPage: boolean;
}

interface Props{
  setAuthentication: Function;
  request: Function
}

interface requestBody {
  username: string;
  password: string;
}


export interface StateProps {
  authentication: Reducer
}



export interface DispatchProps {
  logIn: () => void
}

type props = StateProps & DispatchProps & Props


class Login extends React.Component<Props, IErrorLoginState, props> {

  constructor(props: Props) {
    super(props);
    this.state = {
      showErrorMessage: false,
      username: '',
      password: '',
      error: false,
      redirectPage: false
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
      // this.props.history.push('/Dashboard')
      // this.props.logIn(data)
      console.log(data)
    })
    .catch(err=>{
      console.log(err)
      // this.props.LogIn(err)
    })
  }

  render() {
    // console.log(logIn)
    // TODO: If redux authenticated is true: redirect to user dashboard
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