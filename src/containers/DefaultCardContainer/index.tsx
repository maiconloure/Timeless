/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMotionValue, motion } from 'framer-motion';
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

  useEffect(() => {
    x.set(card.position.x);
    y.set(card.position.y);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards.length]);

  const onDragEndFunction = () => {
    // if (x.get() >= 1 && y.get() >= 1) {

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
    const date = new Date();
    const curr_hour = `${date
      .getHours()
      .toString()
      .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

    if (evt.target.checked) {
      dispatch(
        updateBoardAPI({
          board: {
            ...currentBoard,
            data: {
              ...currentBoard.data,
              notifications: [
                `${user.name} terminou o cartão ${card.data.title}, ${curr_hour}`,
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
    const date = new Date();
    const curr_hour = `${date
      .getHours()
      .toString()
      .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

    // setLines([
    //   ...lines.filter((line: any) => {
    //     if (!line.ids.includes(card.id)) {
    //       return line;
    //     }
    //   }),
    // ]);

    dispatch(
      updateBoardAPI({
        board: {
          ...currentBoard,
          connections: [
            lines.filter((line: any) => {
              if (lines.ids && !line.ids.includes(card.id)) {
                return line;
              } else {
                return false;
              }
            }),
          ],
          data: {
            ...currentBoard.data,
            notifications: [
              `${user.name} removeu um cartão, ${curr_hour}`,
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
              `${user.name} criou um cartão rápido, ${curr_hour}`,
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
              `${user.name} ${res ? 'bloqueou' : 'desbloqueou'} o cartão ${
                card.data.title
              }, ${curr_hour}`,
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
              `${user.name} ${res ? 'começou a' : ' deixou de'} seguir o cartão  ${
                card.data.title
              }, ${curr_hour}`,
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
    } else if (card.id === cardTwo) {
      setCardTwo(false);
    } else if (!cardTwo) {
      setCardTwo(card.id);
      if (!confirmConnection) {
        setconfirmConnection(true);
      }
    }
  };

  useEffect(() => {
    if (confirmConnection) {
      if (cardOne && cardTwo) {
        setLines([
          ...lines,
          {
            ids: [cardOne, cardTwo],
            start: `card${cardOne}`,
            end: `card${cardTwo}`,
            headSize: 4,
            strokeWidth: 10,
          },
        ]);
        const date = new Date();
        const curr_hour = `${date
          .getHours()
          .toString()
          .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;

        // console.log(
        //   lines.every((line: any) => {
        //     return !line.ids.includes(card.id);
        //   })
        // );

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
                  `${user.name} conectou dois cartões, ${curr_hour}`,
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
