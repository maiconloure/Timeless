/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootStoreType } from '../store/store';
import * as TYPE from './type.action';
export const NEW_ACTION = 'NEW_ACTION';

export interface feedNewAction {
  newAction: string;
}

export interface clearFeed {
  type: typeof TYPE.LOGOUT;
}

export interface GetAction {
  type: typeof TYPE.NEW_ACTION;
  payload: string;
}

export const getNewAction = (
  newAction: string
): ThunkAction<void, RootStoreType, unknown, GetAction> => (dispatch) => {
  dispatch(newFeedAction(newAction));
};

export const newFeedAction = (newAction: string): GetAction => {
  return {
    type: TYPE.NEW_ACTION,
    payload: newAction,
  };
};

export const clearFeed = (): clearFeed => {
  return {
    type: TYPE.LOGOUT,
  };
};

export type feedAction = GetAction | clearFeed;
