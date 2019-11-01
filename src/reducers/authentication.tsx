import { Reducer } from 'redux';
import { AUTH_STATE, AUTH_ACTION_TYPE, ACTION_TYPE } from '../actions/authentication';

import { SET_AUTHENTICATION, LOG_IN, SIGN_UP, LOG_OUT } from '../constants/authConstants';

const AUTHENTICATION_INITIAL_STATE : AUTH_STATE = {
    user: null,
    pending: true
}

export const authentication : Reducer<AUTH_STATE, ACTION_TYPE> = (state = AUTHENTICATION_INITIAL_STATE, action: AUTH_ACTION_TYPE) : AUTH_STATE => {
  // console.log("inside reducer function line 12", action.payload === true, action.type == true)
  console.log(action.type)
  switch(action.type){
    case SET_AUTHENTICATION:
      console.log("here: line 16")
      return { user: action.payload.user, pending: action.payload.pending }
    case LOG_IN:
      console.log("Here")
      if(!action.payload){
        console.log("error in login actions")
      }else if (action.payload.status === "fail" || action.payload.message == "email or password does not match."){
        console.log("failed")
      }
      console.log("here line 25 reducer")
      localStorage.setItem('calcumontoken', (action.payload.Authorization ? action.payload.Authorization: ""))
      return { ...state, pending: false, user: true}
    case LOG_OUT:
      localStorage.removeItem('calcumontoken')
      return { ...AUTHENTICATION_INITIAL_STATE}
    case SIGN_UP:
      localStorage.setItem('calcumontoken', (action.payload.Authorization ? action.payload.Authorization: ""))
      return { pending: false, user: true}
    default:
      return state
  }
}
