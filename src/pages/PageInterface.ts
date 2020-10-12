/* eslint-disable @typescript-eslint/no-unused-vars */
import { History, LocationState } from 'history';

import { CardInterface } from '../redux/actions/interface.action';

export interface LandingPageProps {
  currentFrame: string;
  setCurrentFrame: React.Dispatch<React.SetStateAction<string>>;
  handleError: (message: string) => void;
  windowSize: {
    width: number;
    height: number;
  };
  handleForm: boolean;
  setHandleForm: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface LoginProps {
  handleSubmit: any;
  OnFinishLogin: (data: any) => void;
  windowSize: {
    width: number;
    height: number;
  };
  errors: any;
  handleForm: boolean;
  handleChangeEmail: any;
  handleChangePassword: any;
}

export interface RegisterProps {
  windowSize: {
    width: number;
    height: number;
  };
  handleForm: boolean;
  setHandleForm: any;
  handleSubmit: any;
  OnFinishRegister: (data: any) => void;
  errors: any;
  handleChangeName: (evt: any) => void;
  handleChangeEmail: (evt: any) => void;
  handleChangePassword: (evt: any) => void;
}

export interface BoardProps {
  data: {
    currentCard: object;
    showEditUser: boolean;
    showEditCard: boolean;
    showEditModal: boolean;
    showBoardModal: boolean;
    setCurrentCard: React.Dispatch<React.SetStateAction<object>>;
    setShowEditUser: React.Dispatch<React.SetStateAction<boolean>>;
    setShowEditCard: React.Dispatch<React.SetStateAction<boolean>>;
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
    selectedCard: {
      group: boolean;
      removeCard: boolean;
      fastCard: boolean;
      addText: boolean;
      connect: boolean;
      pin: boolean;
      blockedCard: boolean;
    };
    setSelectedCard: React.Dispatch<
      React.SetStateAction<{
        group: boolean;
        removeCard: boolean;
        fastCard: boolean;
        addText: boolean;
        connect: boolean;
        pin: boolean;
        blockedCard: boolean;
      }>
    >;
  };
  values: {
    cards: CardInterface[];
    history: History<LocationState>;
  };
}
