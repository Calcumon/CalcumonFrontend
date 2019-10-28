
import React, { Component } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

import { connect } from 'react-redux'
import { ReducersMapObject } from 'redux'
import { logOut } from '../actions/authentication'
import { statement } from '@babel/template'
export interface IProps {
  user?: String | null;
  component: React.ComponentType<any>;
  pending: boolean;
  path: string;
}

export interface LogOutProp {

}

//add in logout to authenitacted routes


class AuthenticatedRoute extends Component<IProps, RouteProps> {
  constructor(props: IProps){
    super(props);
  }

  render() {
    const { pending, user, component } = this.props
    if(pending && !user){
      return <div>Loading...</div>
    }
    else if (user) {
      // TODO: Can't use Route
      return <Route render={ component => (
        <>
          <Component component={component} />
        </>
      )}/>
    }
    else {
      return <Redirect to='/'/>
    }
  }

}


const mapStateToProps = (state: ReducersMapObject) => ({
  authentication: state.authentication
})

const mapDispatchToProps = () => {
  return {
    logOut
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(AuthenticatedRoute)
