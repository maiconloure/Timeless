import { Feed } from 'capstone-project';
import React from 'react';

interface Props {
  prop: string[];
  minimize: boolean;
}

const FeedCard = ({ prop, minimize }: Props) => (
  <Feed array={prop} minimize={minimize} titleSize="1.8rem" fontSize="1.6rem" minHeight="50px" />
);

export default FeedCard;
