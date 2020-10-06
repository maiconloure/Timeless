/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';

import { CardDataInterface } from '../../redux/actions/interface.action';
import { icons } from '../../utils/importAll';
import FastCard from './fast-card';

const DefaultCard = ({ data }: { data: CardDataInterface }) => {
  const [showWarning, setShowWarning] = useState(false);

  return (
    <>
      <Card>
        <CardInside>
          <AlertImg>
            {data.fastCard && data.fastCard.show && (
              <img src={icons.warning} onClick={() => setShowWarning(!showWarning)} alt="warning" />
            )}
          </AlertImg>
          <CardHeader>
            <div>
              {data.tags.map((tag: any, key: number) => (
                <span
                  key={key}
                  contentEditable
                  suppressContentEditableWarning
                  style={{ color: tag.color }}>
                  {tag.text}
                </span>
              ))}
            </div>
            <div>
              <InfoIcons>
                <img src={icons.description} alt="Have description" />
                <img src={icons.eye} alt="Someone follow" />
              </InfoIcons>
            </div>
            <div>
              <span>{data.time.start.date}</span>
            </div>
          </CardHeader>
          <Description>
            <div>
              <div>
                <DescriptionTitle contentEditable suppressContentEditableWarning>
                  {data.title}
                </DescriptionTitle>
              </div>
              <div>
                <p>{data.description}</p>
              </div>
            </div>
            <div>
              <input type="checkbox" />
            </div>
          </Description>
          <CardFooter>
            <CardUsers>
              <img src={icons.user1} alt="user icon" />
            </CardUsers>
            <CardData>
              <span>{data.time.finish.date}</span>
            </CardData>
          </CardFooter>
        </CardInside>
      </Card>
      {showWarning && data.fastCard && <FastCard fastCard={data.fastCard} />}
    </>
  );
};

export default DefaultCard;

const Card = styled.div`
  background-color: var(--color-background);
  color: var(--color-primary-4);
  box-sizing: border-box;
  width: 100%;
  min-width: 300px;
  max-width: 350px;
  border-radius: 5px;
  position: relative;
  margin-top: 30px;
  /* box-shadow: 1px 1px 16px 6px gray; */

  [contenteditable='true'] {
    cursor: pointer;
    text-overflow: ellipsis;
  }

  [contenteditable='true']:focus {
    background-color: #fff;
    padding: 2px 10px;
    font-size: 15px;
    margin: 2px;
    outline: none;
    border-radius: 4px;
  }
`;

const CardInside = styled.div`
  padding: 15px;
  font-family: 'Inter', sans-serif;
  margin: 0 4px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 1.8rem;
    font-weight: bold;
    font-style: italic;
    width: 100px;
    height: 1.9rem;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

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
    height: 40px;
    width: 40px;
  }
`;

const CardData = styled.div`
  background: #fff;
  border-radius: 2px;
  height: min-content;
  padding: 4px 6px;
  span {
    font-weight: bold;
    font-style: italic;
  }
`;
