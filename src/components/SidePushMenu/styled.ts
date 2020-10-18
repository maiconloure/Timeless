import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SideMenuContainer = styled(motion.div)`
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

export const Bar = styled.div`
  position: absolute;
  top: 50%;
  left: 99.5%;
  z-index: 9999999999999;
  background: #282a36;
  width: 35px;
  height: 100px;
  border-radius: 6px;
`;

export const InnerBox = styled.div`
  width: 800px;
  height: 700px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;
`;

export const IconBox = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
`;

export const BackgroundIcon = styled.img`
  width: 600px;
  cursor: pointer;
`;
