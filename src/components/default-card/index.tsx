import React from 'react';
import styled from 'styled-components';

import { User01Img, EyeImg, DescriptionImg } from '../../assets/card-logos.js';

interface PropsTag {
  color: string;
  text: string;
}

interface PropsCard {
  card: {
    title: string;
    time: {
      finish: string;
      start: string;
      done: string;
    };
    description: string;
    tags: PropsTag[];
  };
}

const DefaultCard = ({ card }: PropsCard) => {
  return (
    <Card>
      <CardInside>
        <CardHeader>
          <AlertImg>{/* <img src={AlerterImg} /> */}</AlertImg>
          <div>
            {card.tags.map((tag: PropsTag, key: number) => (
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
              <img src={DescriptionImg} alt="Have description" />
              <img src={EyeImg} alt="Someone follow" />
            </InfoIcons>
          </div>
          <div>
            <span>{card.time.start}</span>
          </div>
        </CardHeader>
        <Description>
          <div>
            <div>
              <DescriptionTitle contentEditable suppressContentEditableWarning>
                {card.title}
              </DescriptionTitle>
            </div>
            <div>
              <p>{card.description}</p>
            </div>
          </div>
          <div>
            <input type="checkbox" />
          </div>
        </Description>
        <CardFooter>
          <CardUsers>
            <img src={User01Img} alt="user icon" />
          </CardUsers>
          <CardData>
            <span>{card.time.finish}</span>
          </CardData>
        </CardFooter>
      </CardInside>
    </Card>
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
  z-index: 1000000000;
  img {
    width: 45px;
    height: 45px;
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
