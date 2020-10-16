/* eslint-disable @typescript-eslint/no-unused-vars */
import { History, LocationState } from 'history';
import { ThunkAction } from 'redux-thunk';

import api from '../../services/api';
import { defaultBoard } from '../../utils/defaults-json-cards';
import expiredSession from '../../utils/expire-session';
import { RootStoreType } from '../store/store';
import { getCards } from './cards.action';
import * as Interface from './interface.action';
import * as TYPE from './type.action';
const createHeader = (token: string) => ({
  headers: {
    Authorization: 'Bearer ' + token,
  },
});

export const getBoardsAPI = ({
  user,
  token,
  history,
}: Interface.PropsGetUserBoards): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.GetBoardsAction
> => (dispatch) => {
  api
    .get(`users/${user.id}/boards`, createHeader(token))
    .then((response) => {
      if (response.status !== 200) {
      } else {
        if (response.data.length === 0) {
          dispatch(createBoardAPI(defaultBoard, token, user, history));
        }
        dispatch(getBoards(response.data));
      }
    })
    .catch((error) => {
      dispatch(expiredSession({ error, history }));
    });
};

export const updateBoardAPI = ({
  token,
  board,
  history,
}: {
  token: string;
  board: Interface.UserBoards;
  history: History<LocationState>;
}): ThunkAction<void, RootStoreType, unknown, Interface.UpdateBoardAction> => (dispatch) => {
  api
    .put(`/boards/${board.id}`, board, createHeader(token))
    .then((response) => {
      if (response.status !== 200) {
        // console.error(`updateBoardAPI ==> ERROR: ${response.data} Status: ${response.status}`);
      } else {
        // console.warn(`updateBoardAPI ==> Status: ${response.status}`);
        dispatch(updateBoard(board));
      }
    })
    .catch((error) => {
      dispatch(expiredSession({ error, history }));
      // console.error(
      // `updateBoardAPI ==> ERROR: ${error.response.data} Status: ${error.response.status}`
      // );
    });
};

export const getCardsAPI = (
  board: Interface.UserBoards,
  token: string,
  history: History<LocationState>
): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.CurrentBoardAction | Interface.GetCardsAction
> => (dispatch) => {
  if (board.id) {
    dispatch(setCurrentBoard(board));

    api
      .get(`/users/${board.userId}/cards?boardId=${board.id}`, createHeader(token))
      .then((response) => {
        if (response.status !== 200) {
          // console.error(`getCardsAPI ==> ERROR: ${response.data} Status: ${response.status}`);
        } else {
          // console.warn(`getCardsAPI ==> Status: ${response.status}`);
          dispatch(getCards(response.data));
        }
      })
      .catch((error) => {
        dispatch(expiredSession({ error, history }));
        // console.error(
        // `getCardsAPI==> ERROR: ${error.response.data} Status: ${error.response.status}`
        // );
      });
  }
};

export const createBoardAPI = (
  board: Interface.CreateUserBoards,
  token: string,
  user: Interface.UserInterface,
  history: History<LocationState>
): ThunkAction<void, RootStoreType, unknown, Interface.CreateBoardAction> => (dispatch) => {
  api
    .post(`/users/${user.id}/boards`, board, createHeader(token))
    .then((response) => {
      if (response.status !== 201) {
        console.error(`createBoardAPI ==> ERROR: ${response.data} Status: ${response.status}`);
      } else {
        console.warn(` ==> Status: ${response.status}`);
        dispatch(createBoard(response.data));
        // dispatch(getBoardsAPI({ user, token, history }));
      }
    })
    .catch((error) => {
      dispatch(expiredSession({ error, history }));
      console.error(` ==> ERROR: ${error.response.data} Status: ${error.response.status}`);
    });
};

export const deleteBoardAPI = (
  board: Interface.UserBoards,
  token: string,
  history: History<LocationState>
): ThunkAction<void, RootStoreType, unknown, Interface.DeleteBoardAction> => (dispatch) => {
  dispatch(deleteBoard(board));
  api
    .delete(`/boards/${board.id}`, createHeader(token))
    .then((response) => {
      if (response.status !== 200) {
        // console.error(`deleteBoardAPI ==> ERROR: ${response.data} Status: ${response.status}`);
      } else {
        // console.warn(`deleteBoardAPI ==> Status: ${response.status}`);
      }
    })
    .catch((error) => {
      dispatch(expiredSession({ error, history }));
      // console.error(
      // `deleteBoardAPI ==> ERROR: ${error.response.data} Status: ${error.response.status}`;
      // );
    });
};

const getBoards = (boards: Interface.UserBoards[]): Interface.GetBoardsAction => ({
  type: TYPE.GET_BOARDS,
  payload: boards,
});

const updateBoard = (board: Interface.UserBoards): Interface.UpdateBoardAction => ({
  type: TYPE.UPDATE_BOARD,
  payload: board,
});

const setCurrentBoard = (board: Interface.UserBoards): Interface.CurrentBoardAction => ({
  type: TYPE.GET_CURRENT_BOARD,
  payload: board,
});

const createBoard = (board: Interface.UserBoards): Interface.CreateBoardAction => ({
  type: TYPE.CREATE_BOARD,
  payload: board,
});

const deleteBoard = (board: Interface.UserBoards): Interface.DeleteBoardAction => ({
  type: TYPE.DELETE_BOARD,
  payload: board,
});

export const clearBoard = (): Interface.ClearBoardAction => ({
  type: TYPE.CLEAR_BOARD,
});

export type BoardsAction =
  | Interface.GetBoardsAction
  | Interface.UpdateBoardAction
  | Interface.CurrentBoardAction
  | Interface.CreateBoardAction
  | Interface.DeleteBoardAction
  | Interface.ClearBoardAction;
