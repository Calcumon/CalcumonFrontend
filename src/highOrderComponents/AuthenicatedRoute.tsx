
import React, { Component } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

import { connect } from 'react-redux'
import { ReducersMapObject } from 'redux'
import { logOut } from '../actions/authentication'

export interface IProps {
  path: string;
  user: boolean;
  component: React.ComponentType<any>;
  pending: boolean;
}

//add in logout to authenitacted routes


class AuthenticatedRoute extends Component<IProps, RouteProps> {
  render() {
    const { pending, user, path,  component, } = this.props
    // TODO: Use this?
    const authentication = {
      pending,
      user
    }

    if(pending && !user){
      return <div>Loading...</div>
    }
    else if (user) {
      // TODO: Can't use Route
      return <Route path={path} logOut={logOut} render={ component => (
        <>
          <Component component={component} />
        </>
      )}/>
    }
    else {
      return <Redirect to='/' />
    }
  }

}


const mapStateToProps = (state: ReducersMapObject) => ({
  authentication: state.authentication
})

export default connect(mapStateToProps)(AuthenticatedRoute)
