/* eslint-disable @typescript-eslint/no-unused-vars */
import { ThunkAction } from 'redux-thunk';

import api from '../../services/api';
import expiredSession from '../../utils/expire-session';
import { RootStoreType } from '../store/store';
import * as Interface from './interface.action';
import * as TYPE from './type.action';

const createHeader = (token: string) => ({
  headers: {
    Authorization: 'Bearer ' + token,
  },
});

export const updateCardAPI = ({
  token,
  card,
  history,
}: Interface.PropsUpdatedCard): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.UpdateCardAction
> => (dispatch) => {
  dispatch(updateCard(card));
  api
    .put(`/cards/${card.id}`, card, createHeader(token))
    .then((response) => {
      if (response.status !== 200) {
      } else {
      }
    })
    .catch((error) => {
      dispatch(expiredSession({ error, history }));
    });
};

export const createCardAPI = ({
  currentBoard,
  token,
  user,
  card,
  history,
}: Interface.PropsCreatedCard): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.CreateCardAction
> => (dispatch) => {
  const newCard = { ...card, boardId: currentBoard.id };
  api
    .post(`/users/${user.id}/cards`, newCard, createHeader(token))
    .then((response) => {
      if (response.status !== 201) {
      } else {
        dispatch(createCard(response.data));
      }
    })
    .catch((error) => {
      dispatch(expiredSession({ error, history }));
    });
};

export const deleteCardAPI = ({
  card,
  token,
  history,
}: Interface.PropsUpdatedCard): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.DeleteCardAction
> => (dispatch) => {
  dispatch(deleteCard(card));
  api
    .delete(`/cards/${card.id}`, createHeader(token))
    .then((response) => {
      if (response.status !== 200) {
      } else {
      }
    })
    .catch((error) => {
      dispatch(expiredSession({ error, history }));
    });
};

const updateCard = (card: Interface.CardInterface): Interface.UpdateCardAction => ({
  type: TYPE.UPDATE_CARD,
  payload: card,
});

const createCard = (card: Interface.CardInterface): Interface.CreateCardAction => ({
  type: TYPE.CREATE_CARD,
  payload: card,
});

const deleteCard = (card: Interface.CardInterface): Interface.DeleteCardAction => ({
  type: TYPE.DELETE_CARD,
  payload: card,
});

export const getCards = (cards: Interface.CardInterface[]): Interface.GetCardsAction => ({
  type: TYPE.GET_CARDS,
  payload: cards,
});

export const clearCards = (): Interface.ClearCardsAction => ({
  type: TYPE.CLEAR_CARDS,
});

export type CardAction =
  | Interface.UpdateCardAction
  | Interface.CreateCardAction
  | Interface.DeleteCardAction
  | Interface.GetCardsAction
  | Interface.ClearCardsAction;
