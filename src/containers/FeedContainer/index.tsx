/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';

import FeedCard from '../../components/feed';
import { RootStoreType } from '../../redux/store/store';

const FeedContainer = () => {
  const actions = useSelector((state: RootStoreType) => state.feed.actions);
  return <FeedCard prop={actions} />;
};

export default FeedContainer;
