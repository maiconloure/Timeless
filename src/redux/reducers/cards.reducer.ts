/* eslint-disable @typescript-eslint/no-unused-vars */
import { CardAction } from '../actions/cards.actions';
import { CardState } from '../actions/interface.action';
import * as TYPE from '../actions/type.action';

const initialState: CardState = {
  cards: [],
};

const cards = (state = initialState, action: CardAction): CardState => {
  switch (action.type) {
    case TYPE.GET_CARDS:
      return { ...state, cards: action.payload };

    case TYPE.UPDATE_CARD:
      return {
        ...state,
        cards: [...state.cards.filter((card) => card.id !== action.payload.id), action.payload],
      };
    case TYPE.CREATE_CARD:
      console.log({ ...state, cards: [...state.cards, action.payload] });

      return { ...state, cards: [...state.cards, action.payload] };
    case TYPE.DELETE_CARD:
      return { ...state, cards: [...state.cards.filter((card) => card.id !== action.payload.id)] };
    default:
      return state;
  }
};

export default cards;
