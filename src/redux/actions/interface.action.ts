import {
  LOGIN,
  SET_BOARDS,
  LOGOUT,
  CLEAR_BOARD,
  UPDATE_BOARD,
  SET_CHOSEN_BOARD,
  SET_CURRENT_CARDS,
} from './type.action';

// DECODE TOKEN TYPES

export interface DecodeToken {
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

export interface PropsLogin {
  user: {
    email: string;
    name: string;
    id: number;
  };
  status: number;
  token: string;
}

// INTERFACE LOGIN PROPS

export interface PropsRequestLogin {
  email: string;
  password: string;
}

// INTERFACE TO REGISTER USER PROPS

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

// INTERFACE LOGOUT

export interface LogoutAction {
  type: typeof LOGOUT;
}

// INTERFACE CLEAR_BOARD

export interface ClearBoardAction {
  type: typeof CLEAR_BOARD;
}

// INTERFACE TO USERS BOARDS

export interface PropsGetUserBoards {
  id: number | string;
  token: string;
}

export interface UserBoards {
  title: string;
  description: string;
  user: { name: string; id: number | string }[];
  userId: number | string;
  id: number | string;
}

export interface CardInterface {
  position: {
    x: number | string;
    y: number | string;
  };
  data: {
    title: string;
    time: {
      finish: {
        date: string;
        hour: number | string;
      };
      start: {
        date: string;
        hour: number | string;
      };
      done: {
        date: string;
        hour: number | string;
      };
    };
    description: string;
    tags: {
      color: string;
      text: string;
    }[];
  };
  boardId: number | string;
  userId: number | string;
  id: number | string;
}

export interface CardDataInterface {
  data: {
    title: string;
    time: {
      finish: {
        date: string;
        hour: number | string;
      };
      start: {
        date: string;
        hour: number | string;
      };
      done: {
        date: string;
        hour: number | string;
      };
    };
    description: string;
    tags: {
      color: string;
      text: string;
    }[];
  };
}

export interface SetUserBoardsAction {
  type: typeof SET_BOARDS;
  payload: UserBoards[];
}

// INTERFACE UPDATE BOARD

export interface UpdateBoardAction {
  type: typeof UPDATE_BOARD;
  payload: UserBoards;
}
export interface ChosenBoardAction {
  type: typeof SET_CHOSEN_BOARD;
  payload: UserBoards;
}

export interface CurrentCardsAction {
  type: typeof SET_CURRENT_CARDS;
  payload: CardInterface[];
}
