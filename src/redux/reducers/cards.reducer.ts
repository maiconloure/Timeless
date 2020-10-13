import { CardAction } from '../actions/cards.action';
import { CardState, CardInterface } from '../actions/interface.action';
import * as TYPE from '../actions/type.action';

const initialState: CardState = {
  cards: [],
};

const sortCards = (a: any, b: any) => a.id - b.id;

const cards = (state = initialState, action: CardAction): CardState => {
  switch (action.type) {
    case TYPE.GET_CARDS:
      return { ...state, cards: action.payload.sort(sortCards) };

    case TYPE.UPDATE_CARD:
      return {
        ...state,
        cards: [
          ...state.cards.filter((card) => card.id !== action.payload.id),
          action.payload,
        ].sort(sortCards),
      };
    case TYPE.CREATE_CARD:
      return { ...state, cards: [...state.cards, action.payload].sort(sortCards) };

    case TYPE.DELETE_CARD:
      return {
        ...state,
        cards: [...state.cards.filter((card) => card.id !== action.payload.id)].sort(sortCards),
      };

    case TYPE.CLEAR_CARDS:
      return initialState;
    default:
      return state;
  }
};

export default cards;
