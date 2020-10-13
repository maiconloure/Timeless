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
    dispatch(
      updateBoardAPI({
        board: {
          ...currentBoard,
          data: {
            ...currentBoard.data,
            notifications: [
              `${user.name} acabou de fazer um ligação.`,
              ...currentBoard.data.notifications,
            ],
          },
        },
        token,
        history,
      })
    );
  };

  const pinCardButton = () => {
    setSelectedCard({ ...initialSelectCard, pin: !selectedCard.pin });
    // dispatch(
    //   updateBoardAPI({
    //     board: {
    //       ...currentBoard,
    //       data: {
    //         ...currentBoard.data,
    //         notifications: [
    //           `${user.name} acabou de seguir um cartão.`,
    //           ...currentBoard.data.notifications,
    //         ],
    //       },
    //     },
    //     token,
    //     history,
    //   })
    // );
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
