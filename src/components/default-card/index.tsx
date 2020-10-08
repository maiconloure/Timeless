/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, useMotionValue } from 'framer-motion';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { deleteCardAPI, updateCardAPI } from '../../redux/actions/cards.action';
import { getNewAction } from '../../redux/actions/feed.action';
import { CardInterface } from '../../redux/actions/interface.action';
import { RootStoreType } from '../../redux/store/store';
import { fastCard } from '../../utils/defaults-json-cards';
import { icons } from '../../utils/importAll';
import FastCard from './fast-card';

interface DefaultCardProps {
  card: CardInterface;
  showEditCard: boolean;
  setCurrentCard: React.Dispatch<React.SetStateAction<object>>;
  setShowEditCard: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCard: {
    removeCard: boolean;
    fastCard: boolean;
  };
}

const DefaultCard = ({
  card,
  showEditCard,
  setCurrentCard,
  setShowEditCard,
  selectedCard,
}: DefaultCardProps) => {
  const dispatch = useDispatch();
  const x = useMotionValue(card.position.x);
  const y = useMotionValue(card.position.y);
  const token = useSelector((state: RootStoreType) => state.service.token);
  const user = useSelector((state: RootStoreType) => state.service.user);
  const [showWarning, setShowWarning] = useState(false);

  return (
    <CardContainer
      onDoubleClick={() => {
        if (!showEditCard) {
          setCurrentCard(card);
          setShowEditCard(true);
        }
      }}>
      <motion.div
        drag
        dragMomentum={false}
        onDragEnd={() => {
          dispatch(
            updateCardAPI({
              card: {
                ...card,
                position: {
                  x: x.get(),
                  y: y.get(),
                },
              },
              token,
            })
          );
        }}
        style={{ x, y }}>
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
                  <div
                    key={key}
                    contentEditable="true"
                    suppressContentEditableWarning
                    style={{ color: tag.color }}>
                    {tag.text}
                  </div>
                ))}
                <div>
                  <InfoIcons>
                    <img src={icons.description} alt="Have description" />
                    <img src={icons.eye} alt="Someone follow" />
                  </InfoIcons>
                </div>
              </MainTags>

              <TimeExec>
                <span>{card.data.time.start.date}</span>
              </TimeExec>
            </CardHeader>
            <Description>
              <div>
                <div>
                  <DescriptionTitle contentEditable suppressContentEditableWarning>
                    {card.data.title}
                  </DescriptionTitle>
                </div>
                <div>
                  <p>{card.data.description}</p>
                </div>
              </div>
              <div>
                <input
                  onClick={(evt: any) => {
                    if (evt.target.checked) {
                      dispatch(getNewAction(`${user.name} terminou o cartão ${card.data.title}.`));
                    }
                  }}
                  type="checkbox"
                />
              </div>
            </Description>
            <CardFooter>
              <CardUsers>
                <img src={user.image ? user.image : icons.user1} alt="user icon" />
              </CardUsers>
              <CardData>
                <span>{card.data.time.finish.date}</span>
              </CardData>
            </CardFooter>
          </CardInside>
        </Card>
        {showWarning && card.data.fastCard && <FastCard fastCard={card.data.fastCard} />}
        {selectedCard.removeCard ? (
          <CardButton
            onClick={() => {
              dispatch(getNewAction(`${user.name} acabou de remover um cartão.`));
              dispatch(deleteCardAPI({ card, token }));
            }}>
            remover
          </CardButton>
        ) : (
          selectedCard.fastCard && (
            <CardButton
              onClick={() => {
                dispatch(getNewAction(` ${user.name} acabou de criar um cartão rápido.`));
                dispatch(
                  updateCardAPI({
                    token,
                    card: { ...card, data: { ...card.data, ...fastCard } },
                  })
                );
              }}>
              cartão rápido
            </CardButton>
          )
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
  /* box-shadow: 0 8px 6px -6px gray; */

  :hover {
    cursor: pointer;
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
    cursor: pointer;
    text-overflow: ellipsis;
  }

  /* [contenteditable='true']:focus {
    background-color: #fff;
    padding: 2px 10px;
    font-size: 15px;
    margin: 2px;
    outline: none;
    border-radius: 4px;
  } */
`;

const CardInside = styled.div`
  padding: 12px 14px 5px 14px;
  font-family: 'Inter', sans-serif;
  /* margin: 0 4px; */
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
      font-style: italic;
      min-width: 80px;
      max-width: 140px;
      height: 2rem;
      display: -webkit-box;
      outline: none;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      background-color: var(--color-background);
    }
  }
`;

const TimeExec = styled.div``;

const AlertImg = styled.span`
  position: absolute;
  top: -30px;
  left: 0px;
  z-index: 99999;
  img {
    width: 45px;
    /* height: 45px; */
    cursor: pointer;
  }
`;

const InfoIcons = styled.figure`
  img {
    width: 25px;
    height: 25px;
    margin: 0 5px;
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
    /* font-style: italic; */
  }
`;
