import { motion, transform } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { images, background } from '../../utils/importAll';

const SidePushMenu = ({ setBackground }: any) => {
  const [lockDirection, setDirection] = useState('x');
  const [unlock, setUnlock] = useState(false);
  useEffect(() => {
    if (lockDirection === 'y') {
      setTimeout(() => setDirection('x'), 500);
    }
  }, [lockDirection]);
  return (
    <SideMenuContainer
      drag={lockDirection === 'x'}
      dragDirectionLock
      onDirectionLock={(axis) => setDirection(axis)}
      dragMomentum={false}>
      <Bar />
      <InnerBox>
        <IconBox style={{ background: '#A9A9A9	' }}>
          <BackgroundIcon
            onClick={() => setBackground(background.official)}
            style={{ transform: 'scale(5)' }}
            src={images.background}
            alt="background"
          />
        </IconBox>
        <IconBox>
          <BackgroundIcon
            onClick={() => setBackground(background.ruby)}
            src={background.ruby}
            alt="background"
          />
        </IconBox>
        <IconBox>
          <BackgroundIcon
            onClick={() => setBackground(background.react)}
            src={background.react}
            alt="background"
          />
        </IconBox>
        <IconBox>
          <BackgroundIcon
            onClick={() => setBackground(background.minato)}
            src={background.minato}
            alt="background"
          />
        </IconBox>
        <IconBox>
          <BackgroundIcon
            onClick={() => setBackground(background.akatsuki)}
            src={background.akatsuki}
            alt="background"
          />
        </IconBox>
        <IconBox>
          <BackgroundIcon
            onClick={() => setBackground(background.Typescript)}
            src={background.Typescript}
            alt="background"
          />
        </IconBox>
        <IconBox>
          <BackgroundIcon
            onClick={() => setBackground(background.AbstractTimekeeper)}
            src={background.AbstractTimekeeper}
            alt="background"
          />
        </IconBox>
        <IconBox>
          <BackgroundIcon
            onClick={() => setBackground(background.BullseyeGradient)}
            src={background.BullseyeGradient}
            alt="background"
          />
        </IconBox>
        <IconBox onClick={() => setBackground(background.RadiantGradient)}>
          <BackgroundIcon src={background.RadiantGradient} alt="background" />
        </IconBox>
      </InnerBox>
    </SideMenuContainer>
  );
};

export default SidePushMenu;

const SideMenuContainer = styled(motion.div)`
  position: absolute;
  z-index: 999999999;
  top: 0;
  left: -200vw;
  background: #282a36;
  width: 200vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`;

const Bar = styled.div`
  position: absolute;
  top: 50%;
  left: 99.5%;
  z-index: 9999999999999;
  background: #282a36;
  width: 35px;
  height: 100px;
  border-radius: 6px;
`;

const InnerBox = styled.div`
  width: 800px;
  height: 700px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;
`;

const IconBox = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
`;

const BackgroundIcon = styled.img`
  width: 600px;
  cursor: pointer;
`;
