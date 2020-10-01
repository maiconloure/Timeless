import { ThunkAction } from 'redux-thunk';

import api from '../../services/api';
import { DispatchType, RootStoreType } from '../store/store';
import { LoginAction, PropsLoginAction, PropsRequestLogin } from './interface.action';
import { LOGIN } from './type.action';

export const requestLogin = ({
  email,
  password,
}: PropsRequestLogin): ThunkAction<void, RootStoreType, unknown, LoginAction> => (
  dispatch: DispatchType
) => {
  api
    .post('/login', {
      email,
      password,
    })
    .then((response) => {
      if (response.status !== 200) {
        console.error(response);
      }
      console.warn('requestLogin =>> Statues: ', response.status);
      dispatch(loginAction({ status: response.status, token: response.data.accessToken }));
    })
    .catch((error) => console.error('requestLogin =>> ERROR:', error));

  //descriptografar token
  // fazer pegar informacoes do usuario
};

const loginAction = ({ status, token }: PropsLoginAction): LoginAction => ({
  type: LOGIN,
  payload: { status, token },
});

export type ServiceAction = LoginAction;
