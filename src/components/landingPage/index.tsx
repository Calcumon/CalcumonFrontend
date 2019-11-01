import React from 'react';

export interface LandingPageProps {

}

export interface LandingPageState {

}

class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
  Constructor(props: LandingPageProps){
    
  }

  // handleSignOut = async () => {

    // return fetch(`https://calcumon-user-api.herokuapp.com/auth/logout`, {
    //   method: 'POST',
    //   headers: {
    //     'accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
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
    return (
      // <div>
      //   <h1>hello</h1>
      //   <button
      //   id='submitButton'
      //   type='submit'
      //   onClick={() => {
      //     this.handleSignOut()
      // }}>Sign Out</button>
      // </div>
      <>
      <h1>hi</h1>
      </>
    );
  }
}

export default LandingPage;
