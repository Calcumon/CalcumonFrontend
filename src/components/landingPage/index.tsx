import React from 'react';
import { withRouter, Redirect } from 'react-router-dom'

export interface LandingPageProps {

}

export interface LandingPageState {
  info: String;
  logOut: boolean;
}

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
  constructor(props: LandingPageProps){
    super(props)
    this.state = {
      info: "hello",
      logOut: false
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
      this.setState({ logOut : true })
      console.log("I logged out")
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  render() {
    console.log(this.state)
    if (this.state.logOut){
      return <Redirect push to="/"/>
    }else{
    return (
      <>
      <h1>hello</h1>
      <button
      id='submitButton'
      type='submit'
      onClick={() => {
      this.handleSignOut()
      }}>Sign Out</button>
      </>
    );
  }
}

}

export default LandingPage;
