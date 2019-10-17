
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { Class } from '@babel/types'

interface IProps {
    path: string;
    user: boolean;
    component: Function;
}


const AuthenticatedRoute : React.FC<IProps> = props => {
    const {
    authentication: {
      pending,
      user
    },
    path,
    component
  } = props

  if(pending && !user){
    return <div>Loading...</div>
  }
  else if(user) {
    return <Route path={path} component={component} /> 
  }
  else {
    return <Redirect to='/login' />
  }
}


const mapStateToProps = state => ({ 
  authentication: state.authentication
})

export default connect(mapStateToProps)(AuthenticatedRoute)