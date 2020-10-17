import React from 'react';
import { background } from 'utils';

import * as St from './styled';

interface SidePushMenuProps {
  setBackground: React.Dispatch<React.SetStateAction<string>>;
  lockDirection: string;
  setDirection: React.Dispatch<React.SetStateAction<string>>;
}

const SidePushMenu = ({ setBackground, lockDirection, setDirection }: SidePushMenuProps) => (
  <St.SideMenuContainer
    drag={lockDirection === 'x'}
    dragDirectionLock
    onDirectionLock={(axis) => setDirection(axis)}
    dragMomentum={false}>
    <St.Bar />
    <St.InnerBox>
      <St.IconBox style={{ background: '#A9A9A9	' }}>
        <St.BackgroundIcon
          onClick={() => setBackground(background.official)}
          style={{ transform: 'scale(5)' }}
          src={background.official}
          alt="background"
        />
      </St.IconBox>
      <St.IconBox>
        <St.BackgroundIcon
          onClick={() => setBackground(background.ruby)}
          src={background.ruby}
          alt="background"
        />
      </St.IconBox>
      <St.IconBox>
        <St.BackgroundIcon
          onClick={() => setBackground(background.react)}
          src={background.react}
          alt="background"
        />
      </St.IconBox>
      <St.IconBox>
        <St.BackgroundIcon
          onClick={() => setBackground(background.minato)}
          src={background.minato}
          alt="background"
        />
      </St.IconBox>
      <St.IconBox>
        <St.BackgroundIcon
          onClick={() => setBackground(background.python)}
          src={background.python}
          alt="background"
        />
      </St.IconBox>
      <St.IconBox>
        <St.BackgroundIcon
          onClick={() => setBackground(background.Typescript)}
          src={background.Typescript}
          alt="background"
        />
      </St.IconBox>
      <St.IconBox>
        <St.BackgroundIcon
          onClick={() => setBackground(background.AbstractTimekeeper)}
          src={background.AbstractTimekeeper}
          alt="background"
        />
      </St.IconBox>
      <St.IconBox>
        <St.BackgroundIcon
          onClick={() => setBackground(background.BullseyeGradient)}
          src={background.BullseyeGradient}
          alt="background"
        />
      </St.IconBox>
      <St.IconBox onClick={() => setBackground(background.RadiantGradient)}>
        <St.BackgroundIcon src={background.RadiantGradient} alt="background" />
      </St.IconBox>
    </St.InnerBox>
  </St.SideMenuContainer>
);

export default SidePushMenu;
