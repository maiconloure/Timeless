/* eslint-disable @typescript-eslint/no-unused-vars */
import { defaultBoard } from '../../utils/defaults-json-cards';
import { BoardsAction } from '../actions/boards.action';
import { BoardState } from '../actions/interface.action';
import * as TYPE from '../actions/type.action';

const initialState: BoardState = {
  boards: [],
  currentBoard: JSON.parse(localStorage.getItem('chosenBoard') || JSON.stringify(defaultBoard)),
};
const sortCards = (a: any, b: any) => a.id - b.id;

const boards = (state = initialState, action: BoardsAction): BoardState => {
  switch (action.type) {
    case TYPE.GET_BOARDS:
      if (!localStorage.getItem('chosenBoard') && action.payload[0]) {
        localStorage.setItem('chosenBoard', JSON.stringify(action.payload[0]));
      }
      return {
        ...state,
        boards: action.payload.sort(sortCards),
        currentBoard: JSON.parse(localStorage.getItem('chosenBoard') || ''),
      };

    case TYPE.UPDATE_BOARD:
      return {
        ...state,
        boards: [
          ...state.boards.filter((board) => board.id !== action.payload.id),
          action.payload,
        ].sort(sortCards),
        currentBoard: action.payload,
      };

    case TYPE.GET_CURRENT_BOARD:
      localStorage.setItem('chosenBoard', JSON.stringify(action.payload));
      return { ...state, currentBoard: action.payload };

    case TYPE.CREATE_BOARD:
      return {
        ...state,
        currentBoard: action.payload,
        boards: [...state.boards, action.payload].sort(sortCards),
      };

    case TYPE.DELETE_BOARD:
      return {
        ...state,
        boards: [...state.boards.filter((board) => board.id !== action.payload.id)].sort(sortCards),
      };

    case TYPE.CLEAR_BOARD:
      localStorage.clear();
      return initialState;

    default:
      return state;
  }
};

export default boards;
