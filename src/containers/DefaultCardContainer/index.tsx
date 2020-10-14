import { useMotionValue } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, CardMobile } from '../../components';
import { updateBoardAPI } from '../../redux/actions/boards.action';
import { deleteCardAPI, updateCardAPI } from '../../redux/actions/cards.action';
import { RootStoreType } from '../../redux/store/store';
import { fastCard } from '../../utils/defaults-json-cards';
import { DefaultCardProps } from '../ContainerInterface';

const DefaultCardContainer = ({
  card,
  showEditCard,
  showMobileMenu,
  setCurrentCard,
  setShowEditCard,
  selectedCard,
  history,
  className,
  id,
  forceRerender,
}: DefaultCardProps) => {
  const dispatch = useDispatch();
  const x = useMotionValue(card.position.x);
  const y = useMotionValue(card.position.y);
  const token = useSelector((state: RootStoreType) => state.service.token);
  const user = useSelector((state: RootStoreType) => state.service.user);
  const cards = useSelector((state: RootStoreType) => state.cards.cards);
  const currentBoard = useSelector((state: RootStoreType) => state.boards.currentBoard);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    x.set(card.position.x);
    y.set(card.position.y);
  }, [cards.length]);

  const onDragEndFunction = () => {
    dispatch(
      updateCardAPI({
        card: {
          ...card,
          position: {
            x: x.get(),
            y: y.get(),
          },
        },
        token,
        history,
      })
    );
  };

  const handleCheckBox = (evt: any) => {
    if (evt.target.checked) {
      dispatch(
        updateBoardAPI({
          board: {
            ...currentBoard,
            data: {
              ...currentBoard.data,
              notifications: [
                `${user.name} terminou o cartão ${card.data.title}.`,
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

  const removeCard = () => {
    dispatch(
      updateBoardAPI({
        board: {
          ...currentBoard,
          data: {
            ...currentBoard.data,
            notifications: [
              `${user.name} acabou de remover um cartão.`,
              ...currentBoard.data.notifications,
            ],
          },
        },
        token,
        history,
      })
    );

    dispatch(deleteCardAPI({ card, token, history }));
  };

  const creationCard = () => {
    dispatch(
      updateBoardAPI({
        board: {
          ...currentBoard,
          data: {
            ...currentBoard.data,
            notifications: [
              `${user.name} acabou de criar um cartão rápido.`,
              ...currentBoard.data.notifications,
            ],
          },
        },
        token,
        history,
      })
    );

    dispatch(
      updateCardAPI({
        token,
        card: { ...card, data: { ...card.data, ...fastCard } },
        history,
      })
    );
  };

  const blockCard = (res: boolean) => {
    dispatch(
      updateBoardAPI({
        board: {
          ...currentBoard,
          data: {
            ...currentBoard.data,
            notifications: [
              `${user.name} ${res ? 'bloqueou' : 'desbloqueou'} o cartão ${card.data.title}`,
              ...currentBoard.data.notifications,
            ],
          },
        },
        token,
        history,
      })
    );

    dispatch(
      updateCardAPI({
        card: {
          ...card,
          data: { ...card.data, blocked: res },
        },
        token,
        history,
      })
    );
  };

  const DoubleClick = () => {
    if (!showEditCard) {
      setCurrentCard(card);
      setShowEditCard(true);
    }
  };

  const followCard = (res: any) => {
    dispatch(
      updateBoardAPI({
        board: {
          ...currentBoard,
          data: {
            ...currentBoard.data,
            notifications: [
              `${user.name} ${res ? 'começou a' : ' deixou de'} seguir o cartão  ${
                card.data.title
              }`,
              ...currentBoard.data.notifications,
            ],
          },
        },
        token,
        history,
      })
    );
    dispatch(
      updateCardAPI({
        card: {
          ...card,
          data: { ...card.data, followers: res ? [{ name: user.name, id: user.id }] : [] },
        },
        token,
        history,
      })
    );
  };

  return !showMobileMenu ? (
    <Card
      id={id}
      className={className}
      card={card}
      user={user}
      showEditCard={showEditCard}
      showMobileMenu={showMobileMenu}
      setCurrentCard={setCurrentCard}
      setShowEditCard={setShowEditCard}
      onDragEndFunction={onDragEndFunction}
      x={x}
      y={y}
      showWarning={showWarning}
      setShowWarning={setShowWarning}
      selectedCard={selectedCard}
      handleCheckBox={handleCheckBox}
      removeCard={removeCard}
      creationCard={creationCard}
      DoubleClick={DoubleClick}
      blockCard={blockCard}
      followCard={followCard}
      forceRerender={forceRerender}
    />
  ) : (
    <CardMobile
      card={card}
      user={user}
      showMobileMenu={showMobileMenu}
      showWarning={showWarning}
      setShowWarning={setShowWarning}
      selectedCard={selectedCard}
      handleCheckBox={handleCheckBox}
      removeCard={removeCard}
      creationCard={creationCard}
      DoubleClick={DoubleClick}
      blockCard={blockCard}
      followCard={followCard}
    />
  );
};

export default DefaultCardContainer;
