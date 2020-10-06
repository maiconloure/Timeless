import { CardLeandro } from 'capstone-project';
import React, { useState } from 'react';
import Children from './content';

interface Props {
  usersArray?: ImageProps[];
}

interface ImageProps {
  image: string;
  user: string;
}

export default function BacklogCard({ usersArray = [{ image: '', user: '' }] }: Props) {
  const [showCard, setShowCard] = useState(true);

  return (
    <CardLeandro
      title="Product Backlog"
      titleUnderlineOffset="8px"
      boxPadding="20px"
      avatars={usersArray}
      fontColor="#014D82"
      closeable
      closeDataPass={[showCard, () => setShowCard(false)]}
      backgroundColor="rgba(58, 166, 242, 0.5)"
      borderDetails="none">
      <Children />
    </CardLeandro>
  );
}
