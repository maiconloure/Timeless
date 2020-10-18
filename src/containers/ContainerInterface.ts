import { History, LocationState } from 'history';
import React, { useEffect, ChangeEvent } from 'react';

import * as Interface from '../redux/actions/interface.action';

export interface LandingContainerProps {
  history: History<LocationState>;
}

export interface BacklogCardProps {
  usersArray?: { image: string; user: string }[];
  data: {
    showEditCard: boolean;
    setShowEditCard: React.Dispatch<React.SetStateAction<boolean>> | ((props: boolean) => void);
    currentCard: any;
    user: Interface.UserInterface;
  };
  lines: never[];
  setLines: React.Dispatch<React.SetStateAction<never[]>>;
  token: string;
  history: History<unknown>;
}

export interface BoardContainerProps {
  history: History<LocationState>;
}

export interface CreationMenuContainerProps {
  toggleMenu: () => void;
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
  selectedCard: {
    group: boolean;
    removeCard: boolean;
    fastCard: boolean;
    addText: boolean;
    connect: boolean;
    followedCard: boolean;
    blockedCard: boolean;
  };
  className: string;
  history: History<LocationState>;
  lines: object[];
  setLines: React.Dispatch<React.SetStateAction<any>>;
}

export interface DefaultCardProps {
  showMobileMenu?: boolean;
  card: Interface.CardInterface;
  showEditCard: boolean;
  selectedCard: {
    removeCard: boolean;
    fastCard: boolean;
    blockedCard: boolean;
    followedCard: boolean;
    connect: boolean;
  };
  setCurrentCard: React.Dispatch<React.SetStateAction<object>>;
  setShowEditCard: React.Dispatch<React.SetStateAction<boolean>>;
  history: History<LocationState>;
  className: string;
  id: string;
  forceRerender: () => void;
  lines: object[];
  setLines: React.Dispatch<React.SetStateAction<any>>;
  connection: {
    cardOne: boolean | number;
    setCardOne: React.Dispatch<React.SetStateAction<any>>;
    cardTwo: boolean | number;
    setCardTwo: React.Dispatch<React.SetStateAction<any>>;
    cardSelected: boolean;
    setCardSelected: React.Dispatch<React.SetStateAction<boolean>>;
    confirmConnection: boolean;
    setconfirmConnection: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

export interface EditBoardModalContainerProps {
  data: {
    showMobileMenu: boolean;
    showEditModal: boolean;
    showBoardModal: boolean;
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
  history: History<LocationState>;
  lines: object[];
  setLines: React.Dispatch<React.SetStateAction<any>>;
}

export interface EditUserModalContainerProps {
  data: {
    showMobileMenu: boolean;
    showEditUser: boolean;
    setShowEditUser: React.Dispatch<React.SetStateAction<boolean>>;
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
  history: History<LocationState>;
}

export interface FixedMenuContainerProps {
  data: {
    showEditUser: boolean;
    showMobileMenu?: boolean;
    showBoardModal: boolean;
    setShowEditUser: React.Dispatch<React.SetStateAction<boolean>>;
    setShowBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
  history: History<LocationState>;
}

export interface LoginContainerProps {
  handleError: (message: string) => void;
  windowSize: {
    width: number;
    height: number;
  };
  handleForm: boolean;
}

export interface RegisterContainerProps {
  handleError: (message: string) => void;
  windowSize: {
    width: number;
    height: number;
  };
  handleForm: boolean;
  setHandleForm: React.Dispatch<React.SetStateAction<boolean>>;
}
