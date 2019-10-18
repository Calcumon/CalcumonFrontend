import { Reducer } from 'redux';
import { SET_AUTHENTICATION, AUTH_STATE, AUTH_ACTION_TYPE, ACTION_TYPE } from '../actions/authentication';

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
    default:
      return state
  }
}