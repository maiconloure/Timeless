/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from 'framer-motion';
import { History, LocationState } from 'history';
import React, { useState } from 'react';
import styled from 'styled-components';

import BackgroundImage from '../../assets/background.svg';
import CloseIcon from '../../assets/close.png';
import KenzieLogo from '../../assets/kenzie.png';
import UserIcon from '../../assets/user1-icon.png';
import { CreationMenu, Card } from '../../components';
import BacklogCard from '../../components/backlog-card';

interface LandingPageProps {
  history: History<LocationState>;
}

const Board = ({ history }: LandingPageProps) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLogout = () => {
    setToggleMenu(!toggleMenu);
    history.push('/');
  };

  return (
    <BoardPage>
      <Background src={BackgroundImage} alt="background-image" />

      <TopContainer>
        <Bar>
          <ProjectInfo>
            <img src={KenzieLogo} alt="user-profile-pic" />
            <h2> Kenzie Academy Brasil </h2>
            <h4>&nbsp;|&nbsp;</h4>
            <h3> Capstone Project</h3>
          </ProjectInfo>

          <UserInfo>
            <User>
              <h2>Maicon Lourenço</h2>
              <p>Online</p>
            </User>

            <ProfileIcon onClick={() => setToggleMenu(!toggleMenu)}>
              <img src={UserIcon} alt="user-profile-pic" />
            </ProfileIcon>

            {toggleMenu && (
              <UserMenu>
                <MainUserMenu>
                  <h2>Conta</h2>
                  <img
                    onClick={() => setToggleMenu(!toggleMenu)}
                    src={CloseIcon}
                    alt="close icon"
                  />
                </MainUserMenu>

                <UserInfoMenu>
                  <h2>Maicon Lourenço</h2>
                  <h3>maiconloure@gmail.com</h3>
                </UserInfoMenu>

                <Logout onClick={handleLogout}>
                  <p>Fazer Logout</p>
                </Logout>
              </UserMenu>
            )}
          </UserInfo>
        </Bar>
      </TopContainer>

      <InnerBoardContainer>
        <SideMenuContainer drag dragMomentum={false}>
          <CreationMenu />
        </SideMenuContainer>

        <CardContainer drag dragMomentum={false}>
          <BacklogCard />
        </CardContainer>
      </InnerBoardContainer>
    </BoardPage>
  );
};

export default Board;

const BoardPage = styled.div`
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
  height: 70px;
  background-color: var(--color-primary-0);

  @media (min-width: 1200px) and (min-height: 768px) {
    height: 5vh;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Fira Code';

  h2,
  h3,
  h4 {
    display: none;
  }

  img {
    width: 60px;
    margin: 0 5px;
  }

  @media (min-width: 1200px) and (min-height: 768px) {
    display: flex;
    align-items: center;
    h2 {
      display: block;
      font-size: 0.9vw;
      text-transform: uppercase;
      color: #fff;
    }

    h3 {
      display: block;
      font-size: 0.8vw;
      color: #fff;
    }

    h4 {
      display: block;
      font-size: 1.4vw;
      color: #fff;
    }

    img {
      margin: 0 10px;
      width: 2.2vw;
    }
  }
`;

const UserInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const User = styled.div`
  font-family: Inter;
  font-style: italic;
  font-size: 1.4rem;
  margin: 0 5px;

  p {
    text-align: right;
  }

  @media (min-width: 1200px) and (min-height: 768px) {
    h2 {
      font-size: 1vw;
    }
    p {
      font-style: italic;
      font-size: 0.8vw;
    }
  }
`;

const UserMenu = styled.div`
  position: absolute;
  top: 60px;
  left: -5px;
  width: 220px;
  height: 280px;
  padding: 10px;
  background: #ffffff;
  border-radius: 4px;
  color: #12254e;
  display: flex;
  flex-direction: column;
`;

const MainUserMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  border-bottom: 2px solid #dfe1e7;

  h2 {
    font: 500 1.8rem Fira Code;
    opacity: 0.5;
  }

  img {
    cursor: pointer;
    width: 2rem;
  }
`;

const UserInfoMenu = styled.div`
  margin: 10px 5px;
  height: 70%;
  h2 {
    font: 500 2rem Inter;
  }

  h3 {
    font: 400 1.3rem Inter;
    opacity: 0.6;
  }
`;

const Logout = styled.div`
  border-top: 2px solid #dfe1e7;
  cursor: pointer;
  p {
    font: 500 1.5rem Fira Code;
    opacity: 0.8;
    margin: 4px 0;
  }
`;

const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 55px;

  img {
    width: 62px;
  }

  @media (min-width: 1200px) and (min-height: 768px) {
    img {
      width: 2.5vw;
      margin: 6px 14px;
    }
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

const CardContainer = styled(motion.div)`
  position: absolute;
  top: calc(50% - 650px / 2);
  left: calc(50% - 650px / 2);
  z-index: 1;
`;
