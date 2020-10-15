/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CreationMenu } from '../../components';
import { updateBoardAPI } from '../../redux/actions/boards.action';
import { createCardAPI } from '../../redux/actions/cards.action';
import { RootStoreType } from '../../redux/store/store';
import { defaultCard } from '../../utils/defaults-json-cards';
import { CreationMenuContainerProps } from '../ContainerInterface';

const initialSelectCard = {
  group: false,
  removeCard: false,
  fastCard: false,
  addText: false,
  connect: false,
  followedCard: false,
  blockedCard: false,
};

const CreationMenuContainer = ({
  setSelectedCard,
  selectedCard,
  className,
  history,
  lines,
  setLines,
  toggleMenu,
}: CreationMenuContainerProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStoreType) => state.service.user);
  const token = useSelector((state: RootStoreType) => state.service.token);
  const currentBoard = useSelector((state: RootStoreType) => state.boards.currentBoard);
  const random = () => Math.random() * (600 - 200) + 200;

  defaultCard.position = {
    x: random() + 300,
    y: random(),
  };

  const groupButton = () => {
    toggleMenu();
    const date = new Date();
    const curr_hour = `${date
      .getHours()
      .toString()
      .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

    setSelectedCard({ ...initialSelectCard, group: !selectedCard.group });

    dispatch(
      updateBoardAPI({
        board: {
          ...currentBoard,
          data: {
            ...currentBoard.data,
            notifications: [
              `${user.name} criou um novo grupo - ${curr_hour}`,
              ...currentBoard.data.notifications,
            ],
          },
        },
        token,
        history,
      })
    );
  };

  const createCardButton = () => {
    const date = new Date();
    const curr_hour = `${date
      .getHours()
      .toString()
      .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

    dispatch(
      updateBoardAPI({
        board: {
          ...currentBoard,
          data: {
            ...currentBoard.data,
            notifications: [
              `${user.name} criou um novo card, ${curr_hour}`,
              ...currentBoard.data.notifications,
            ],
          },
        },
        token,
        history,
      })
    );

    dispatch(createCardAPI({ currentBoard, token, user, card: defaultCard, history }));
  };

  const createFasterCardButton = () => {
    toggleMenu();
    setSelectedCard({ ...initialSelectCard, fastCard: !selectedCard.fastCard });
  };

  const removeCardButton = () => {
    toggleMenu();
    setSelectedCard({ ...initialSelectCard, removeCard: !selectedCard.removeCard });
  };

  const createTextButton = () => {
    toggleMenu();
    const date = new Date();
    const curr_hour = `${date
      .getHours()
      .toString()
      .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

    setSelectedCard({ ...initialSelectCard, addText: !selectedCard.addText });

    dispatch(
      updateBoardAPI({
        board: {
          ...currentBoard,
          data: {
            ...currentBoard.data,
            notifications: [
              `${user.name} criou um novo texto, ${curr_hour}`,
              ...currentBoard.data.notifications,
            ],
          },
        },
        token,
        history,
      })
    );
  };

  const connectArrowButton = () => {
    toggleMenu();
    setSelectedCard({ ...initialSelectCard, connect: !selectedCard.connect });
  };

  const desconnectArrowButton = () => {
    const date = new Date();
    const curr_hour = `${date
      .getHours()
      .toString()
      .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

    if (lines.length >= 1) {
      lines.pop();
      setLines(lines);
      dispatch(
        updateBoardAPI({
          board: {
            ...currentBoard,
            data: {
              ...currentBoard.data,
              notifications: [
                `${user.name} desfez sua última ligação, ${curr_hour}`,
                ...currentBoard.data.notifications,
              ],
            },
          },
          token,
          history,
        })
      );
    }
  };

  const pinCardButton = () => {
    // toggleMenu();
    setSelectedCard({ ...initialSelectCard, followedCard: !selectedCard.followedCard });
  };

  const blockCardButton = () => {
    toggleMenu();
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
      desconnectArrowButton={desconnectArrowButton}
      pinCardButton={pinCardButton}
      blockCardButton={blockCardButton}
      className={className}
    />
  );
};

export default CreationMenuContainer;
