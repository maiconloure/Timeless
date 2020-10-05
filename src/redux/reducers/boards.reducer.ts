/* eslint-disable @typescript-eslint/no-unused-vars */
import { BoardsAction } from '../actions/boards.action';
import { UserBoards, CardInterface } from '../actions/interface.action';
import {
  SET_BOARDS,
  CLEAR_BOARD,
  UPDATE_BOARD,
  SET_CHOSEN_BOARD,
  SET_CURRENT_CARDS,
} from '../actions/type.action';

const initialState: { boards: UserBoards[]; chosenBoard: UserBoards; cards: CardInterface[] } = {
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

const boards = (
  state = initialState,
  action: BoardsAction
): { boards: UserBoards[]; chosenBoard: UserBoards; cards: CardInterface[] } => {
  switch (action.type) {
    case SET_BOARDS:
      return { ...state, boards: action.payload };

    case UPDATE_BOARD:
      return {
        ...state,
        boards: [...state.boards.filter((board) => board.id !== action.payload.id), action.payload],
      };

    case CLEAR_BOARD:
      return initialState;

    case SET_CHOSEN_BOARD:
      localStorage.setItem('chosenBoard', JSON.stringify(action.payload));
      return { ...state, chosenBoard: action.payload };

    case SET_CURRENT_CARDS:
      return { ...state, cards: action.payload };
    default:
      return state;
  }
};

export default boards;
