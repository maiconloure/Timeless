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
          <h4>OBJETOS</h4>
        </SectionTitle>
        <MenuOptions>
          <img src={GroupImg} onClick={groupButton} alt="group" />
          <img src={CardImg} onClick={createCardButton} alt="create card" />
          <img src={FasterCardImg} onClick={createFasterCardButton} alt=" create fast card" />
          <img src={WarningCardImg} onClick={createWarningCardButton} alt="create warning card" />
          <img src={RemoveCardImg} onClick={removeCardButton} alt=" remove card" />
        </MenuOptions>
      </MenuSection>
      <MenuSection>
        <SectionTitle>
          <h4>FERRAMENTAS</h4>
        </SectionTitle>
        <MenuOptions>
          <img src={CreateTextImg} onClick={createTextButton} alt="create text box" />
          <img src={ArrowImg} onClick={connectArrowButton} alt="connect cards" />
          <img src={PinCardImg} onClick={pinCardButton} alt="pin/follow card" />
          <img src={BlockCardImg} onClick={blockCardButton} alt=" block card" />
        </MenuOptions>
      </MenuSection>
    </Menu>
  );
};

export default CreationMenu;

const Menu = styled.div`
  background: #8ac0e9;
  width: 300px;
  min-width: 320px;
  max-width: 400px;
  color: #fff;
  padding-bottom: 1px;
`;

const MenuSection = styled.div`
  background-color: #fff;
  margin: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const SectionTitle = styled.div`
  font-family: Fira Code;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.6rem;
  background-color: var(--color-primary-4);
  padding: 2px 4px;
  border-radius: 2px 2px 0px 0px;
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
    cursor: pointer;
    background-color: #f59439;
  }
  span:nth-child(2) {
    cursor: pointer;
    background-color: #0c395c;
  }
  span:nth-child(3) {
    cursor: pointer;
    background-color: #da0000;
  }
`;

const MenuOptions = styled.div`
  img {
    cursor: pointer;
    width: 55px;
    padding: 4px;
    cursor: pointer;
  }
`;
