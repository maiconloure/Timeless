import { SidePushMenu } from 'components';
import React, { useEffect, useState } from 'react';

interface SidePushMenuContainerProps {
  setBackground: React.Dispatch<React.SetStateAction<string>>;
}

const SidePushMenuContainer = ({ setBackground }: SidePushMenuContainerProps) => {
  const [lockDirection, setDirection] = useState('x');

  useEffect(() => {
    if (lockDirection === 'y') {
      setTimeout(() => setDirection('x'), 500);
    }
  }, [lockDirection]);

  return (
    <SidePushMenu
      setBackground={setBackground}
      lockDirection={lockDirection}
      setDirection={setDirection}
    />
  );
};

export default SidePushMenuContainer;
