import React from 'react';
import login_banner from '../../assets/Banners/login_banner.svg'
import limbs from '../../assets/Banners/limbs.svg'

import { Link, withRouter, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { ReducersMapObject, Reducer, compose } from 'redux'

import { logIn, LOGIN_STATE } from '../../actions/authentication'

import './styles/login.css';

import { LOG_IN } from '../../constants/authConstants'



//TYPES FOR props
interface Props {
  user?: String | null;
  pending: boolean;
  loggedIn: () => void;
  mover: boolean;
}

//TYPES for stateProps
interface StateProps {
  authentication: Reducer
}

//DispatchProps
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
    // this.props.logIn({username: this.state.username, password: this.state.password})
    const body = { username: this.state.username, password: this.state.password }

    return fetch(`https://calcumon-user-api.herokuapp.com/auth/login`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(response => {
      return response.json()
    }).then((data) => {
      this.props.logIn(data)
      console.log(data)
      this.setState({ redirectPage: true })
    })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    if (this.state.redirectPage) {
      return <Redirect push to="/Dashboard" />
    } else {
      return (

        <div className='login__container'>
          {/* Login Banner */}
          <img
            src={login_banner}
            className='login__banner'
          />

          {/* Login Input Fields */}
          <div className='login__input_container'>
            {/* Username */}
            <input
              type='string'
              name='USERNAME'
              id='inputUsername'
              className='login__input input_field'
              placeholder='u s e r n a m e'
              onChange={(e) => {
                this.setState({ username: e.target.value })
              }}
              required
              autoFocus
            />

            {/* Password */}
            <input
              type='password'
              name='inputPassword'
              id='inputPassword'
              className='login__input input_field'
              placeholder='p a s s w o r d'
              onChange={(e) => {
                this.setState({ password: e.target.value })
              }}
              required
            />

            {/* Login Button */}
            <button
              id='submitButton'
              className='button login__button'
              type='submit'
              onClick={() => {
                this.handleSignIn()
              }}>
              Login
              </button>

            {/* Link to Register Page */}
            <p className='login__p'>Not Registered Yet?</p>
            <Link
              to='/signup'
              className='login__link'>
              Register
            </Link>
          </div>

          <img
            src={limbs}
            className='limbs'
          />


        </div>
      )
    }
  }
}

const mapStateToProps = (state: ReducersMapObject): StateProps => ({
  authentication: state.authentication
})

const mapDispatchToProps = (): DispatchProps => {
  return {
    logIn
  }
}

export default connect<StateProps, DispatchProps, Props>(mapStateToProps, mapDispatchToProps())(Login)
