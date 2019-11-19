import React from 'react';
import { withRouter, Redirect } from 'react-router-dom'

export interface LandingPageProps {

}

export interface LandingPageState {
  info: String;
  logOut: boolean;
}

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
  Constructor(props: LandingPageProps){
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
      // this.props.history.push('/')
      this.setState({ logOut : true })
      console.log("I logged out")
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  render() {
    if (this.state.logOut){
      return (<div>
        <Redirect push to='/'/>
      </div>)
    }else{

   
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
