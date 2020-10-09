import FeedCard from './index';
import React from 'react';
import { RootStoreType } from '../../redux/store/store';
import { useSelector } from 'react-redux';

const FeedContainer = () => {
  const actions = useSelector((state: RootStoreType) => state.feed.actions);

  return <FeedCard prop={actions} />;
};

export default FeedContainer;
