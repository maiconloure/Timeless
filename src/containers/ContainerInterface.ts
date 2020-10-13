import { History, LocationState } from 'history';
import React, { useEffect, ChangeEvent } from 'react';

import { CardInterface } from '../redux/actions/interface.action';

export interface LandingContainerProps {
  history: History<LocationState>;
}

export interface BacklogCardProps {
  usersArray?: { image: string; user: string }[];
  data: {
    showEditCard: boolean;
    setShowEditCard: React.Dispatch<React.SetStateAction<boolean>> | ((props: boolean) => void);
    currentCard: object;
  };
}

export interface BoardContainerProps {
  history: History<LocationState>;
}

export interface CreationMenuContainerProps {
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
  selectedCard: {
    group: boolean;
    removeCard: boolean;
    fastCard: boolean;
    addText: boolean;
    connect: boolean;
    pin: boolean;
    blockedCard: boolean;
  };
  className: string;
  history: History<LocationState>;
}

export interface DefaultCardProps {
  card: CardInterface;
  showEditCard: boolean;
  selectedCard: {
    removeCard: boolean;
    fastCard: boolean;
    blockedCard: boolean;
  };
  setCurrentCard: React.Dispatch<React.SetStateAction<object>>;
  setShowEditCard: React.Dispatch<React.SetStateAction<boolean>>;
  history: History<LocationState>;
  className: string;
}

export interface EditBoardModalContainerProps {
  data: {
    showEditModal: boolean;
    showBoardModal: boolean;
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
  history: History<LocationState>;
}

export interface EditUserModalContainerProps {
  data: {
    showEditUser: boolean;
    setShowEditUser: React.Dispatch<React.SetStateAction<boolean>>;
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
  history: History<LocationState>;
}

export interface FixedMenuContainerProps {
  data: {
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
