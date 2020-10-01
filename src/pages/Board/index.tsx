import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import BackgroundImage from '../../assets/background.svg';
import KenzieLogo from '../../assets/kenzie.png';
import UserIcon from '../../assets/user1-icon.png';

const Board = () => {
  return (
    <BoardPage>
      <Background src={BackgroundImage} alt="background-image" />

      <TopContainer>
        <Bar>
          <ProjectInfo>
            <img src={KenzieLogo} alt="user-profile-pic" />
            <h2>Kenzie Academy</h2>
          </ProjectInfo>

          <UserInfo>
            <div>
              <h2>Maicon Lourenço</h2>
              <p>Online</p>
            </div>

            <ProfileIcon>
              <img src={UserIcon} alt="user-profile-pic" />
            </ProfileIcon>
          </UserInfo>
        </Bar>
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
  /* position: relative; */
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
  width: 100vw;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: var(--color-primary-0);
`;

const ProjectInfo = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-size: 2.1rem;
    font-style: italic;
    color: #fff;
  }

  img {
    margin: 0 10px;
    width: 50px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
`;

const ProfileIcon = styled.div`
  height: 55px;

  img {
    width: 50px;
    margin: 0 10px;
  }
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
