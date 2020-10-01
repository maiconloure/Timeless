import { ServiceAction } from '../actions/service.action';
import { LOGIN } from '../actions/type.action';

const initialState = {
  user: '',
  token: '',
};

const service = (state = initialState, action: ServiceAction) => {
  switch (action.type) {
    case LOGIN:
      return state;
    default:
      return state;
  }
};

export default service;
