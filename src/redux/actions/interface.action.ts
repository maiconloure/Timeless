import * as TYPE from './type.action';

// DECODE TOKEN TYPES

export interface DecodeToken {
  email: string;
  exp: number;
  iat: number;
  sub: string;
}

// INTERFACE TO LOGIN

export interface LoginAction {
  type: typeof TYPE.LOGIN;
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
  type: typeof TYPE.LOGOUT;
}

// INTERFACE CLEAR_BOARD

export interface ClearBoardAction {
  type: typeof TYPE.CLEAR_BOARD;
}

// INTERFACE TO USERS BOARDS

export interface PropsGetUserBoards {
  user: {
    email: string;
    name: string;
    id: number;
  };
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
  type: typeof TYPE.SET_BOARDS;
  payload: UserBoards[];
}

// INTERFACE UPDATE BOARD

export interface UpdateBoardAction {
  type: typeof TYPE.UPDATE_BOARD;
  payload: UserBoards;
}
export interface ChosenBoardAction {
  type: typeof TYPE.SET_CHOSEN_BOARD;
  payload: UserBoards;
}

export interface CurrentCardsAction {
  type: typeof TYPE.SET_CURRENT_CARDS;
  payload: CardInterface[];
}

// REDUX INTERFACES

export interface BoardState {
  boards: UserBoards[];
  chosenBoard: UserBoards;
  cards: CardInterface[];
}
