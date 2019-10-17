import { combineReducers, Reducer } from 'redux';
import { SET_AUTHENTICATION } from '../actions/authenication';

// export const posts = (state=[], action) => {
//   switch(action.type){
//     default:
//       return state
//   }
// } 

const AUTHENTICATION_INITIAL_STATE = {
    user: null,
    pending: true,
}

interface AUTH_STATE {
    user: string | null; // TODO: confirm that this is a string OR is it a boolean? How are you tracking auth success
    pending: boolean;
}

interface AUTH_ACTION_TYPE {
  type: typeof SET_AUTHENTICATION,
  payload: AUTH_STATE
}

type ACTION_TYPE = AUTH_ACTION_TYPE

export const authentication = (state = AUTHENTICATION_INITIAL_STATE, action: AUTH_ACTION_TYPE) : Reducer<AUTH_STATE, ACTION_TYPE> => {
  switch(action.type){
    case SET_AUTHENTICATION: 
      const { user, pending } = action.payload
      return { user, pending }
    default:
      return state
  }
}

export default combineReducers({
    authentication: authentication
})