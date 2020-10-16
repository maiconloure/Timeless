/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMotionValue, motion } from 'framer-motion';
import React, { RefObject, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card, CardMobile } from '../../components';
import { updateBoardAPI } from '../../redux/actions/boards.action';
import { deleteCardAPI, updateCardAPI } from '../../redux/actions/cards.action';
import { RootStoreType } from '../../redux/store/store';
import { defaultCard, fastCard } from '../../utils/defaults-json-cards';
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
  lines,
  setLines,
  connection: {
    cardOne,
    setCardOne,
    cardTwo,
    setCardTwo,
    cardSelected,
    setCardSelected,
    confirmConnection,
    setconfirmConnection,
  },
}: DefaultCardProps) => {
  const dispatch = useDispatch();
  const x = useMotionValue(card.position.x);
  const y = useMotionValue(card.position.y);
  const token = useSelector((state: RootStoreType) => state.service.token);
  const user = useSelector((state: RootStoreType) => state.service.user);
  const cards = useSelector((state: RootStoreType) => state.cards.cards);
  const currentBoard = useSelector((state: RootStoreType) => state.boards.currentBoard);
  const [showWarning, setShowWarning] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 100);
  }, []);

  useEffect(() => {
    x.set(card.position.x);
    y.set(card.position.y);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards.length]);

  const onDragEndFunction = () => {
    forceRerender();
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
                `${user.name} terminou o cartão ${card.data.title}`,
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
    setLines([...lines.filter((line: any) => line.ids && line.ids.includes(card.id))]);
    dispatch(
      updateBoardAPI({
        board: {
          ...currentBoard,
          connections: [...lines.filter((line: any) => line.ids && line.ids.includes(card.id))],
          data: {
            ...currentBoard.data,
            notifications: [`${user.name} removeu um cartão.`, ...currentBoard.data.notifications],
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
              `${user.name} criou um cartão rápido.`,
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

  const followCard = (res: boolean) => {
    dispatch(
      updateBoardAPI({
        board: {
          ...currentBoard,
          data: {
            ...currentBoard.data,
            notifications: [
              `${user.name} ${res ? 'começou a' : ' deixou de'} seguir o cartão ${card.data.title}`,
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

  const handleConnection = () => {
    if (!cardSelected && !cardTwo) {
      setCardSelected(true);
      setCardOne(card.id);
    } else if (card.id === cardOne) {
      setCardOne(false);
      setCardSelected(false);
    } else if (!cardTwo && cardOne) {
      setCardTwo(card.id);
      if (!confirmConnection) {
        setconfirmConnection(true);
      }
    }
  };

  useEffect(() => {
    if (confirmConnection) {
      setLines([
        ...lines,
        {
          ids: [cardOne, cardTwo],
          start: `card${cardOne}`,
          end: `card${cardTwo}`,
          headSize: 4,
        },
      ]);
      dispatch(
        updateBoardAPI({
          board: {
            ...currentBoard,
            connections: [
              ...lines,
              {
                ids: [cardOne, cardTwo],
                start: `card${cardOne}`,
                end: `card${cardTwo}`,
                headSize: 4,
                strokeWidth: 10,
              },
            ],
            data: {
              ...currentBoard.data,
              notifications: [
                `${user.name} conectou dois cartões`,
                ...currentBoard.data.notifications,
              ],
            },
          },
          token,
          history,
        })
      );
      setconfirmConnection(false);
      setCardSelected(false);
      setCardOne(false);
      setCardTwo(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmConnection]);

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
      handleConnection={handleConnection}
      cardOne={cardOne}
      cardTwo={cardTwo}
      loading={loading}
    />
  ) : (
    <CardMobile
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
      handleConnection={handleConnection}
      cardOne={cardOne}
      cardTwo={cardTwo}
      loading={loading}
    />
  );
};

export default DefaultCardContainer;
