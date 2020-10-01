import { ThunkAction } from 'redux-thunk';

import { DispatchType, RootStoreType } from '../store/store';
import { LOGIN } from './type.action';

interface LoginAction {
  type: typeof LOGIN;
  payload: object;
}

interface User {
  payload: object;
}

export const requestLogin = (): ThunkAction<void, RootStoreType, unknown, LoginAction> => (
  dispatch: DispatchType
) => {
  dispatch(loginAction());
};

const loginAction = (): LoginAction => ({
  type: LOGIN,
  payload: {},
});

export type ServiceAction = LoginAction;
