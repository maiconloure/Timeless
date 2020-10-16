/* eslint-disable @typescript-eslint/no-unused-vars */

import { History, LocationState } from 'history';

import * as TYPE from './type.action';

// --------------DECODE TOKEN TYPES--------------

export interface DecodeToken {
  email: string;
  exp: number;
  iat: number;
  sub: string;
}

// --------------INTERFACE TO LOGIN--------------

export interface UserInterface {
  email: string;
  name: string;
  id: number;
  image: string;
  about: string;
}

export interface PropsLogin {
  user: UserInterface;
  status: number | string;
  token: string;
}

export interface PropsRequestLogin {
  email: string;
  password: string;
}

// --------------INTERFACE TO REGISTER--------------

export interface PropsRegisterUser {
  name: string;
  email: string;
  password: string;
}

export interface PropsResponseRegister {
  data: {
    accessToken: string;
  };
  status: number | string;
}

// --------------INTERFACE BOARD--------------

export interface PropsGetUserBoards {
  user: UserInterface;
  token: string;
  history: History<LocationState>;
}

export interface DataBoard {
  text: {
    text: string;
    position: PositionInterface;
  }[];
  notifications: string[];
  connections: any;
}

export interface UserBoards {
  title: string;
  description: string;
  users: { name: string; id: number | string }[];
  data: DataBoard;
  userId: number | string;
  id: number | string;
  connections: any;
}

export interface CreateUserBoards {
  title: string;
  description: string;
  users: { name: string; id: number | string }[];
  data: {
    text: any;
    notifications: string[];
  };
  connections: any;
}

export interface BoardState {
  boards: UserBoards[];
  currentBoard: UserBoards;
}

// --------------CARD INTERFACES--------------

interface PositionInterface {
  x: number;
  y: number;
}

interface DataTimeInterface {
  date: string;
  hour: number | string;
}
export interface FastCardDataInterface {
  title?: any;
  subTitle?: any;
  date?: any;
  show?: any;
}

export interface CardDataInterface {
  checked: boolean;
  group: {
    color: string;
    number: number;
  };
  users: { name: string; id: number | string }[];
  connected: number[];
  followers: { name: string; id: number }[];
  blocked: boolean;
  fastCard?: FastCardDataInterface;
  title: string;
  time: {
    finish: DataTimeInterface;
    start: DataTimeInterface;
    done: DataTimeInterface;
  };
  description: string;
  tags: {
    color: string;
    text: string;
  }[];
}

export interface CardInterface {
  position: PositionInterface;
  data: CardDataInterface;
  boardId: number | string;
  userId: number | string;
  id: number | string | any;
}

export interface CardCreateInterface {
  position: PositionInterface;
  data: CardDataInterface;
}

export interface CardState {
  cards: CardInterface[];
}

export interface PropsUpdatedCard {
  token: string;
  card: CardInterface;
  history: History<LocationState>;
}

export interface PropsCreatedCard {
  currentBoard: UserBoards;
  user: UserInterface;
  token: string;
  card: CardCreateInterface;
  history: History<LocationState>;
}

// --------------ACTIONS INTERFACES--------------

// ACTIONS INTERFACES SERVICES

export interface LoginAction {
  type: typeof TYPE.LOGIN;
  payload: PropsLogin;
}

export interface LogoutAction {
  type: typeof TYPE.LOGOUT;
}

export interface UpdateUserAction {
  type: typeof TYPE.UPDATE_USER;
  payload: UserInterface;
}

export interface UpdateStatusAction {
  type: typeof TYPE.UPDATE_STATUS;
  payload: number | string;
}

// ACTIONS INTERFACES BOARDS

export interface GetBoardsAction {
  type: typeof TYPE.GET_BOARDS;
  payload: UserBoards[];
}
export interface ClearBoardAction {
  type: typeof TYPE.CLEAR_BOARD;
}

export interface UpdateBoardAction {
  type: typeof TYPE.UPDATE_BOARD;
  payload: UserBoards;
}
export interface CurrentBoardAction {
  type: typeof TYPE.GET_CURRENT_BOARD;
  payload: UserBoards;
}

export interface CurrentCardsAction {
  type: typeof TYPE.GET_CURRENT_CARDS;
  payload: CardInterface[];
}

export interface CreateBoardAction {
  type: typeof TYPE.CREATE_BOARD;
  payload: UserBoards;
}

export interface DeleteBoardAction {
  type: typeof TYPE.DELETE_BOARD;
  payload: UserBoards;
}

// ACTIONS INTERFACES CARDS

export interface UpdateCardAction {
  type: typeof TYPE.UPDATE_CARD;
  payload: CardInterface;
}

export interface CreateCardAction {
  type: typeof TYPE.CREATE_CARD;
  payload: CardInterface;
}

export interface DeleteCardAction {
  type: typeof TYPE.DELETE_CARD;
  payload: CardInterface;
}

export interface GetCardsAction {
  type: typeof TYPE.GET_CARDS;
  payload: CardInterface[];
}

export interface ClearCardsAction {
  type: typeof TYPE.CLEAR_CARDS;
}
