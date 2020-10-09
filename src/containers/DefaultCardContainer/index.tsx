/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMotionValue } from 'framer-motion';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DefaultCard from '../../components/default-card';
import { deleteCardAPI, updateCardAPI } from '../../redux/actions/cards.action';
import { getNewAction } from '../../redux/actions/feed.action';
import { CardInterface } from '../../redux/actions/interface.action';
import { RootStoreType } from '../../redux/store/store';
import { fastCard } from '../../utils/defaults-json-cards';

interface DefaultCardProps {
  card: CardInterface;
  showEditCard: boolean;
  setCurrentCard: React.Dispatch<React.SetStateAction<object>>;
  setShowEditCard: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCard: {
    removeCard: boolean;
    fastCard: boolean;
  };
}

const DefaultCardContainer = ({
  card,
  showEditCard,
  setCurrentCard,
  setShowEditCard,
  selectedCard,
}: DefaultCardProps) => {
  const dispatch = useDispatch();
  const x = useMotionValue(card.position.x);
  const y = useMotionValue(card.position.y);
  const token = useSelector((state: RootStoreType) => state.service.token);
  const user = useSelector((state: RootStoreType) => state.service.user);
  const [showWarning, setShowWarning] = useState(false);

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
      })
    );
  };

  const handleCheckBox = (evt: any) => {
    if (evt.target.checked) {
      dispatch(getNewAction(`${user.name} terminou o cartão ${card.data.title}.`));
    }
  };

  const removeCard = () => {
    dispatch(getNewAction(`${user.name} acabou de remover um cartão.`));
    dispatch(deleteCardAPI({ card, token }));
  };

  const creationCard = () => {
    dispatch(getNewAction(` ${user.name} acabou de criar um cartão rápido.`));
    dispatch(
      updateCardAPI({
        token,
        card: { ...card, data: { ...card.data, ...fastCard } },
      })
    );
  };

  return (
    <DefaultCard
      card={card}
      user={user}
      showEditCard={showEditCard}
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
    />
  );
};

export default DefaultCardContainer;
