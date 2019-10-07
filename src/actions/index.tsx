import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

// Create Action Constants
export enum todoActionTypes {
    ADD = 'ADD',
    DELETE = 'DELETE'
  }

// Interface for Get All Action Type
export interface ICharacterGetAllAction {
    type: IItem.todoActionTypes.ADD;
    type: IItem.todoActionTypes.DELETE;
    list: IItem[];
  }

  //action creator
export const addTodo = Todo => ({
  //it returns an action
  
  type: 'ADD', payload: Todo
})

export const removeTodo = Todo => ({

  type: 'DELETE', payload: Todo
})


/* 
Combine the action types with a union (we assume there are more)
example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
*/
export type CharacterActions = ICharacterGetAllAction;
  