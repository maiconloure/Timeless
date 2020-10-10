// /* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { EditBoardModal } from '../../components';
import {
  updateBoardAPI,
  getCardsAPI,
  createBoardAPI,
  deleteBoardAPI,
} from '../../redux/actions/boards.action';
import * as Interface from '../../redux/actions/interface.action';
import { RootStoreType } from '../../redux/store/store';
import { defaultBoard } from '../../utils/defaults-json-cards';

interface Props {
  showState: {
    showBoardModal: boolean;
    showEditModal: boolean;
    setShowBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowEditUser: React.Dispatch<React.SetStateAction<boolean>>;
  };
  selected: {
    selectedBoard: Interface.UserBoards | Interface.CreateUserBoards;
    setSelectedBoard: React.Dispatch<
      React.SetStateAction<Interface.UserBoards | Interface.CreateUserBoards>
    >;
  };
}

const ModalEditBoardContainer = ({
  selected: { selectedBoard, setSelectedBoard },
  showState: {
    showBoardModal,
    setShowBoardModal,
    showEditModal,
    setShowEditModal,
    setShowEditUser,
  },
}: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state: RootStoreType) => state.service.user);
  const token = useSelector((state: RootStoreType) => state.service.token);
  const [boardTitle, setBoardTitle] = useState('Título do Board');
  const [boardDescription, setBoardDescription] = useState('Descrição do Board');

  const handleReturnForm = () => {
    setBoardTitle('Título do Board');
    setBoardDescription('Descrição do Board');
    setShowEditModal(false);
  };

  const handlerSubmitForm = () => {
    if (JSON.stringify(selectedBoard) === JSON.stringify(defaultBoard)) {
      // dispatch(createBoardAPI(selectedBoard, token, user, history));
    } else {
      const newBoard: any = {
        ...selectedBoard,
        title: boardTitle,
        description: boardDescription,
      };
      // dispatch(updateBoardAPI({ token, board: newBoard, history }));
    }

    setBoardTitle('Título do Board');
    setBoardDescription('Descrição do Board');
    setShowEditModal(false);
  };

  const handlerCreateBoard = () => {
    setShowEditModal(true);
    setSelectedBoard(defaultBoard);
  };

  const handlerSelectBoard = (board: Interface.UserBoards) => {
    // dispatch(getCardsAPI(board, token, history));
    setShowBoardModal(false);
  };

  const handlerModifyBoard = (board: Interface.UserBoards) => {
    setBoardTitle(board.title);
    setBoardDescription(board.description);
    setSelectedBoard(board);
    setShowEditModal(true);
  };

  const handlerRemoveBoard = (board: Interface.UserBoards) => {
    // dispatch(deleteBoardAPI(board, token, history));
  };

  const handlerTitle = (event: any) => setBoardTitle(event);

  const handlerDescription = (event: any) => setBoardDescription(event);

  return (
    <EditBoardModal
      handlers={{
        handlerTitle,
        handlerDescription,
        handleReturnForm,
        handlerSubmitForm,
        handlerCreateBoard,
        handlerSelectBoard,
        handlerModifyBoard,
        handlerRemoveBoard,
      }}
      show={{ showBoardModal, setShowBoardModal, showEditModal }}
      editData={{ boardTitle, boardDescription }}
    />
  );
};

export default ModalEditBoardContainer;
