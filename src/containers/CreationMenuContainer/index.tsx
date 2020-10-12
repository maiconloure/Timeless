/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CreationMenu } from '../../components';
import { createCardAPI } from '../../redux/actions/cards.action';
import { getNewAction } from '../../redux/actions/feed.action';
import { RootStoreType } from '../../redux/store/store';
import { defaultCard } from '../../utils/defaults-json-cards';
import { CreationMenuContainerProps } from '../ContainerInterface';

const initialSelectCard = {
  group: false,
  removeCard: false,
  fastCard: false,
  addText: false,
  connect: false,
  pin: false,
  blockedCard: false,
};

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
    setSelectedCard({ ...initialSelectCard, group: !selectedCard.group });

    dispatch(getNewAction(`${user.name} acabou de criar um grupo de cartões.`));
  };
  const createCardButton = () => {
    dispatch(getNewAction(`${user.name} acabou de criar um cartão.`));
    dispatch(createCardAPI({ currentBoard, token, user, card: defaultCard, history }));
  };
  const createFasterCardButton = () => {
    setSelectedCard({ ...initialSelectCard, fastCard: !selectedCard.fastCard });
  };
  const removeCardButton = () => {
    setSelectedCard({ ...initialSelectCard, removeCard: !selectedCard.removeCard });
  };
  const createTextButton = () => {
    setSelectedCard({ ...initialSelectCard, addText: !selectedCard.addText });

    dispatch(getNewAction(`${user.name} acabou de criar um texto.`));
  };
  const connectArrowButton = () => {
    setSelectedCard({ ...initialSelectCard, connect: !selectedCard.connect });

    dispatch(getNewAction(` ${user.name} acabou de fazer um ligação.`));
  };
  const pinCardButton = () => {
    setSelectedCard({ ...initialSelectCard, pin: !selectedCard.pin });

    // dispatch(getNewAction(`${user.name} acabou de seguir um cartão.`));
  };
  const blockCardButton = () => {
    setSelectedCard({ ...initialSelectCard, blockedCard: !selectedCard.blockedCard });
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
