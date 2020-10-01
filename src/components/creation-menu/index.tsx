import React from 'react';
import styled from 'styled-components';

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
          <img src="" onClick={groupButton} />
          <img src="" onClick={createCardButton} />
          <img src="" onClick={createFasterCardButton} />
          <img src="" onClick={createWarningCardButton} />
          <img src="" onClick={removeCardButton} />
        </MenuOptions>
      </MenuSection>
      <MenuSection>
        <SectionTitle>
          <h4>Ferramentas</h4>
        </SectionTitle>
        <MenuOptions>
          <img src="" onClick={createTextButton} />
          <img src="" onClick={connectArrowButton} />
          <img src="" onClick={pinCardButton} />
          <img src="" onClick={blockCardButton} />
        </MenuOptions>
      </MenuSection>
    </Menu>
  );
};

export default CreationMenu;

const Menu = styled.div`
  background-color: var(--color-background);
  border: 1px solid black;
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
    background-color: red;
  }
`;
