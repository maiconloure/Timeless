import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CardContainer = styled(motion.div)`
  position: absolute;
  width: 1px;
  height: 1px;
  z-index: 1;

  &:active {
    cursor: grabbing;
  }
`;

export const Editable = styled.div<{ blocked: boolean }>`
  pointer-events: ${(props) => (props.blocked ? 'none' : 'auto')};
  #unlock {
    pointer-events: auto;
  }
  &:active {
    cursor: grabbing;
  }
`;

export const MotionBox = styled(motion.div)`
  position: relative;
`;

export const Card = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 300px;
  max-width: 310px;
  background-color: var(--color-background);
  color: var(--color-primary-4);
  box-sizing: border-box;
  box-shadow: 1px 1px 16px 4px rgba(25, 25, 112, 0.3);
  border: 3px solid #8f98eb;
  border-radius: 4px;

  :hover {
    border: 4px solid #191970;
  }
`;

export const CardInside = styled.div`
  padding: 12px 14px 5px 14px;
  font-family: 'Inter', sans-serif;
  position: relative;
`;

export const CardHeader = styled.div`
  display: flex;
  font: 700 1.8rem Inter;
`;

export const MainTags = styled.div`
  flex: 2;
  display: flex;
  margin-bottom: 10px;

  &:nth-child(1) {
    div {
      min-width: 35px;
      max-width: 100px;
      height: 2rem;
      outline: none;
      background-color: var(--color-background);
    }
  }
`;

export const Tag = styled.div`
  min-width: 35px;
  max-width: 50px;
  height: 2rem;
  display: -webkit-box;
  outline: none;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: var(--color-background);
`;

export const TimeExec = styled.div``;

export const AlertImg = styled.span`
  position: absolute;
  top: -30px;
  left: 0px;
  z-index: 999;

  .tooltiptext {
    text-align: left;
    width: 120px;
  }
  img {
    width: 45px;
    cursor: pointer;
  }
`;

export const InfoIcons = styled.figure`
  display: flex;
  img {
    width: 25px;
    height: 25px;
    margin: 0 5px;
    cursor: pointer;
  }

  .tooltip {
    width: 25px;
    &:hover .tooltiptext {
      visibility: visible;
    }
  }
`;

export const Description = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 268px;
  min-height: 85px;
  max-height: 90px;
  padding: 5px;
  overflow: hidden;

  div p {
    display: block;
    height: 100px;
    max-height: 100px;
    width: 220px;
    max-width: 220px;
    font-size: 1.3rem;
    font-weight: 300;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    outline: none;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CheckBox = styled.input`
  width: 30px;
  height: 30px;
  margin: 0;
  cursor: pointer;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescriptionTitle = styled.h4`
  max-width: 220px;
  height: 1.9rem;
  font-weight: 800;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  align-items: center;
`;

export const CardUsers = styled.figure`
  img {
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }
`;

export const CardData = styled.div`
  background: #fff;
  border-radius: 2px;
  height: min-content;
  padding: 4px 6px;
  margin-left: auto;
  min-width: 90px;
  min-height: 18px;

  span {
    font-weight: bold;
  }
`;

export const CardButton = styled.button`
  background-color: var(--color-background);
  color: var(--color-primary-4);
  color: #8b4513;
  font-size: 1.6rem;
  font-weight: 700;
  margin-left: 10px;
  padding: 2px 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  position: absolute;
  top: 95%;
  transition: 0.2s;
  :hover {
    color: var(--complement-color-2);
    font-weight: 900;
    border-top: none;
    font-size: 2rem;
  }
  :active {
    opacity: 0.5;
  }
`;

export const Block = styled.div`
  position: absolute;
  top: 150px;
  left: 269px;
  pointer-events: auto;
`;

export const BlockedIcon = styled.img`
  width: 60px;
`;

export const ConnectCardRight = styled.button<{ active: any }>`
  position: absolute;
  top: 34%;
  left: 102%;
  width: 0;
  height: 0;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-left: 30px solid var(--color-primary-4);
  border-right: 0px solid transparent;
  outline: none;
  border-left: 30px solid ${({ active }) => (active ? '#FF8C00' : '#483D8B')};
  cursor: pointer;
  background: transparent;
  :hover {
    border-left: 30px solid #ff8c00;
  }
`;

export const ConnectCardLeft = styled.button<{ active: any }>`
  position: absolute;
  top: 34%;
  left: -35px;
  width: 0;
  height: 0;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-left: 00px solid transparent;
  border-right: 30px solid var(--color-primary-4);
  outline: none;
  border-right: 30px solid ${({ active }) => (active ? '#FF8C00' : '#483D8B')};
  cursor: pointer;
  background: transparent;
`;

export const FastCard = styled.div`
  position: absolute;
  z-index: 999999999;
  top: 186px;
  left: 0;
`;
