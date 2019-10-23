
import React, { Component } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

import { connect } from 'react-redux'
import { ReducersMapObject } from 'redux'

export interface IProps {
  path: string;
  user: boolean;
  component: React.ComponentType<any>;
  pending: boolean;
}


class AuthenticatedRoute extends Component<IProps, RouteProps> {
  render() {
    const { pending, user, path,  component } = this.props
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
      return <Route path={path} render={ component => (
        <>
          <Component component={component} />
        </>
      )}/>
    }
    else {
      return <Redirect to='/login' />
    }
  }

}


const mapStateToProps = (state: ReducersMapObject) => ({
  authentication: state.authentication
})

export default connect(mapStateToProps)(AuthenticatedRoute)
