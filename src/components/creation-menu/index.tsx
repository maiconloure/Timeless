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
} from '../../assets';

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
        <span>o</span>
        <span>o</span>
        <span>o</span>
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
  width: 300px;
  height: 200px;
`;

const MenuSection = styled.div`
  background-color: #fff;
  margin-top: 12px;
`;

const SectionTitle = styled.div`
  background-color: var(--color-primary-4);
`;

const MenuTitle = styled.div`
  background-color: var(--color-primary-1);
`;

const MenuOptions = styled.div`
  img {
    width: 55px;
    height: 50px;
    /* background-color: red; */
  }
`;
