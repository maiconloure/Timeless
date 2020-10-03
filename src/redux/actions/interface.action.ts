import { LOGIN, SET_BOARDS } from './type.action';

// DECODE TOKEN TYPES

export interface DecodeTokenType {
  email: string;
  exp: number;
  iat: number;
  sub: string;
}

// INTERFACE TO LOGIN

export interface LoginAction {
  type: typeof LOGIN;
  payload: {
    user: {
      email: string;
      name: string;
      id: number;
    };
    status: number;
    token: string;
  };
}

export interface PropsLoginAction {
  user: {
    email: string;
    name: string;
    id: number;
  };
  status: number;
  token: string;
}

export interface PropsRequestLogin {
  email: string;
  password: string;
}

// INTERFACE TO REGISTERUSER

export interface PropsRegisterUser {
  email: string;
  password: string;
}

// ---------------------------------------------------------

// INTERFACE TO USERS BOARDS

export interface PropsGetUserBoards {
  id: number | string;
  token: any;
}

interface TagsObject {
  color: string;
  text: string;
}

interface CardsObject {
  card: {
    title: string;
    description: string;
    tags: TagsObject[];
    time: {
      done: string;
      start: string;
      finish: string;
    };
    users: [];
  };
  fasterCard: {
    title: string;
    data: string;
  };
  id: number | string;
}

interface BoardsObject {
  title: string;
  id: number | string;
  userId: number | string;
  cards: CardsObject[];
}

export interface PropsSetUserBoards {
  boards: BoardsObject[];
}

export interface SetUserBoardsAction {
  type: typeof SET_BOARDS;
  payload: any;
}
