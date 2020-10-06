import * as TYPE from './type.action';

// --------------DECODE TOKEN TYPES--------------

export interface DecodeToken {
  email: string;
  exp: number;
  iat: number;
  sub: string;
}

// --------------INTERFACE TO LOGIN--------------

interface UserInterface {
  email: string;
  name: string;
  id: number;
}

export interface PropsLogin {
  user: UserInterface;
  status: number;
  token: string;
}

export interface PropsRequestLogin {
  email: string;
  password: string;
}

// --------------INTERFACE TO REGISTER--------------

export interface PropsRegisterUser {
  email: string;
  password: string;
}

export interface PropsResponseRegister {
  data: {
    accessToken: string;
  };
  status: number;
}

// --------------INTERFACE BOARD--------------

export interface PropsGetUserBoards {
  user: UserInterface;
  token: string;
}

export interface UserBoards {
  title: string;
  description: string;
  user: { name: string; id: number | string }[];
  userId: number | string;
  id: number | string;
}

export interface BoardState {
  boards: UserBoards[];
  currentBoard: UserBoards;
}

// --------------CARD INTERFACES--------------

interface CardPositionInterface {
  x: number | string;
  y: number | string;
}

interface DataTimeInterface {
  date: string;
  hour: number | string;
}

export interface CardDataInterface {
  alert?: {
    title?: string;
    supTitle?: string;
    data?: number | string;
  };
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
  position: CardPositionInterface;
  data: CardDataInterface;
  boardId: number | string;
  userId: number | string;
  id: number | string;
}

export interface CardCreateInterface {
  position: CardPositionInterface;
  data: CardDataInterface;
}

export interface CardState {
  cards: CardInterface[];
}

export interface PropsUpdatedCard {
  token: string;
  card: CardInterface;
}

export interface PropsCreatedCard {
  currentBoard: UserBoards;
  user: UserInterface;
  token: string;
  card: CardCreateInterface;
}

// --------------ACTIONS INTERFACES--------------

// ACTIONS INTERFACES LOGIN

export interface LoginAction {
  type: typeof TYPE.LOGIN;
  payload: PropsLogin;
}

export interface LogoutAction {
  type: typeof TYPE.LOGOUT;
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
