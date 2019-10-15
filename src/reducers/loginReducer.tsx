// Import Reducer type
import { Reducer } from 'redux';
import {
  loginActions,
  loginActionTypes,
} from '../actions/loginActions';

// Define the login type
export interface Login {
    username: string;
    password: string;
}

export interface loginState {
    
}

const intialLoginState: loginState = {
    
}