import React from 'react';
import styled from 'styled-components';

import {
  GroupImg,
  CardImg,
  RemoveCardImg,
  CreateTextImg,
  FasterCardImg,
  PinCardImg,
  WarningCardImg,
  ArrowImg,
  BlockCardImg,
} from '../../assets/creation-menu-logos.js';

const CreationMenu = () => {
  const groupButton = () => {
    console.log('groupButton');
  };

  const createCardButton = () => {
    console.log('createCardButton');
  };

  const createFasterCardButton = () => {
    console.log('createFasterCardButton');
  };

  const createWarningCardButton = () => {
    console.log('createWarningCardButton');
  };

  const removeCardButton = () => {
    console.log('removeCardButton');
  };

  const createTextButton = () => {
    console.log('createTextButton');
  };

  const connectArrowButton = () => {
    console.log('conectArrowButton');
  };

  const pinCardButton = () => {
    console.log('pinCardButton');
  };

  const blockCardButton = () => {
    console.log('blockCardButton');
  };

  return (
    <Menu>
      <MenuTitle>
        <span />
        <span />
        <span />
      </MenuTitle>
      <MenuSection>
        <SectionTitle>
          <h4>Objetos</h4>
        </SectionTitle>
        <MenuOptions>
          <img src={GroupImg} onClick={groupButton} />
          <img src={CardImg} onClick={createCardButton} />
          <img src={FasterCardImg} onClick={createFasterCardButton} />
          <img src={WarningCardImg} onClick={createWarningCardButton} />
          <img src={RemoveCardImg} onClick={removeCardButton} />
        </MenuOptions>
      </MenuSection>
      <MenuSection>
        <SectionTitle>
          <h4>Ferramentas</h4>
        </SectionTitle>
        <MenuOptions>
          <img src={CreateTextImg} onClick={createTextButton} />
          <img src={ArrowImg} onClick={connectArrowButton} />
          <img src={PinCardImg} onClick={pinCardButton} />
          <img src={BlockCardImg} onClick={blockCardButton} />
        </MenuOptions>
      </MenuSection>
    </Menu>
  );
};

export default CreationMenu;

const Menu = styled.div`
  background-color: var(--color-background);
  width: 100%;
  min-width: 320px;
  max-width: 400px;
  color: #fff;
  padding-bottom: 1px;
  border: 1px solid gray;
`;

const MenuSection = styled.div`
  background-color: #fff;
  margin: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const SectionTitle = styled.div`
  background-color: var(--color-primary-4);
  padding: 2px 4px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const MenuTitle = styled.div`
  background-color: var(--color-primary-1);
  text-align: right;
  span {
    vertical-align: middle;
    display: inline-block;
    margin: 4px;
    height: 20px;
    width: 20px;
    border-radius: 100%;
  }

  span:nth-child(1) {
    background-color: #f59439;
  }
  span:nth-child(2) {
    background-color: #0c395c;
  }
  span:nth-child(3) {
    background-color: #da0000;
  }
`;

const MenuOptions = styled.div`
  img {
    width: 55px;
    height: 50px;
    padding: 4px;
    cursor: pointer;
  }
`;
