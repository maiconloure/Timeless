/* eslint-disable @typescript-eslint/no-unused-vars */
import { History, LocationState } from 'history';
import React, { ChangeEvent } from 'react';
import Record, { DeepMap, FieldError } from 'react-hook-form';

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
  OnFinishLogin: (data: { email: string; password: string }) => void;
  windowSize: {
    width: number;
    height: number;
  };
  handleSubmit: any;
  errors: DeepMap<Record<string, any>, FieldError>;
  handleForm: boolean;
  handleChangeEmail: (evt: ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export interface RegisterProps {
  windowSize: {
    width: number;
    height: number;
  };
  handleForm: boolean;
  setHandleForm: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: any;
  OnFinishRegister: (data: { name: string; email: string; password: string }) => void;
  errors: DeepMap<Record<string, any>, FieldError>;
  handleChangeName: (evt: ChangeEvent<HTMLInputElement>) => void;
  handleChangeEmail: (evt: ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (evt: ChangeEvent<HTMLInputElement>) => void;
  switchText: any;
  setSwitchText: any;
}

export interface BoardProps {
  data: {
    windowSize?: {
      width: number;
      height: number;
    };
    showMobileMenu?: boolean;
    currentCard: any;
    showEditUser: boolean;
    showEditCard: boolean;
    showEditModal: boolean;
    showBoardModal: boolean;
    setCurrentCard: React.Dispatch<React.SetStateAction<object>>;
    setShowEditUser: React.Dispatch<React.SetStateAction<boolean>>;
    setShowEditCard: React.Dispatch<React.SetStateAction<boolean>>;
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
    toggleMenu: () => void;
    selectedCard: {
      group: boolean;
      removeCard: boolean;
      fastCard: boolean;
      addText: boolean;
      connect: boolean;
      followedCard: boolean;
      blockedCard: boolean;
    };
    setSelectedCard: React.Dispatch<
      React.SetStateAction<{
        group: boolean;
        removeCard: boolean;
        fastCard: boolean;
        addText: boolean;
        connect: boolean;
        followedCard: boolean;
        blockedCard: boolean;
      }>
    >;
  };
  connection: {
    cardOne: any;
    setCardOne: any;
    cardTwo: any;
    setCardTwo: any;
    cardSelected: any;
    setCardSelected: any;
    confirmConnection: any;
    setconfirmConnection: any;
  };
  values: {
    cards: CardInterface[];
    history: History<LocationState>;
  };
  forceRerender: any;
  lines: any;
  setLines: any;
  defProps: any;
  state: any;
  user: any;
  token: any;
  backgroundImage: any;
  setBackground: any;
}
