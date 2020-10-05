// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PropsLogin } from '../actions/interface.action';
import { ServiceAction } from '../actions/service.action';
import { LOGIN, LOGOUT } from '../actions/type.action';
const initialState: PropsLogin = JSON.parse(
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

const service = (state = initialState, action: ServiceAction): PropsLogin => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('service', JSON.stringify({ ...state, ...action.payload }));
      return { ...state, ...action.payload };

    case LOGOUT:
      localStorage.clear();
      return initialState;

    default:
      return state;
  }
};

export default service;
