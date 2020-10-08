/* eslint-disable @typescript-eslint/no-unused-vars */
import { feedAction } from '../actions/feed.action';
import * as TYPE from '../actions/type.action';

export interface feedInterface {
  actions: string;
}
export interface feedProps {
  actions: string[];
}

const defaultState: feedProps = {
  actions: ['Está muito parado por aqui... crie novos cartões!'],
};

const feed = (state = defaultState, action: feedAction): feedProps => {
  switch (action.type) {
    case TYPE.NEW_ACTION:
      return { ...state, actions: [action.payload, ...state.actions] };

    default:
      return state;
  }
};

export default feed;
