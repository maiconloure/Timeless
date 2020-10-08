/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { RootStoreType } from '../store/store';
export const NEW_ACTION = 'NEW_ACTION';

export interface feedNewAction {
  newAction: string;
}

interface GetAction {
  type: typeof NEW_ACTION;
  payload: string;
}

export const getNewAction = (
  newAction: string
): ThunkAction<void, RootStoreType, unknown, GetAction> => (dispatch) => {
  dispatch(newFeedAction(newAction));
};

export const newFeedAction = (newAction: string): GetAction => {
  return {
    type: NEW_ACTION,
    payload: newAction,
  };
};

export type feedAction = GetAction;
