import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BackgroundImage from '../../assets/background.svg';
import { CreationMenu } from '../../components';
import BacklogCard from '../../components/backlog-card';

const Board = () => {
  return (
    <div>
      <BoardPage>
        <Background src={BackgroundImage} alt="background-image" />
        <TopContainer>
          <Bar />
        </TopContainer>

        <SideMenuContainer>
          <SideMenu>
            <NavBar />
          </SideMenu>
        </SideMenuContainer>

        <CreationMenu />
        <CardContainer drag dragMomentum={false}>
          <BacklogCard />
        </CardContainer>
      </BoardPage>
    </div>
  );
};

export default Board;

const BoardPage = styled.div`
  background-color: var(--color-background);
  position: relative;
  width: 100vw;
  height: 100vh;
  /* overflow: hidden; */
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

const SideMenuContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 50px;
  width: 300px;
`;
const SideMenu = styled.div`
  width: 100%;
  height: 200px;
  background: #cdd9e2;
  background-color: var(--color-primary-1);
`;
const NavBar = styled.div`
  width: 100%;
  height: 25px;
  background-color: var(--color-primary-4);
`;

const CardContainer = styled(motion.div)`
  position: absolute;
  z-index: 1;
`;
