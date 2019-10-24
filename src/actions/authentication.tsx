import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';


// export const SET_AUTHENTICATION = 'SET_AUTHENTICATION'



import { SET_AUTHENTICATION, LOG_IN } from '../constants/authConstants'

export interface AUTH_STATE {
  user: string | null; // TODO: confirm that this is a string OR is it a boolean? How are you tracking auth success
  pending: boolean;
}

export interface LOGIN_STATE {
  username: string;
  password: string;
}

export interface AUTH_ACTION_TYPE {
type: typeof SET_AUTHENTICATION,
payload: AUTH_STATE
}

export type ACTION_TYPE = AUTH_ACTION_TYPE


export const setAuthentication = ( claim : AUTH_STATE )=> ({
    type: SET_AUTHENTICATION,
    payload: claim,
  })



export interface LOG_IN {
  type: typeof LOG_IN,
  payload: LOGIN_STATE
}

export const signIn = (payload: LOGIN_STATE) => {
  return {
    type: typeof LOG_IN,
    payload
  }
}

// #Setup SignUp actions
// export const signUp = (payload) => {
//     return {
//       type: signUp,
//       payload
//     }
// }