/* eslint-disable @typescript-eslint/no-unused-vars */
import { CardLeandro } from 'capstone-project';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';

import { EditCardModal } from '../../components';
import { icons } from '../../utils/importAll';
import { BacklogCardProps } from '../ContainerInterface';

const BacklogCardContainer = ({
  usersArray = [{ image: icons.user1, user: '' }],
  data: { showEditCard, setShowEditCard, currentCard, user },
}: BacklogCardProps) => {
  console.log(currentCard);
  const [currentDescription, setCurrentDescription] = useState(
    currentCard.data.description && currentCard.data.description
  );
  const [currentTitle, setCurrentTitle] = useState(
    currentCard.data.title && currentCard.data.title
  );
  const [currentDate, setCurrentDate] = useState(
    currentCard.data.finish && currentCard.data.time.finish
  );
  const [currentTime, setCurrentTime] = useState(
    currentCard.data.done && currentCard.data.time.done
  );
  const avatar = [{ image: user.image, user: user.name }];

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
        closeDataPass={[showEditCard, setShowEditCard]}
        backgroundColor="rgba(58, 166, 242, 0.9)"
        borderDetails="none"
        titleOnChange={getTitle}>
        <EditCardModal
          user={user}
          currentCard={currentCard}
          getDescription={getDescription}
          currentDescription={currentDescription}
          getDate={getDate}
          getTime={getTime}
          currentDate={currentDate}
          currentTime={currentTime}
        />
      </CardLeandro>
    </EditCardContainer>
  );
};
export default BacklogCardContainer;

const EditCardContainer = styled(motion.div)``;
