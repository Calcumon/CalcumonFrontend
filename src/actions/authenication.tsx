import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import request from '../utils/request'



export const SET_AUTHENTICATION = 'SET_AUTHENTICATION'



export const setAuthentication = claim => ({
    type: SET_AUTHENTICATION,
    payload: claim
  })


export const getUser = (id) => {
    return dispatch => {
        request('/auth/token')
        .then(response => this.props.setAuthentication(response.data))
        .catch(err => this.props.setAuthentication(null))
        }
}