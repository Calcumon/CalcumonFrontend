import { Reducer } from 'redux';
import { AUTH_STATE, AUTH_ACTION_TYPE, ACTION_TYPE } from '../actions/authentication';

import { SET_AUTHENTICATION, LOG_IN } from '../constants/authConstants'

// export const posts = (state=[], action) => {
//   switch(action.type){
//     default:
//       return state
//   }
// }

const AUTHENTICATION_INITIAL_STATE : AUTH_STATE = {
    user: null,
    pending: true,
    
}

export const authentication : Reducer<AUTH_STATE, ACTION_TYPE> = (state = AUTHENTICATION_INITIAL_STATE, action: AUTH_ACTION_TYPE) : AUTH_STATE => {
  switch(action.type){
    case SET_AUTHENTICATION:
      const { user, pending } = action.payload
      return { user, pending }
    // case LOG_IN:
    // case LOG_OUT:
    // case SIGN_UP:
    default:
      return state
  }
}
