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
  pinCardButton: () => void;
  blockCardButton: () => void;
  className: string;
}

export interface DefaultCardProps {
  card: Interface.CardInterface;
  user: Interface.UserInterface;
  showEditCard: boolean;
  setCurrentCard: React.Dispatch<React.SetStateAction<object>>;
  setShowEditCard: React.Dispatch<React.SetStateAction<boolean>>;
  onDragEndFunction: () => void;
  x: any;
  y: any;
  showWarning: boolean;
  setShowWarning: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCard: {
    removeCard: boolean;
    fastCard: boolean;
    blockedCard: boolean;
  };
  handleCheckBox: any;
  removeCard: any;
  creationCard: any;
  DoubleClick: any;
  className: string;
  blockCard: (res: boolean) => void;
}

export interface EditBoardModalProps {
  boards: Interface.UserBoards[];
  values: {
    boardTitle: any;
    boardDescription: any;
  };
  showModal: {
    showEditModal: boolean;
    showBoardModal: boolean;
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
  handlers: {
    handlerTitle: (event: any) => void;
    handlerDescription: (event: any) => void;
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
  handleUserName: (evt: any) => void;
  handleUserAbout: (evt: any) => void;
  handleUserImage: (evt: any) => void;
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
    handlerToggleBoard: () => any;
    handleToggleMenu: () => any;
  };
}
