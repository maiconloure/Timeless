import { CreationMenu } from 'components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defaultCard } from 'utils';

import { updateBoardAPI } from '../../redux/actions/boards.action';
import { createCardAPI } from '../../redux/actions/cards.action';
import { RootStoreType } from '../../redux/store/store';
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
  const random = () => Math.random() * (500 - 100) + 100;
  const cards = useSelector((state: RootStoreType) => state.cards.cards);
  defaultCard.position = {
    x: random() + 300,
    y: random(),
  };

  const groupButton = () => {
    toggleMenu();
    setSelectedCard({ ...initialSelectCard, group: !selectedCard.group });
    dispatch(
      updateBoardAPI({
        board: {
          ...currentBoard,
          data: {
            ...currentBoard.data,
            notifications: [
              `${user.name} criou um novo grupo.`,
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
    dispatch(
      updateBoardAPI({
        board: {
          ...currentBoard,
          data: {
            ...currentBoard.data,
            notifications: [`${user.name} criou um novo card.`, ...currentBoard.data.notifications],
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
    setSelectedCard({ ...initialSelectCard, addText: !selectedCard.addText });
    dispatch(
      updateBoardAPI({
        board: {
          ...currentBoard,
          data: {
            ...currentBoard.data,
            notifications: [
              `${user.name} criou um novo texto.`,
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
    if (lines.length >= 1) {
      const remLines = [...lines];
      remLines.pop();
      setLines([...remLines]);
      dispatch(
        updateBoardAPI({
          board: {
            ...currentBoard,
            connections: [...remLines],
            data: {
              ...currentBoard.data,
              notifications: [
                `${user.name} desfez sua última ligação.`,
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
      cards={cards}
    />
  );
};

export default CreationMenuContainer;
