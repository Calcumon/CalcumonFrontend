import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import request from '../utils/request'



export const SET_AUTHENTICATION = 'SET_AUTHENTICATION'


export interface AUTH_STATE {
  user: string | null; // TODO: confirm that this is a string OR is it a boolean? How are you tracking auth success
  pending: boolean;
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


// export const getUser = (id) => {
//     return dispatch => {
//         request('/auth/token')
//         .then(response => this.props.setAuthentication(response.data))
//         .catch(err => this.props.setAuthentication(null))
//         }
// }