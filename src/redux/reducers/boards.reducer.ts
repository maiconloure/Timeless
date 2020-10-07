/* eslint-disable @typescript-eslint/no-unused-vars */
import { BoardsAction } from '../actions/boards.action';
import { BoardState } from '../actions/interface.action';
import * as TYPE from '../actions/type.action';

const initialState: BoardState = {
  boards: [],
  currentBoard: JSON.parse(
    localStorage.getItem('chosenBoard') ||
      `{
    "title": "",
    "description": "",
    "user": [],
    "userId": "",
    "id": ""
  }`
  ),
};

const boards = (state = initialState, action: BoardsAction): BoardState => {
  switch (action.type) {
    case TYPE.GET_BOARDS:
      return { ...state, boards: action.payload };

    case TYPE.UPDATE_BOARD:
      return {
        ...state,
        boards: [...state.boards.filter((board) => board.id !== action.payload.id), action.payload],
      };

    case TYPE.CLEAR_BOARD:
      return initialState;

    case TYPE.GET_CURRENT_BOARD:
      localStorage.setItem('chosenBoard', JSON.stringify(action.payload));
      return { ...state, currentBoard: action.payload };

    case TYPE.CREATE_BOARD:
      return { ...state, currentBoard: action.payload, boards: [...state.boards, action.payload] };

    case TYPE.DELETE_BOARD:
      return {
        ...state,
        boards: [...state.boards.filter((board) => board.id !== action.payload.id)],
      };

    default:
      return state;
  }
};

export default boards;
