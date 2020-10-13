import jwt_decode from 'jwt-decode';
import { ThunkAction } from 'redux-thunk';

import api from '../../services/api';
import { RootStoreType } from '../store/store';
import * as Interface from './interface.action';
import * as TYPE from './type.action';

const createHeader = (token: string) => ({
  headers: {
    Authorization: 'Bearer ' + token,
  },
});

export const requestLogin = ({
  email,
  password,
}: Interface.PropsRequestLogin): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.LoginAction | Interface.UpdateStatusAction
> => (dispatch) => {
  api
    .post('/login', {
      email,
      password,
    })

    .then((response) => {
      dispatch(updateStatus(response.status));
      if (response.status === 200) {
        dispatch(getUser(response));
      }
    })
    .catch((error) => {
      dispatch(updateStatus(error.response.status));
    });
};

export const registerUser = ({
  name,
  email,
  password,
}: Interface.PropsRegisterUser): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.LoginAction | Interface.UpdateStatusAction
> => (dispatch) => {
  api
    .post('/register', { name, email, password })
    .then((response) => {
      dispatch(updateStatus(response.status));
      if (response.status !== 201) {
      } else {
        dispatch(getUser(response));
      }
    })
    .catch((error) => {
      dispatch(updateStatus(error.response.status));
    });
};

const getUser = (
  data: Interface.PropsResponseRegister
): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.LoginAction | Interface.UpdateStatusAction
> => async (dispatch) => {
  const decodedToken: Interface.DecodeToken = await jwt_decode(data.data.accessToken);

  api
    .get(`/users/${decodedToken.sub}`, createHeader(data.data.accessToken))
    .then((response) => {
      dispatch(updateStatus(response.status));
      if (response.status === 200) {
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
    .catch((error) => {
      dispatch(updateStatus(error.response.status));
    });
};

export const updateUserAPI = ({
  user,
  token,
}: Interface.PropsGetUserBoards): ThunkAction<
  void,
  RootStoreType,
  unknown,
  Interface.UpdateUserAction | Interface.UpdateStatusAction
> => (dispatch) => {
  dispatch(updateUser(user));
  api
    .patch(`/users/${user.id}`, user, createHeader(token))
    .then((response) => {
      dispatch(updateStatus(response.status));
    })
    .catch((error) => {
      dispatch(updateStatus(error.response.status));
    });
};

const updateUser = (user: Interface.UserInterface): Interface.UpdateUserAction => ({
  type: TYPE.UPDATE_USER,
  payload: user,
});

const loginAction = ({ user, status, token }: Interface.PropsLogin): Interface.LoginAction => ({
  type: TYPE.LOGIN,
  payload: { user, status, token },
});

export const logout = (): Interface.LogoutAction => ({
  type: TYPE.LOGOUT,
});

export const updateStatus = (status: number | string): Interface.UpdateStatusAction => ({
  type: TYPE.UPDATE_STATUS,
  payload: status,
});

export type ServiceAction =
  | Interface.LoginAction
  | Interface.LogoutAction
  | Interface.UpdateUserAction
  | Interface.UpdateStatusAction;
