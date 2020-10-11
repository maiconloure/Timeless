/* eslint-disable @typescript-eslint/no-unused-vars */
import { History, LocationState } from 'history';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CreationMenu from '../../components/creation-menu';
import { createCardAPI } from '../../redux/actions/cards.action';
import { getNewAction } from '../../redux/actions/feed.action';
import { RootStoreType } from '../../redux/store/store';
import { defaultCard } from '../../utils/defaults-json-cards';

const initialSelectCard = {
  removeCard: false,
  fastCard: false,
};

interface CreationMenuContainerProps {
  setSelectedCard: React.Dispatch<
    React.SetStateAction<{
      removeCard: boolean;
      fastCard: boolean;
    }>
  >;
  selectedCard: {
    removeCard: boolean;
    fastCard: boolean;
  };
  className: string;
  history: History<LocationState>;
}

const CreationMenuContainer = ({
  setSelectedCard,
  selectedCard,
  className,
  history,
}: CreationMenuContainerProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStoreType) => state.service.user);
  const token = useSelector((state: RootStoreType) => state.service.token);
  const currentBoard = useSelector((state: RootStoreType) => state.boards.currentBoard);
  const random = () => Math.random() * (600 - 200) + 200;
  defaultCard.position = {
    x: random() + 400,
    y: random(),
  };

  const groupButton = () => {
    console.log('groupButton');
    dispatch(getNewAction(`${user.name} acabou de criar um grupo de cartões.`));
  };
  const createCardButton = () => {
    console.log('createCardButton');
    dispatch(getNewAction(`${user.name} acabou de criar um cartão.`));
    dispatch(createCardAPI({ currentBoard, token, user, card: defaultCard, history }));
  };
  const createFasterCardButton = () => {
    console.log('createFasterCardButton');
    setSelectedCard({ ...initialSelectCard, fastCard: !selectedCard.fastCard });
  };
  const removeCardButton = () => {
    console.log('removeCardButton');
    setSelectedCard({ ...initialSelectCard, removeCard: !selectedCard.removeCard });
  };
  const createTextButton = () => {
    console.log('createTextButton');
    dispatch(getNewAction(`${user.name} acabou de criar um texto.`));
  };
  const connectArrowButton = () => {
    console.log('conectArrowButton');
    dispatch(getNewAction(` ${user.name} acabou de fazer um ligação.`));
  };
  const pinCardButton = () => {
    console.log('pinCardButton');
    // dispatch(getNewAction(`${user.name} acabou de seguir um cartão.`));
  };
  const blockCardButton = () => {
    console.log('blockCardButton');
    // dispatch(getNewAction(` ${user.name} bloqueou um cartão.`));
  };

  return (
    <CreationMenu
      selectedCard={selectedCard}
      groupButton={groupButton}
      createCardButton={createCardButton}
      createFasterCardButton={createFasterCardButton}
      removeCardButton={removeCardButton}
      createTextButton={createTextButton}
      connectArrowButton={connectArrowButton}
      pinCardButton={pinCardButton}
      blockCardButton={blockCardButton}
      className={className}
    />
  );
};

export default CreationMenuContainer;
