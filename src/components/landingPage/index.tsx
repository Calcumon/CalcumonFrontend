import React from 'react';
import { withRouter, Redirect } from 'react-router-dom'

export interface LandingPageProps {

}

export interface LandingPageState {
  info: String;
  Out?: boolean;
}

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
  Constructor(props: LandingPageProps){
    this.state = {
      info: "hello",
      Out: false
    }
  }
  handleSignOut = async () => {
    let token = sessionStorage.getItem('calcumontoken')
    return fetch(`https://calcumon-user-api.herokuapp.com/auth/logout`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: token
    })
    .then((response)=>{
      response.json()
    })
    .then((data)=>{
      this.setState({ Out : !this.state.Out })
      console.log("I logged out")
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  render() {
    if (this.state.Out){
      console.log("here")
      return <Redirect push to='/'/>
    } else{
    return (
      <div>
      <h1>hello</h1>
      <button
      id='submitButton'
      type='submit'
      onClick={() => {
      this.handleSignOut()
      }}>Sign Out</button>
      </div>
    );
  }
}

}

export default LandingPage;
