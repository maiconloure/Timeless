/* eslint-disable @typescript-eslint/no-unused-vars */
import { ThunkAction } from 'redux-thunk';

import api from '../../services/api';
import { RootStoreType } from '../store/store';
import {
  PropsGetUserBoards,
  PropsSetUserBoards,
  SetUserBoardsAction,
  ClearBoardAction,
} from './interface.action';
import { SET_BOARDS } from './type.action';

export const getUserBoards = ({
  id,
  token,
}: PropsGetUserBoards): ThunkAction<void, RootStoreType, unknown, SetUserBoardsAction> => (
  dispatch
) => {
  const headers = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
  api
    .get(`users/${id}/boards`, headers)
    .then((response) => {
      if (response.status !== 200) {
        console.error(`getUserBoards ==> ERROR: ${response.data} Status: ${response.status}`);
      } else {
        console.warn(`getUserBoards ==> Status: ${response.status}`);
        dispatch(setUserBoards(response.data));
      }
    })
    .catch((error) =>
      console.log(
        `getUserBoards ==> ERROR: ${error.response.data} Status: ${error.response.status}`
      )
    );
};

const setUserBoards = (boards: PropsSetUserBoards): SetUserBoardsAction => ({
  type: SET_BOARDS,
  payload: boards,
});

export type BoardsAction = SetUserBoardsAction | ClearBoardAction;
