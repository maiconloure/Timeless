import { LOGIN } from './type.action';

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
      id: number;
      name: string;
    };
    status: number;
    token: string;
  };
}

export interface PropsLoginAction {
  user: {
    email: string;
    id: number;
    name: string;
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
