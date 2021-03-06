
import React, { Component } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

import { connect } from 'react-redux'
import { ReducersMapObject, Reducer } from 'redux'
import { logOut } from '../actions/authentication'

export interface IProps {
  user?: boolean | null;
  component: React.ComponentType<any>;
  pending: boolean;
  path: string;
}

//add in logout to authenitacted routes
interface StateProps {
  authentication: Reducer
}

interface DispatchProps {
  logOut: () => void
}

type Props = StateProps & DispatchProps & IProps

class AuthenticatedRoute extends Component<Props, RouteProps> {

  render() {
    console.log("In authenitacted Route component", this.props)
    const { pending, user, logOut, component } = this.props

    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>')
    console.log(component)

    if (pending && !user) {
      return <div>Loading...</div>
    }
    else if (user && !pending) {
      console.log("Inside conditional")
      // TODO: Can't use Route
      return <Route render={ (comp) => {
        console.log('<<<<<<<<<<<<<<<<<<<')
        console.log(comp)
        return(
        <>
          <Component logOut={logOut} component={component} />
        </>)
      }
        
      }/>
    }
    else {
      return <Redirect to='/'/>
    }
  }

}


const mapStateToProps = (state: ReducersMapObject) : StateProps => ({
  authentication: state.authentication
})

const mapDispatchToProps = () : DispatchProps => {
  return {
    logOut
  }
}

export default connect<StateProps, DispatchProps, IProps>(mapStateToProps, mapDispatchToProps())(AuthenticatedRoute)
