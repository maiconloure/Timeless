import { LOGIN } from './type.action';

// INTERFACE TO LOGIN

export interface LoginAction {
  type: typeof LOGIN;
  payload: {
    status: number;
    token: string;
  };
}

export interface PropsLoginAction {
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
