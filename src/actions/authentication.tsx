import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { SET_AUTHENTICATION, LOG_IN, SIGN_UP, LOG_OUT } from '../constants/authConstants'

export interface AUTH_STATE {
  user?: string | null; //This is string to keep token
  pending?: boolean;
  status?: string,
  message?: string,
  Authorization?: string
}

//login State
export interface LOGIN_STATE {
  status: String,
  message: String,
  Authorization: String
}

//Sign Up State
export interface SIGN_UP_STATE {
  status: String,
  message: String,
  Authorization: String
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

export interface SIGN_UP {
  type: typeof SIGN_UP,
  payload: SIGN_UP_STATE 
}

export const logIn = (payload: LOGIN_STATE) => {
  return {
    type: typeof LOG_IN,
    payload
  }
}

export const signUp = (payload: SIGN_UP_STATE) => {
  return {
    type: typeof SIGN_UP,
    payload
  }
}

export const logOut = () => {
  return {
    type: typeof LOG_OUT
  }
}