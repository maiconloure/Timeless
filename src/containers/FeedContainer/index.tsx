import React from 'react';
import { useSelector } from 'react-redux';

import { NotificationFeed } from '../../components';
import { RootStoreType } from '../../redux/store/store';

const FeedContainer = () => {
  const actions = useSelector((state: RootStoreType) => state.feed.actions);
  return <NotificationFeed prop={actions} />;
};

export default FeedContainer;
