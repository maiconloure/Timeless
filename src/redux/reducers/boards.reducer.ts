import { BoardsAction } from '../actions/boards.action';
import { SET_BOARDS } from '../actions/type.action';

const initialState = {
  boards: [],
};

const boards = (state = initialState, action: BoardsAction) => {
  switch (action.type) {
    case SET_BOARDS:
      return { ...state, boards: action.payload };
    default:
      return state;
  }
};
export default boards;
