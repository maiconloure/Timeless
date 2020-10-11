/* eslint-disable @typescript-eslint/no-unused-vars */
import { PropsLogin } from '../actions/interface.action';
import { ServiceAction } from '../actions/service.action';
import * as TYPE from '../actions/type.action';

const initialState: PropsLogin = JSON.parse(
  localStorage.getItem('service') ||
    `{
      "user": {
        "email": "",
        "name": "",
        "about": "",
        "id": "0",
        "image_url": ""
      },
      "status": "0",
      "token": ""
    }`
);

const service = (state = initialState, action: ServiceAction): PropsLogin => {
  switch (action.type) {
    case TYPE.LOGIN:
      localStorage.setItem('service', JSON.stringify({ ...state, ...action.payload }));
      return { ...state, ...action.payload };

    case TYPE.LOGOUT:
      localStorage.clear();
      return initialState;

    case TYPE.UPDATE_USER:
      localStorage.setItem(
        'service',
        JSON.stringify({ ...state, user: action.payload } || initialState)
      );
      return { ...state, user: action.payload };

    case TYPE.UPDATE_STATUS:
      localStorage.setItem('status', JSON.stringify({ status: action.payload } || initialState));
      return { ...state, status: action.payload };

    default:
      return state;
  }
};

export default service;
