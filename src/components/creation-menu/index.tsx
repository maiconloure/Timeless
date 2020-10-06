import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { createCardAPI, deleteCardAPI, updateCardAPI } from '../../redux/actions/cards.action';
import * as Interface from '../../redux/actions/interface.action';
import { RootStoreType } from '../../redux/store/store';
import { icons } from '../../utils/importAll';
import card from './empty-card.json';

const CreationMenu = ({
  setSelectedCard,
  selectedCard,
}: {
  setSelectedCard: React.Dispatch<
    React.SetStateAction<{
      removeCard: boolean;
      fastCard: boolean;
    }>
  >;
  selectedCard: {
    removeCard: boolean;
    fastCard: boolean;
  };
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStoreType) => state.service.user);
  const token = useSelector((state: RootStoreType) => state.service.token);
  const currentBoard = useSelector((state: RootStoreType) => state.boards.currentBoard);
  const cards = useSelector((state: RootStoreType) => state.cards.cards);
  const groupButton = () => {
    console.log('groupButton');
  };

  const createCardButton = () => {
    console.log('createCardButton');
    dispatch(createCardAPI({ currentBoard, token, user, card }));
  };

  const createFasterCardButton = () => {
    console.log('createFasterCardButton');
    setSelectedCard({ removeCard: false, fastCard: !selectedCard.fastCard });
  };

  const createWarningCardButton = () => {
    console.log('createWarningCardButton');
  };

  const removeCardButton = () => {
    console.log('removeCardButton');
    setSelectedCard({ fastCard: false, removeCard: !selectedCard.removeCard });
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
        <MenuOptions selectedCard={selectedCard}>
          <img id="group" src={icons.group} onClick={groupButton} alt="group" />
          <img id="card" src={icons.card} onClick={createCardButton} alt="create" />
          <img id="fastCard" src={icons.fastCard} onClick={createFasterCardButton} alt="fast" />
          <img id="warning" src={icons.warning} onClick={createWarningCardButton} alt="warning" />
          <img id="trash" src={icons.trash} onClick={removeCardButton} alt="remove" />
        </MenuOptions>
      </MenuSection>
      <MenuSection>
        <SectionTitle>
          <h4>FERRAMENTAS</h4>
        </SectionTitle>
        <MenuOptions selectedCard={selectedCard}>
          <img id="addText" src={icons.addText} onClick={createTextButton} alt="text" />
          <img id="connect" src={icons.connect} onClick={connectArrowButton} alt="connect" />
          <img id="pin" src={icons.pin} onClick={pinCardButton} alt="pin/follow" />
          <img id="blocked" src={icons.blocked} onClick={blockCardButton} alt="block" />
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
  /* box-shadow: 1px 1px 16px 6px gray; */
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

const MenuOptions = styled.div<{ selectedCard: any }>`
  img {
    cursor: pointer;
    width: 55px;
    padding: 4px;
    cursor: pointer;
  }

  ${(props) =>
    props.selectedCard.removeCard &&
    ` img#trash {
      -webkit-filter: drop-shadow(5px 5px 5px gray);
      filter: drop-shadow(5px 5px 5px gray);
      transform: scale(1.2);
  }`}
`;
