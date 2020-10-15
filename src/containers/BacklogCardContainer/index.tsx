/* eslint-disable @typescript-eslint/no-unused-vars */
import { CardLeandro } from 'capstone-project';
import React from 'react';

import { EditCardModal } from '../../components';
import { BacklogCardProps } from '../ContainerInterface';

const BacklogCardContainer = ({
  usersArray = [{ image: '', user: '' }],
  data: { showEditCard, setShowEditCard, currentCard },
}: BacklogCardProps) => (
  <CardLeandro
    title="Product Backlog"
    titleUnderlineOffset="8px"
    boxPadding="20px"
    avatars={usersArray}
    fontColor="#014D82"
    closeable
    closeDataPass={[showEditCard, setShowEditCard]}
    backgroundColor="rgba(58, 166, 242, 0.5)"
    borderDetails="none">
    <EditCardModal />
  </CardLeandro>
);

export default BacklogCardContainer;
