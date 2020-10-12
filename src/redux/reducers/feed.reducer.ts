import { feedAction } from '../actions/feed.action';
import * as TYPE from '../actions/type.action';

export interface feedInterface {
  actions: string;
}
export interface feedProps {
  actions: string[];
}

const defaultState: feedProps = {
  actions: ['Aqui aparecerá as novas atualizações do seu board!'],
};

const feed = (state = defaultState, action: feedAction): feedProps => {
  switch (action.type) {
    case TYPE.NEW_ACTION:
      return { ...state, actions: [action.payload, ...state.actions] };

    case TYPE.LOGOUT:
      return defaultState;

    default:
      return state;
  }
};

export default feed;
