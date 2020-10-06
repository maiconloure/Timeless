/* eslint-disable @typescript-eslint/no-unused-vars */
import { ThunkAction } from 'redux-thunk';

import api from '../../services/api';
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
}: Interface.PropsUpdatedCard): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.UpdateCardAction
> => (dispatch) => {
  console.log(card);

  dispatch(updateCard(card));
  api
    .put(`/cards/${card.id}`, card, createHeader(token))
    .then((response) => {
      if (response.status !== 200) {
        console.error(`updateCardAPI ==> ERROR: ${response.data} Status: ${response.status}`);
      } else {
        console.warn(`updateCardAPI ==> Status: ${response.status}`);
        console.log(response.data);
      }
    })
    .catch((error) =>
      console.error(
        `updateCardAPI ==> ERROR: ${error.response.data} Status: ${error.response.status}`
      )
    );
};

export const createCardAPI = ({
  currentBoard,
  token,
  user,
  card,
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
        console.error(`updateCardAPI ==> ERROR: ${response.data} Status: ${response.status}`);
      } else {
        console.warn(`updateCardAPI ==> Status: ${response.status}`);
        dispatch(createCard(response.data));
      }
    })
    .catch((error) =>
      console.error(
        `updateCardAPI ==> ERROR: ${error.response.data} Status: ${error.response.status}`
      )
    );
};

export const deleteCardAPI = ({
  card,
  token,
}: Interface.PropsUpdatedCard): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.DeleteCardAction
> => (dispatch) => {
  api
    .delete(`/cards/${card.id}`, createHeader(token))
    .then((response) => {
      if (response.status !== 200) {
        console.error(`updateCardAPI ==> ERROR: ${response.data} Status: ${response.status}`);
      } else {
        console.warn(`updateCardAPI ==> Status: ${response.status}`);
        dispatch(deleteCard(card));
      }
    })
    .catch((error) =>
      console.error(
        `updateCardAPI ==> ERROR: ${error.response.data} Status: ${error.response.status}`
      )
    );
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

export type CardAction =
  | Interface.UpdateCardAction
  | Interface.CreateCardAction
  | Interface.DeleteCardAction
  | Interface.GetCardsAction;
