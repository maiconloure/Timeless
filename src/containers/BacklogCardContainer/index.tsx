import { CardLeandro } from 'capstone-project';
import React from 'react';

import Children from '../../components/backlog-card';

interface BacklogCardProps {
  usersArray?: { image: string; user: string }[];
  data: {
    showEditCard: boolean;
    setShowEditCard: React.Dispatch<React.SetStateAction<boolean>> | ((props: boolean) => void);
    currentCard: any;
  };
}

const BacklogCardContainer = ({
  usersArray = [{ image: '', user: '' }],
  data: { showEditCard, setShowEditCard, currentCard },
}: BacklogCardProps) => {
  return (
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
      <Children />
    </CardLeandro>
  );
};

export default BacklogCardContainer;
