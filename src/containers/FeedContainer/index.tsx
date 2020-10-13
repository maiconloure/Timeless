/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';

import { NotificationFeed } from '../../components';
import { RootStoreType } from '../../redux/store/store';

const FeedContainer = () => {
  const currentBoard = useSelector((state: RootStoreType) => state.boards.currentBoard);
  return (
    <NotificationFeed
      prop={currentBoard && currentBoard.data ? currentBoard.data.notifications : []}
    />
  );
};

export default FeedContainer;
