import { MotionValue } from 'framer-motion';
import { MouseEvent, ChangeEvent } from 'react';

import * as Interface from '../redux/actions/interface.action';

export interface CreationMenuProps {
  selectedCard: {
    removeCard: boolean;
    fastCard: boolean;
  };
  groupButton: () => void;
  createCardButton: () => void;
  createFasterCardButton: () => void;
  removeCardButton: () => void;
  createTextButton: () => void;
  connectArrowButton: () => void;
  desconnectArrowButton: () => void;
  pinCardButton: () => void;
  blockCardButton: () => void;
  className: string;
}

export interface DefaultCardProps {
  showMobileMenu?: boolean;
  card: Interface.CardInterface;
  user: Interface.UserInterface;
  showEditCard: boolean;
  setCurrentCard: React.Dispatch<React.SetStateAction<object>>;
  setShowEditCard: React.Dispatch<React.SetStateAction<boolean>>;
  onDragEndFunction: () => void;
  x: MotionValue<number>;
  y: MotionValue<number>;
  showWarning: boolean;
  setShowWarning: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCard: {
    removeCard: boolean;
    fastCard: boolean;
    blockedCard: boolean;
    followedCard: boolean;
    connect: boolean;
  };
  handleCheckBox: (evt: MouseEvent<HTMLInputElement>) => void;
  removeCard: () => void;
  creationCard: () => void;
  DoubleClick: () => void;
  className: string;
  id: string;
  blockCard: (res: boolean) => void;
  followCard: any;
  forceRerender: any;
  handleConnection: any;
  cardOne: any;
  cardTwo: any;
}

export interface EditBoardModalProps {
  boards: Interface.UserBoards[];
  values: {
    boardTitle: string;
    boardDescription: string;
  };
  showModal: {
    showEditModal: boolean;
    showBoardModal: boolean;
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
  handlers: {
    handlerTitle: (event: ChangeEvent<HTMLInputElement>) => void;
    handlerDescription: (event: ChangeEvent<HTMLInputElement>) => void;
    handleReturnForm: () => void;
    handlerModifyBoard: (board: Interface.UserBoards) => void;
    handlerRemoveBoard: (board: Interface.UserBoards) => void;
    handlerSelectBoard: (board: Interface.UserBoards) => void;
    handlerCreateBoard: () => void;
    handlerSubmitForm: () => void;
  };
}

export interface EditUserModalProps {
  showEditUser: boolean;
  setShowEditUser: React.Dispatch<React.SetStateAction<boolean>>;
  userName: string;
  userAbout: string;
  userImage: string;
  submitNotification: () => void;
  handleUserName: (evt: ChangeEvent<HTMLInputElement>) => void;
  handleUserAbout: (evt: ChangeEvent<HTMLInputElement>) => void;
  handleUserImage: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export interface FixedMenuProps {
  values: {
    user: Interface.UserInterface;
    currentBoard: Interface.UserBoards;
    toggleMenu: boolean;
  };
  handlers: {
    handleLogout: () => void;
    handlerSaveBoard: () => void;
    handleOpenEditProfile: () => void;
    handleOpenEditBoard: () => void;
    handlerToggleBoard: () => void;
    handleToggleMenu: () => void;
  };
}
