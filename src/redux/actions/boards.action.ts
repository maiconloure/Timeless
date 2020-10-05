/* eslint-disable @typescript-eslint/no-unused-vars */
import { ThunkAction } from 'redux-thunk';

import api from '../../services/api';
import { RootStoreType } from '../store/store';
import * as Interface from './interface.action';
import { SET_BOARDS, UPDATE_BOARD, SET_CHOSEN_BOARD, SET_CURRENT_CARDS } from './type.action';

export const getUserBoards = ({
  id,
  token,
}: Interface.PropsGetUserBoards): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.SetUserBoardsAction
> => (dispatch) => {
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

const setUserBoards = (boards: Interface.UserBoards[]): Interface.SetUserBoardsAction => ({
  type: SET_BOARDS,
  payload: boards,
});

export const updateBoardAPI = ({
  token,
  board,
}: {
  token: string;
  board: Interface.UserBoards;
}): ThunkAction<void, RootStoreType, unknown, Interface.UpdateBoardAction> => (dispatch) => {
  if (board) {
    const headers = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    api
      .put(`/boards/${board.id}`, board, headers)
      .then((response) => {
        if (response.status !== 200) {
          console.error(`updateBoard ==> ERROR: ${response.data} Status: ${response.status}`);
        } else {
          console.warn(`updateBoard ==> Status: ${response.status}`);
          dispatch(updateBoard(board));
        }
      })
      .catch((error) =>
        console.error(
          `updateBoard ==> ERROR: ${error.response.data} Status: ${error.response.status}`
        )
      );
  } else {
    console.error(`updateBoard ==>  board ERROR: ${board}}`);
  }
};

const updateBoard = (board: Interface.UserBoards): Interface.UpdateBoardAction => ({
  type: UPDATE_BOARD,
  payload: board,
});

export const getUserCards = (
  board: Interface.UserBoards,
  token: string
): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.ChosenBoardAction | Interface.CurrentCardsAction
> => (dispatch) => {
  dispatch(setChosenBoard(board));

  const headers = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  api
    .get(`/users/${board.userId}/cards?boardId=${board.id}`, headers)
    .then((response) => {
      if (response.status !== 200) {
        console.error(`getUserCards ==> ERROR: ${response.data} Status: ${response.status}`);
      } else {
        console.warn(`getUserCards ==> Status: ${response.status}`);
        console.log(response);

        dispatch(setCurrentCards(response.data));
      }
    })
    .catch((error) =>
      console.error(
        `getUserCards ==> ERROR: ${error.response.data} Status: ${error.response.status}`
      )
    );
};

const setChosenBoard = (board: Interface.UserBoards): Interface.ChosenBoardAction => ({
  type: SET_CHOSEN_BOARD,
  payload: board,
});

const setCurrentCards = (cards: Interface.CardInterface[]): Interface.CurrentCardsAction => ({
  type: SET_CURRENT_CARDS,
  payload: cards,
});

export type BoardsAction =
  | Interface.SetUserBoardsAction
  | Interface.ClearBoardAction
  | Interface.UpdateBoardAction
  | Interface.ChosenBoardAction
  | Interface.CurrentCardsAction;
