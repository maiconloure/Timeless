// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ServiceAction } from '../actions/service.action';
import { LOGIN } from '../actions/type.action';

const initialState = {
  user: {},
  status: 0,
  token: '',
};

const service = (state = initialState, action: ServiceAction) => {
  switch (action.type) {
    case LOGIN:
      console.log({ ...state, ...action.payload });

      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default service;
