import { motion } from 'framer-motion';
import ScrollContainer from 'react-indiana-drag-scroll';
import styled from 'styled-components';

import { images } from '../../utils/importAll';

export const BoardPage = styled.div`
  /* background-image: url(https://media.giphy.com/media/MtJwM5N4fuMgw/giphy.gif); */
  /* background-image: url(${images.AbstractTimekeeper}); */
  background-image: url(${images.background});
  background-size: cover;
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
  z-index: 99;
  div {
    font-weight: 800;
    color: #fff;
  }
`;

export const TopContainer = styled.div`
  grid-area: top;
  position: fixed;
  z-index: 999;
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

export const InnerBoardContainer = styled.div`
  position: relative;
  grid-area: board;
  align-self: center;
  justify-self: center;
  margin: 5px;
  width: 4000px;
  height: 4000px;
  overflow: scroll;

  &:active {
    cursor: grabbing;
  }
`;

export const DragScroll = styled(ScrollContainer)`
  grid-area: board;
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

export const MobileContainer = styled.div`
  background-color: var(--color-background);
  max-width: 100vw;
  width: 100vw;
  /* max-height: 85vh; */
  /* overflow: auto; */
  /* box-sizing: content-box; */
  z-index: 999;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: 100ms;

  &.close {
    top: 0;
  }

  &.open {
    padding: 10px 5px 0 5px;

    top: 70px;
  }

  &:nth-child(1) {
    margin-bottom: 80px;
  }
`;

export const MobileContent = styled.div`
  margin-bottom: 10px;
`;

export const MobileFeedback = styled.div`
  display: flex;
  flex-direction: row;
  align-items: right;
`;

export const MobileMenuOpenClose = styled.div`
  width: 100vw;
  /* margin-top: 5px; */
  /* margin-bottom: 0; */
  border: 1px solid #0190f533;
  /* background-color: var(--color-primary-1); */
  img {
    width: 40px;
    display: block;
    margin: 0 auto;
  }
`;

export const MobileMapCards = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* overflow: auto; */
  overflow: scroll;

  justify-content: flex-end;
  margin-top: 100px;
`;
