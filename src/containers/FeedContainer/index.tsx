import React from 'react';
import { useSelector } from 'react-redux';

import { NotificationFeed } from '../../components';
import { RootStoreType } from '../../redux/store/store';

const FeedContainer = ({ minimize = false }: { minimize?: boolean }) => {
  const currentBoard = useSelector((state: RootStoreType) => state.boards.currentBoard);
  return (
    <NotificationFeed
      minimize={minimize}
      prop={currentBoard && currentBoard.data ? currentBoard.data.notifications : []}
    />
  );
};

export default FeedContainer;
