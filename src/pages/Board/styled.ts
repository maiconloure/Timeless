import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BoardPage = styled.div`
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
    font-weight: 700;
    color: #000;
  }
`;

export const Background = styled.img`
  grid-area: board;
  height: 100%;
  background-repeat: repeat;
`;

export const InnerBoardContainer = styled.div`
  position: relative;
  grid-area: board;
  align-self: center;
  justify-self: center;
  margin: 10px;
  width: 99.4%;
  height: 100%;
  overflow: scroll;
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
`;

export const CardContainer = styled(motion.div)`
  position: absolute;
  top: calc(50% - 650px / 2);
  left: calc(50% - 650px / 2);
  z-index: 1;
`;
