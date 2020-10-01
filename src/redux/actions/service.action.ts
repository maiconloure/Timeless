import { ThunkAction } from 'redux-thunk';

import api from '../../services/api';
import { RootStoreType } from '../store/store';
import {
  LoginAction,
  PropsLoginAction,
  PropsRequestLogin,
  PropsRegisterUser,
} from './interface.action';
import { LOGIN } from './type.action';

export const requestLogin = ({
  email,
  password,
}: PropsRequestLogin): ThunkAction<void, RootStoreType, unknown, LoginAction> => (dispatch) => {
  api
    .post('/login', {
      email,
      password,
    })
    .then((response) => {
      if (response.status !== 200) {
        console.error(`requestLogin =>> ERROR: ${response.data} ${response.status}`);
      } else {
        console.warn(`requestLogin =>> Status: ${response.status}`);
        dispatch(
          loginAction({
            status: response.status,
            token: response.data.accessToken,
          })
        );
      }
    })
    .catch((error) =>
      console.error(`requestLogin =>> ERROR: ${error.response.data} ${error.response.status}`)
    );

  // descriptografar token
  // pegar informacoes do usuario
};

export const registerUser = ({
  email,
  password,
}: PropsRegisterUser): ThunkAction<void, RootStoreType, unknown, LoginAction> => (dispatch) => {
  api
    .post('/register', { email, password })
    .then((response) => {
      if (response.status !== 201) {
        console.error(`registerUser =>> ERROR: ${response.data} ${response.status}`);
      } else {
        console.warn(`registerUser =>> Status: ${response.status}`);
        dispatch(
          loginAction({
            status: response.status,
            token: response.data.accessToken,
          })
        );
      }
    })
    .catch((error) =>
      console.error(`registerUser =>> ERROR: ${error.response.data} ${error.response.status}`)
    );

  // descriptografar token
  // pegar informacoes do usuario
};

const loginAction = ({ status, token }: PropsLoginAction): LoginAction => ({
  type: LOGIN,
  payload: { status, token },
});

export type ServiceAction = LoginAction;
