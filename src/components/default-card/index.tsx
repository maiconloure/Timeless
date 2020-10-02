import React from 'react';
import styled from 'styled-components';

import {
  User01Img,
  EyeImg,
  DescriptionImg,
  User02Img,
  User03Img,
  AlerterImg,
} from '../../assets/card-logos.js';

const DefaultCard = () => {
  return (
    <Card>
      <CardInside>
        <CardHeader>
          <AlertImg>
            <img src={AlerterImg} />
          </AlertImg>
          <div>
            <span contentEditable>#sprint1</span>
          </div>
          <div>
            <InfoIcons>
              <img src={DescriptionImg} />
              <img src={EyeImg} />
            </InfoIcons>
          </div>
          <div>
            <span>00:00</span>
          </div>
        </CardHeader>
        <Description>
          <div>
            <div>
              <h4 contentEditable>Timeless, Board Principal</h4>
            </div>
            <div>
              <p>
                Construção do prototipo do front-end do board principal, com figma.Construção do
                prototipo do front-end do board principal, com figma.Construção do prototipo do
                front-end do board principal, com figma.Construção do prototipo do front-end do
              </p>
            </div>
          </div>
          <div>
            <input type="checkbox" />
          </div>
        </Description>
        <CardFooter>
          <CardUsers>
            <img src={User01Img} />
          </CardUsers>
          <CardData>
            <span>00/00</span>
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

  border: 1px solid black;
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
    max-width: 25ch;
  }
`;

const AlertImg = styled.span`
  position: absolute;
  top: -30px;
  left: 0px;
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
    /* text-overflow: ellipsis; */
  }
  div input[type='checkbox'] {
    transform: scale(2);
    margin: 10px;
    cursor: pointer;
  }
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
