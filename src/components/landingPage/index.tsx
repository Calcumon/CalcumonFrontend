import React from 'react';

export interface LandingPageProps {

}

export interface LandingPageState {
  info: String;
}

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
  Constructor(props: LandingPageProps){
    this.state = {
      info: "hello"
    }
  }

  // handleSignOut = async () => {
    // return fetch(`https://calcumon-user-api.herokuapp.com/auth/logout`, {
    //   method: 'POST',
    //   headers: {
    //     'accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    // })
    // .then((response)=>{
    //   response.json()
    // })
    // .then((data)=>{
    //   // this.props.history.push('/')
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
  // }
  render() {
    console.log("hello")
    return (
      <div>
      <h1>hello</h1>
      {/* <button */}
      {/* //   id='submitButton'
      //   type='submit'
      //   onClick={() => {
      //     this.handleSignOut()
      // }}>Sign Out</button> */}
      </div>
    );
  }
}

export default LandingPage;
