import { LOGIN } from './type.action';

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
