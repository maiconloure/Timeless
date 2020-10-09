import { Feed } from 'capstone-project';
import React from 'react';

interface Props {
  prop: string[];
}

const FeedCard = ({ prop }: Props) => {
  return <Feed array={prop} titleSize="1.8rem" fontSize="1.6rem" />;
};

export default FeedCard;
