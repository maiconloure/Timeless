/* eslint-disable @typescript-eslint/no-unused-vars */
import { History, LocationState } from 'history';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

interface EditBoardModalContainerProps {
  showBoardModal: boolean;
  showEditModal: boolean;
  setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  history: History<LocationState>;
}

const EditBoardModalContainer = ({
  showBoardModal,
  showEditModal,
  setShowEditModal,
  setShowBoardModal,
  history,
}: EditBoardModalContainerProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStoreType) => state.service.user);
  const token = useSelector((state: RootStoreType) => state.service.token);
  const boards = useSelector((state: RootStoreType) => state.boards.boards);

  const [boardTitle, setBoardTitle] = useState('Título do Board');
  const [boardDescription, setBoardDescription] = useState('Descrição do Board');
  const [selectedBoard, setSelectedBoard] = useState<
    Interface.UserBoards | Interface.CreateUserBoards
  >(defaultBoard);

  const handleReturnForm = () => {
    setBoardTitle('Título do Board');
    setBoardDescription('Descrição do Board');
    setShowEditModal(false);
  };

  const handlerSubmitForm = () => {
    if (JSON.stringify(selectedBoard) === JSON.stringify(defaultBoard)) {
      dispatch(createBoardAPI(selectedBoard, token, user, history));
    } else {
      const newBoard: any = {
        ...selectedBoard,
        title: boardTitle,
        description: boardDescription,
      };
      dispatch(updateBoardAPI({ token, board: newBoard, history }));
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
    dispatch(getCardsAPI(board, token, history));
    setShowBoardModal(false);
  };

  const handlerModifyBoard = (board: Interface.UserBoards) => {
    setBoardTitle(board.title);
    setBoardDescription(board.description);
    setSelectedBoard(board);
    setShowEditModal(true);
  };

  const handlerRemoveBoard = (board: Interface.UserBoards) => {
    dispatch(deleteBoardAPI(board, token, history));
  };

  const handlerTitle = (text: string) => setBoardTitle(text);

  const handlerDescription = (text: string) => setBoardDescription(text);

  return (
    <EditBoardModal
      boards={boards}
      values={{ boardTitle, boardDescription }}
      showModal={{
        showEditModal,
        showBoardModal,
        setShowEditModal,
        setShowBoardModal,
      }}
      handlers={{
        handlerTitle,
        handlerDescription,
        handleReturnForm,
        handlerModifyBoard,
        handlerRemoveBoard,
        handlerSelectBoard,
        handlerCreateBoard,
        handlerSubmitForm,
      }}
    />
  );
};

export default EditBoardModalContainer;
