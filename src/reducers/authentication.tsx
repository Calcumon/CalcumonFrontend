import { Reducer } from 'redux';
import { AUTH_STATE, AUTH_ACTION_TYPE, ACTION_TYPE } from '../actions/authentication';

import { SET_AUTHENTICATION, LOG_IN, SIGN_UP, LOG_OUT } from '../constants/authConstants'

// export const posts = (state=[], action) => {
//   switch(action.type){
//     default:
//       return state
//   }
// }

const AUTHENTICATION_INITIAL_STATE : AUTH_STATE = {
    user: null,
    pending: true
}

export const authentication : Reducer<AUTH_STATE, ACTION_TYPE> = (state = AUTHENTICATION_INITIAL_STATE, action: AUTH_ACTION_TYPE) : AUTH_STATE => {
  switch(action.type){
    case SET_AUTHENTICATION:
      return { user: action.payload.user, pending: action.payload.pending }
    case LOG_IN:
      if(!action.payload){
        console.log("error in login actions")
      }else if (action.payload.status == "fail" || action.payload.message == "email or password does not match."){
        console.log("failed")
      }
      localStorage.setItem('calcumontoken', (action.payload.Authorization ? action.payload.Authorization: ""))
      return { ...state, pending: false, user: action.payload.Authorization}
    case LOG_OUT:
      localStorage.removeItem('calcumontoken')
      return {...AUTHENTICATION_INITIAL_STATE, pending: false}
    case SIGN_UP:
      return { ...state, pending: false, user: action.payload.Authorization}
    default:
      return state
  }
}
