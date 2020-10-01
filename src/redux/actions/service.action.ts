/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt_decode from 'jwt-decode';
import { ThunkAction } from 'redux-thunk';

import api from '../../services/api';
import { RootStoreType } from '../store';
import {
  LoginAction,
  PropsLoginAction,
  PropsRequestLogin,
  PropsRegisterUser,
  DecodeTokenType,
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
        dispatch(getUser(response));
      }
    })
    .catch((error) =>
      console.error(`requestLogin =>> ERROR: ${error.response.data} ${error.response.status}`)
    );
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
        dispatch(getUser(response));
      }
    })
    .catch((error) =>
      console.error(`registerUser =>> ERROR: ${error.response.data} ${error.response.status}`)
    );
};

const getUser = (data: any): ThunkAction<void, RootStoreType, unknown, LoginAction> => async (
  dispatch
) => {
  const decodedToken: DecodeTokenType = await jwt_decode(data.data.accessToken);

  const headers = {
    headers: {
      Authorization: 'Bearer ' + data.data.accessToken,
    },
  };

  api
    .get(`/users/${decodedToken.sub}`, headers)
    .then((response) => {
      if (response.status !== 200) {
        console.error(`getUser =>> ERROR: ${response.data} ${response.status}`);
      } else {
        console.warn(`getUser =>> Status: ${response.status}`);

        dispatch(
          loginAction({
            user: {
              email: response.data.email,
              id: response.data.id,
              name: response.data.name,
            },
            status: data.status,
            token: data.data.accessToken,
          })
        );
      }
    })
    .catch((error) =>
      console.error(`getUser =>> ERROR: ${error.response.data} ${error.response.status}`)
    );
};

const loginAction = ({ user, status, token }: PropsLoginAction): LoginAction => ({
  type: LOGIN,
  payload: { user, status, token },
});

export type ServiceAction = LoginAction;
