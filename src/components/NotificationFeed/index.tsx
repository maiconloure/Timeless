import { Feed } from 'capstone-project';
import React from 'react';

interface Props {
  prop: string[];
}

const FeedCard = ({ prop }: Props) => (
  <Feed array={prop} titleSize="1.8rem" fontSize="1.6rem" minHeight="50px" />
);

export default FeedCard;
