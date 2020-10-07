/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt_decode from 'jwt-decode';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import api from '../../services/api';
import { RootStoreType } from '../store/store';
import * as Interface from './interface.action';
import * as TYPE from './type.action';

export const requestLogin = ({
  email,
  password,
}: Interface.PropsRequestLogin): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.LoginAction
> => (dispatch) => {
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
  name,
  email,
  password,
}: Interface.PropsRegisterUser): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.LoginAction
> => (dispatch) => {
  api
    .post('/register', { name, email, password })
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

const getUser = (
  data: Interface.PropsResponseRegister
): ThunkAction<void, RootStoreType, unknown, Interface.LoginAction> => async (dispatch) => {
  const decodedToken: Interface.DecodeToken = await jwt_decode(data.data.accessToken);

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
              name: response.data.name,
              email: response.data.email,
              id: response.data.id,
              image: response.data.image_url,
              about: response.data.about,
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

const loginAction = ({ user, status, token }: Interface.PropsLogin): Interface.LoginAction => ({
  type: TYPE.LOGIN,
  payload: { user, status, token },
});

export const signOut = () => (dispatch: Dispatch) => {
  dispatch(clearBoard());
  dispatch(logout());
};

const clearBoard = (): Interface.ClearBoardAction => ({
  type: TYPE.CLEAR_BOARD,
});

const logout = (): Interface.LogoutAction => ({
  type: TYPE.LOGOUT,
});

export type ServiceAction = Interface.LoginAction | Interface.LogoutAction;
