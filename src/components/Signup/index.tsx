import React from 'react';
import { bool } from 'prop-types';
import { booleanLiteral } from '@babel/types';
import { Link, Redirect } from 'react-router-dom'
import Banner1 from '../../assets/Banners/Calcumon-Banner1.png'

import './styles/Signup.css'
export interface Props {
  signUpAuthenication: Function;
  loggedIn: () => void
}

export interface State {
  username: string;
  email?: string;
  password: string;
  verifiedPassword: string;
  error: boolean;
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
      redirector: false
    };
  }

  handleSignUp = () => {
    //#TODO update url to meet api standard

    fetch(`https://calcumon-user-api.herokuapp.com/user/`, {
      method: 'post',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: this.state.email, username: this.state.username, password: this.state.password })
    })
      .then((response) => {
        console.log(response)
        this.setState({ redirector: true })
        this.props.loggedIn()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    if (!this.state.redirector) {
      return (
        <div>
          <div
            className="register__input_container">
            <img
              src={Banner1}
              className='splash-logo'
            />
            {/* Email */}
            <input type="password"
              name="inputPassword"
              id="inputPassword"
              className="register__input input_field"
              placeholder="e m a i l"
              onChange={(e) => this.setState({ email: e.target.value })}
              required />

            {/* Username */}
            <input type="string"
              name="username"
              id="inputUsername"
              className='register__input input_field'
              placeholder="u s e r n a m e"
              onChange={(e) => this.setState({ username: e.target.value })}
              required autoFocus />

            {/* Password */}
            <input type="password"
              name="inputPassword"
              id="inputPassword"
              className="register__input input_field"
              placeholder="p a s s w o r d"
              onChange={(e) => this.setState({ password: e.target.value })}
              required />
            {/* <input type="password"
                    name="inputPassword"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Verify Password"
                    onChange={(e) => this.setState({ verifiedPassword : e.target.value})}
                    required /> */}
            <button
              id="submitButton"
              type="submit"
              className='button'
              onClick={() => {
                // TODO: validate data function
                this.handleSignUp()
              }}>REGISTER</button>
            <div id='register'>
              <p>Already Registered?</p>
              <Link
                to='/'><button id='submitButton'>Login</button></Link>
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect push to='/Dashboard' />
    }
  }
}

export default Signup;
