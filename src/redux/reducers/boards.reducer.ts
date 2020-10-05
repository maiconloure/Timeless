/* eslint-disable @typescript-eslint/no-unused-vars */
import { BoardsAction } from '../actions/boards.action';
import { BoardState } from '../actions/interface.action';
import * as TYPE from '../actions/type.action';

const initialState: BoardState = {
  boards: [],
  chosenBoard: JSON.parse(
    localStorage.getItem('chosenBoard') ||
      `{
    "title": "",
    "description": "",
    "user": [],
    "userId": "",
    "id": ""
  }`
  ),
  cards: [],
};

const boards = (state = initialState, action: BoardsAction): BoardState => {
  switch (action.type) {
    case TYPE.SET_BOARDS:
      return { ...state, boards: action.payload };

    case TYPE.UPDATE_BOARD:
      return {
        ...state,
        boards: [...state.boards.filter((board) => board.id !== action.payload.id), action.payload],
      };

    case TYPE.CLEAR_BOARD:
      return initialState;

    case TYPE.SET_CHOSEN_BOARD:
      localStorage.setItem('chosenBoard', JSON.stringify(action.payload));
      return { ...state, chosenBoard: action.payload };

    case TYPE.SET_CURRENT_CARDS:
      return { ...state, cards: action.payload };
    default:
      return state;
  }
};

export default boards;
