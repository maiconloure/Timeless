/* eslint-disable @typescript-eslint/no-unused-vars */
import { notification } from 'antd';
import { History, LocationState } from 'history';
import { ThunkAction } from 'redux-thunk';

import api from '../../services/api';
import { RootStoreType } from '../store/store';
import { getCards } from './cards.action';
import * as Interface from './interface.action';
import * as TYPE from './type.action';

export const getBoardsAPI = ({
  user,
  token,
}: Interface.PropsGetUserBoards): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.GetBoardsAction
> => (dispatch) => {
  const headers = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
  api
    .get(`users/${user.id}/boards`, headers)
    .then((response) => {
      if (response.status !== 200) {
        console.error(`getBoardsAPI ==> ERROR: ${response.data} Status: ${response.status}`);
      } else {
        console.warn(`getBoardsAPI ==> Status: ${response.status}`);
        dispatch(getBoards(response.data));
      }
    })
    .catch((error) =>
      console.log(`getBoardsAPI ==> ERROR: ${error.response.data} Status: ${error.response.status}`)
    );
};

const getBoards = (boards: Interface.UserBoards[]): Interface.GetBoardsAction => ({
  type: TYPE.GET_BOARDS,
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
          console.error(`updateBoardAPI ==> ERROR: ${response.data} Status: ${response.status}`);
        } else {
          console.warn(`updateBoardAPI ==> Status: ${response.status}`);
          dispatch(updateBoard(board));
        }
      })
      .catch((error) =>
        console.error(
          `updateBoardAPI ==> ERROR: ${error.response.data} Status: ${error.response.status}`
        )
      );
  } else {
    console.error(`updateBoard ==>  board ERROR: ${board}}`);
  }
};

const updateBoard = (board: Interface.UserBoards): Interface.UpdateBoardAction => ({
  type: TYPE.UPDATE_BOARD,
  payload: board,
});

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
  dispatch(setCurrentBoard(board));

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
        dispatch(getCards(response.data));
      }
    })
    .catch((error) => {
      if (['jwt expired', 'Missing token'].includes(error.response.data)) {
        notification.open({
          message: 'Sessão expirada',
          description: 'A pagina será recarregada, em breve, aguarde...',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
        setTimeout(() => {
          localStorage.clear();
          history.push('/');
        }, 2000);
      }
      console.error(
        `getUserCards ==> ERROR: ${error.response.data} Status: ${error.response.status}`
      );
    });
};

const setCurrentBoard = (board: Interface.UserBoards): Interface.CurrentBoardAction => ({
  type: TYPE.GET_CURRENT_BOARD,
  payload: board,
});

export type BoardsAction =
  | Interface.GetBoardsAction
  | Interface.ClearBoardAction
  | Interface.UpdateBoardAction
  | Interface.CurrentBoardAction;
