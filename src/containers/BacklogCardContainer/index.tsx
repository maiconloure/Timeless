import { CardLeandro } from 'capstone-project';
import { EditCardModal } from 'components';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { updateBoardAPI } from '../../redux/actions/boards.action';
import { createCardAPI, deleteCardAPI, updateCardAPI } from '../../redux/actions/cards.action';
import { RootStoreType } from '../../redux/store/store';
import { BacklogCardProps } from '../ContainerInterface';

const BacklogCardContainer = ({
  data: { showEditCard, setShowEditCard, currentCard, user },
  lines,
  setLines,
  token,
  history,
}: BacklogCardProps) => {
  const dispatch = useDispatch();
  const currentBoard = useSelector((state: RootStoreType) => state.boards.currentBoard);
  const [currentTags, setCurrentTags] = useState(
    currentCard.data.tags && currentCard.data.tags[0].text
  );
  const [currentDescription, setCurrentDescription] = useState(
    currentCard.data.description ? currentCard.data.description : ''
  );
  const [currentTitle, setCurrentTitle] = useState(
    currentCard.data.title ? currentCard.data.title : ''
  );
  const [currentDate, setCurrentDate] = useState(
    currentCard.data.time.finish.date ? currentCard.data.time.finish.date : ''
  );
  const [currentTime, setCurrentTime] = useState(
    currentCard.data.time.done.hour ? currentCard.data.time.done.hour : ''
  );
  const avatar = [{ image: user.image, user: user.name }];
  const getTags = (evt: any) => {
    setCurrentTags(evt.currentTarget.value);
  };

  const getDescription = (evt: any) => {
    setCurrentDescription(evt.currentTarget.value);
  };

  const getTitle = (evt: any) => {
    setCurrentTitle(evt.currentTarget.value);
  };

  const getDate = (evt: any) => {
    setCurrentDate(evt.currentTarget.value);
  };

  const getTime = (evt: any) => {
    setCurrentTime(evt.currentTarget.value);
  };
  const duplicateCard = () => {
    const random = () => Math.random() * (500 - 100) + 100;
    dispatch(
      createCardAPI({
        currentBoard,
        token,
        user,
        card: {
          ...currentCard,
          position: { x: random() + 300, y: random() },
          id: Math.random() * (10000 - 100) + 100,
        },
        history,
      })
    );
    dispatch(
      updateBoardAPI({
        board: {
          ...currentBoard,
          data: {
            ...currentBoard.data,
            notifications: [`${user.name} duplicou um card.`, ...currentBoard.data.notifications],
          },
        },
        token,
        history,
      })
    );
    setTimeout(() => {
      setShowEditCard(!showEditCard);
    }, 200);
  };

  const removeCard = () => {
    setLines([...lines.filter((line: any) => line.ids && !line.ids.includes(currentCard.id))]);
    dispatch(
      updateBoardAPI({
        board: {
          ...currentBoard,
          connections: [
            ...lines.filter((line: any) => line.ids && !line.ids.includes(currentCard.id)),
          ],
          data: {
            ...currentBoard.data,
            notifications: [`${user.name} removeu um cartão.`, ...currentBoard.data.notifications],
          },
        },
        token,
        history,
      })
    );
    dispatch(deleteCardAPI({ card: currentCard, token, history }));
    setShowEditCard(false);
  };

  const handleEditCard = () => {
    dispatch(
      updateCardAPI({
        card: {
          ...currentCard,
          data: {
            ...currentCard.data,
            tags: [{ color: '#014D82', text: currentTags }],
            title: currentTitle,
            description: currentDescription,
            time: {
              finish: {
                date: currentDate,
                hour: currentDate,
              },
              start: {
                date: '00/00',
                hour: '00:00',
              },
              done: {
                date: currentTime,
                hour: currentTime,
              },
            },
          },
        },
        token,
        history,
      })
    );

    setTimeout(() => {
      setShowEditCard(!showEditCard);
    }, 500);
  };

  const FormataStringData = (data: any) => {
    var dia = data.split('/')[0];
    var mes = data.split('/')[1];
    var ano = data.split('/')[2];
    return ano + '-' + ('0' + mes).slice(-2) + '-' + ('0' + dia).slice(-2);
  };

  return (
    <EditCardContainer drag dragMomentum={false}>
      <CardLeandro
        title={currentTitle}
        titleUnderlineOffset="2px"
        titleSize="2.7rem"
        titleUnderline="3px solid #014D82"
        titleMarginBottom="8px"
        boxPadding="10px"
        topSpacing="0"
        leftSpacing="0"
        avatars={avatar}
        fontColor="#014D82"
        avatarWidth="45px"
        closeable
        closeDataPass={[showEditCard, handleEditCard]}
        backgroundColor="rgba(58, 166, 242, 0.9)"
        borderDetails="none"
        titleOnChange={getTitle}>
        <EditCardModal
          user={user}
          currentTags={currentTags}
          getTags={getTags}
          currentCard={currentCard}
          getDescription={getDescription}
          currentDescription={currentDescription}
          getDate={getDate}
          getTime={getTime}
          currentDate={currentDate}
          currentTime={currentTime}
          removeCard={removeCard}
          duplicateCard={duplicateCard}
          FormataStringData={FormataStringData}
        />
      </CardLeandro>
    </EditCardContainer>
  );
};
export default BacklogCardContainer;

const EditCardContainer = styled(motion.div)``;
