import { motion } from 'framer-motion';
import ScrollContainer from 'react-indiana-drag-scroll';
import styled from 'styled-components';

import { images } from '../../utils/importAll';

export const BoardPage = styled.div`
  background-image: url(${images.background});
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 72px auto;
  grid-template-areas:
    'top'
    'board';
  align-items: center;

  @media (min-width: 1000px) and (min-height: 768px) {
    grid-template-rows: 61px auto;
  }
`;

export const Notification = styled.div`
  position: absolute;
  z-index: 999999999;

  div {
    font-weight: 800;
    color: #fff;
  }
`;

export const TopContainer = styled.div`
  grid-area: top;
  position: fixed;
  z-index: 9999;
  top: 0;
  width: 100vw;
`;

export const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background-color: var(--color-primary-0);

  @media (min-width: 1000px) and (min-height: 768px) {
    height: 60px;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';

  h2,
  h3,
  h4 {
    display: none;
  }

  h3 {
    cursor: pointer;
  }

  img {
    width: 60px;
    margin: 0 5px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 800px) {
    display: flex;
    align-items: center;

    h2 {
      margin-left: 5px;
      display: block;
      font-size: 1.8rem;
      font-weight: 800;
      text-transform: uppercase;
      color: #fff;
    }

    h3 {
      display: block;
      font-size: 1.6rem;
      color: #fff;
    }

    h4 {
      display: block;
      font-size: 2.4rem;
      font-weight: 900;
      color: #fff;
    }

    img {
      margin: 0 5px;
      width: 50px;
    }
  }
`;

export const UserInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  width: 240px;
`;

export const User = styled.div`
  font-family: Inter;
  font-size: 1.4rem;
  margin: 0 4px;

  p {
    text-align: right;
  }

  @media (min-width: 1200px) and (min-height: 768px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;

export const UserMenu = styled.div`
  position: absolute;
  top: 65px;
  left: -10px;
  min-width: 220px;
  height: 300px;
  padding: 10px;
  background: #ffffff;
  border-radius: 4px;
  color: #12254e;
  display: flex;
  flex-direction: column;
`;

export const MainUserMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  border-bottom: 2px solid #dfe1e7;

  h2 {
    font: 500 1.8rem Fira Code;
    opacity: 0.7;
  }

  img {
    cursor: pointer;
    width: 2rem;
  }
`;

export const UserInfoMenu = styled.div`
  margin: 10px 5px;
  height: 70%;
  h2 {
    font: 500 2rem Inter;
  }

  h3 {
    font: 400 1.3rem Inter;
    padding: 2px 0;
    opacity: 0.7;
  }

  p {
    font: 600 1.4rem Inter;
    line-height: 1.6rem;
    padding: 4px 0;
    border-top: 2px solid #dfe1e7;
    opacity: 0.9;
  }
`;

export const MenuOption = styled.div`
  border-top: 2px solid #dfe1e7;
  cursor: pointer;
  p {
    font: 500 1.5rem Roboto;
    opacity: 0.9;
    margin: 6px 0;
  }
`;

export const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 55px;
  height: 55px;

  img {
    width: 60px;
    height: 60px;
    margin-right: 5px;
    border-radius: 50%;
  }

  @media (min-width: 1000px) and (min-height: 768px) {
    img {
      width: 55px;
      height: 55px;
    }
  }
`;

export const InnerBoardContainer = styled.div`
  position: relative;
  grid-area: board;
  align-self: center;
  justify-self: center;
  margin: 5px;
  /* width: 99.4%; */
  /* height: 99%; */
  width: 5000px;
  height: 5000px;

  overflow: scroll;

  &:active {
    cursor: grabbing;
  }
`;

export const DragScroll = styled(ScrollContainer)`
  grid-area: board;
  /* position: absolute; */
  height: calc(100vh - 20px);
  max-height: 100vh;
  width: 100vw !important;
  max-width: 100vw !important;

  &:active {
    cursor: grabbing;
  }
`;

export const SideMenuContainer = styled(motion.div)`
  position: absolute;
  top: 80px;
  left: 40px;
  width: 300px;
`;

export const FeedBox = styled(motion.div)`
  position: absolute;
  top: 330px;
  left: 40px;

  &:active {
    cursor: grabbing;
  }
`;

export const CardContainer = styled(motion.div)`
  position: absolute;
  top: calc(50% - 650px / 2);
  left: calc(50% - 650px / 2);
  z-index: 1;
`;
