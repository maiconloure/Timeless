/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import { CardInterface, UserInterface } from '../../redux/actions/interface.action';
import { icons } from '../../utils/importAll';
import FastCard from './fast-card';

interface DefaultCardProps {
  card: CardInterface;
  user: UserInterface;
  showEditCard: boolean;
  setCurrentCard: React.Dispatch<React.SetStateAction<object>>;
  setShowEditCard: React.Dispatch<React.SetStateAction<boolean>>;
  onDragEndFunction: () => void;
  x: any;
  y: any;
  showWarning: boolean;
  setShowWarning: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCard: {
    removeCard: boolean;
    fastCard: boolean;
  };
  handleCheckBox: any;
  removeCard: any;
  creationCard: any;
  DoubleClick: any;
}

const DefaultCard = ({
  card,
  user,
  showEditCard,
  setCurrentCard,
  setShowEditCard,
  onDragEndFunction,
  x,
  y,
  showWarning,
  setShowWarning,
  selectedCard,
  handleCheckBox,
  removeCard,
  creationCard,
  DoubleClick,
}: DefaultCardProps) => {
  return (
    <CardContainer onDoubleClick={DoubleClick}>
      <motion.div drag dragMomentum={false} onDragEnd={onDragEndFunction} style={{ x, y }}>
        <Card>
          <CardInside>
            <AlertImg>
              {card.data.fastCard && card.data.fastCard.show && (
                <img
                  src={icons.warning}
                  onClick={() => setShowWarning(!showWarning)}
                  alt="warning"
                />
              )}
            </AlertImg>
            <CardHeader>
              <MainTags>
                {card.data.tags.map((tag: any, key: number) => (
                  <Tag key={key} style={{ color: tag.color }}>
                    {tag.text}
                  </Tag>
                ))}

                <div>
                  <InfoIcons>
                    <div className="tooltip">
                      <img src={icons.description} alt="Have description" />
                      <span className="tooltiptext">Possui descrição</span>
                    </div>

                    <div className="tooltip">
                      <img src={icons.eye} alt="Someone follow" />
                      <span className="tooltiptext">Seguindo</span>
                    </div>
                  </InfoIcons>
                </div>
              </MainTags>

              <TimeExec>
                <div className="tooltip">
                  <span>{card.data.time.start.date}</span>
                  <span className="tooltiptext">Tempo Estimado</span>
                </div>
              </TimeExec>
            </CardHeader>
            <Description>
              <div>
                <div>
                  <DescriptionTitle>{card.data.title}</DescriptionTitle>
                </div>
                <div>
                  <p>{card.data.description}</p>
                </div>
              </div>
              <div>
                <input
                  onClick={handleCheckBox}
                  type="checkbox"
                  defaultChecked={card.data.checked}
                />
              </div>
            </Description>
            <CardFooter>
              <CardUsers>
                <div className="tooltip">
                  <img src={user.image ? user.image : icons.user1} alt="user icon" />
                  <span className="tooltiptext">{user.name}</span>
                </div>
              </CardUsers>
              <CardData>
                <div className="tooltip">
                  <span>{card.data.time.finish.date}</span>
                  <span className="tooltiptext">Data de Entrega</span>
                </div>
              </CardData>
            </CardFooter>
          </CardInside>
        </Card>
        {showWarning && card.data.fastCard && <FastCard fastCard={card.data.fastCard} />}
        {selectedCard.removeCard ? (
          <CardButton onClick={removeCard}>remover</CardButton>
        ) : (
          selectedCard.fastCard && <CardButton onClick={creationCard}>cartão rápido</CardButton>
        )}
      </motion.div>
    </CardContainer>
  );
};

export default DefaultCard;

const CardContainer = styled(motion.div)`
  position: absolute;
  /* top: calc(50% - 650px / 2); */
  /* left: calc(50% - 650px / 2); */
  width: 10px;
  height: 10px;
  z-index: 1;

  &:active {
    transition-delay: 0.5s;
    cursor: grabbing;
  }

  .tooltip {
    &:hover .tooltiptext {
      visibility: visible;
    }
  }

  .tooltiptext {
    font: 500 1.5rem Inter;
    visibility: hidden;
    min-width: 40px;
    max-width: 200px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    padding: 4px 8px;

    /* Position the tooltip */
    position: absolute;
    z-index: 99999;
  }
`;

const CardButton = styled.button`
  background-color: var(--color-background);
  color: var(--color-primary-4);
  margin-left: 10px;
  padding: 2px 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  position: absolute;
  bottom: -10px;

  :hover {
    color: var(--complement-color-2);
    font-weight: bold;
    border-top: none;
  }

  :active {
    opacity: 0.5;
  }
`;
const Card = styled.div`
  background-color: var(--color-background);
  color: var(--color-primary-4);
  box-sizing: border-box;
  width: 100%;
  min-width: 300px;
  max-width: 310px;
  border-radius: 4px;
  position: relative;
  box-shadow: 1px 1px 16px 4px rgba(25, 25, 112, 0.3);

  [contenteditable='true'] {
    text-overflow: ellipsis;
  }
`;

const CardInside = styled.div`
  padding: 12px 14px 5px 14px;
  font-family: 'Inter', sans-serif;
`;

const CardHeader = styled.div`
  display: flex;
  font: 700 1.8rem Inter;
`;

const MainTags = styled.div`
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

const Tag = styled.div`
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

const TimeExec = styled.div``;

const AlertImg = styled.span`
  position: absolute;
  top: -30px;
  left: 0px;
  z-index: 99999;
  img {
    width: 45px;
  }
`;

const InfoIcons = styled.figure`
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

const Description = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  min-height: 85px;
  padding: 5px;

  div p {
    display: block;
    max-height: 100px;
    font-size: 1.2rem;
    font-weight: 300;
    overflow: hidden;
  }
  div input[type='checkbox'] {
    transform: scale(2);
    margin: 10px;
    cursor: pointer;
  }
`;

const DescriptionTitle = styled.h4`
  width: 200px;
  height: 1.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  align-items: center;
`;

const CardUsers = styled.figure`
  img {
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }
`;

const CardData = styled.div`
  background: #fff;
  border-radius: 2px;
  height: min-content;
  padding: 4px 6px;
  margin-left: auto;

  span {
    font-weight: bold;
  }
`;
