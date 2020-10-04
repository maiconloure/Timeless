/* eslint-disable @typescript-eslint/no-unused-vars */
import { BoardsAction } from '../actions/boards.action';
import { SET_BOARDS, CLEAR_BOARD } from '../actions/type.action';

const initialState = {
  boards: [],
};

const boards = (state = initialState, action: BoardsAction) => {
  switch (action.type) {
    case SET_BOARDS:
      return { ...state, boards: action.payload };

    case CLEAR_BOARD:
      return initialState;

    default:
      return state;
  }
};

export default boards;
