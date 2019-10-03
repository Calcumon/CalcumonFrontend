import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

// Create Action Constants
export enum todoActionTypes {
    GET_ALL = 'GET_ALL',
  }

// Interface for Get All Action Type
export interface ICharacterGetAllAction {
    type: CharacterActionTypes.GET_ALL;
    characters: IItem[];
  }

/* 
Combine the action types with a union (we assume there are more)
example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
*/
export type CharacterActions = ICharacterGetAllAction;
  