// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ServiceAction } from '../actions/service.action';
import { LOGIN } from '../actions/type.action';

const initialState = JSON.parse(
  localStorage.getItem('service') ||
    `{
      "user": {
        "email": "",
        "name": "",
        "id": "0"
      },
      "status": "0",
      "token": ""
    }`
);

const service = (state = initialState, action: ServiceAction) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('service', JSON.stringify({ ...state, ...action.payload }));
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default service;
