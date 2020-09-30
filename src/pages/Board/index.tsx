import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import BackgroundImage from '../../assets/background.svg';

const Board = () => {
  return (
    <BoardPage>
      <Background src={BackgroundImage} alt="background-image" />
      <TopContainer>
        <Bar />
      </TopContainer>
      <InnerBoardContainer>
        <SideMenuContainer drag dragMomentum={false}>
          <SideMenu>
            <NavBar />
          </SideMenu>
        </SideMenuContainer>
      </InnerBoardContainer>
    </BoardPage>
  );
};

export default Board;

const BoardPage = styled.div`
  background-color: var(--color-background);
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

const TopContainer = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  width: 100%;
`;

const Bar = styled.div`
  display: block;
  width: 100%;
  height: 55px;
  background-color: var(--color-primary-0);
`;

const InnerBoardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
`;

const SideMenuContainer = styled(motion.div)`
  position: absolute;
  top: 100px;
  left: 50px;
  width: 300px;
`;
const SideMenu = styled.div`
  width: 100%;
  height: 200px;
  background: #cdd9e2;
  border-radius: 2px;
  background-color: var(--color-primary-1);
`;
const NavBar = styled.div`
  width: 100%;
  height: 25px;
  background-color: var(--color-primary-4);
`;
