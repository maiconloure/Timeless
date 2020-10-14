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
    dispatch(
      updateBoardAPI({
        board: {
          ...currentBoard,
          data: {
            ...currentBoard.data,
            notifications: [
              `${user.name} acabou de criar um grupo de cartões.`,
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
            notifications: [
              `${user.name} acabou de criar um cartão.`,
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
    setSelectedCard({ ...initialSelectCard, fastCard: !selectedCard.fastCard });
  };

  const removeCardButton = () => {
    setSelectedCard({ ...initialSelectCard, removeCard: !selectedCard.removeCard });
  };

  const createTextButton = () => {
    setSelectedCard({ ...initialSelectCard, addText: !selectedCard.addText });
    dispatch(
      updateBoardAPI({
        board: {
          ...currentBoard,
          data: {
            ...currentBoard.data,
            notifications: [
              `${user.name} acabou de criar um texto.`,
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
    setSelectedCard({ ...initialSelectCard, connect: !selectedCard.connect });
  };

  const desconnectArrowButton = () => {
    if (lines.length >= 1) {
      lines.pop()
      setLines(lines)
      dispatch(
        updateBoardAPI({
          board: {
            ...currentBoard,
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
    setSelectedCard({ ...initialSelectCard, followedCard: !selectedCard.followedCard });
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
      desconnectArrowButton={desconnectArrowButton}
      pinCardButton={pinCardButton}
      blockCardButton={blockCardButton}
      className={className}
    />
  );
};

export default CreationMenuContainer;
