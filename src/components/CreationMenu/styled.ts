import styled from 'styled-components';

export const Menu = styled.div`
  background: #8ac0e9;
  width: 260px;
  max-width: 400px;
  color: #fff;
  padding-bottom: 1px;

  &:active {
    cursor: grabbing;
  }
`;

export const MenuSection = styled.div`
  background-color: #fff;
  margin: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const SectionTitle = styled.div`
  font-family: Fira Code;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.6rem;
  background-color: var(--color-primary-4);
  padding: 2px 4px;
  border-radius: 2px 2px 0px 0px;

  h4 {
    margin: 2px;
  }
`;

export const MenuTitle = styled.div`
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

export const MenuOptions = styled.div<{ selectedCard: any }>`
  display: flex;
  align-items: center;
  img {
    cursor: pointer;
    width: 55px;
    padding: 4px;
    margin: 0 2px;
    cursor: pointer;
  }

  img#card:active {
    -webkit-filter: drop-shadow(5px 5px 5px gray);
    filter: drop-shadow(5px 5px 5px gray);
    transform: scale(1.2);
  }

  ${(props) =>
    props.selectedCard.removeCard &&
    ` img#trash {
      -webkit-filter: drop-shadow(5px 5px 5px gray);
      filter: drop-shadow(5px 5px 5px gray);
      transform: scale(1.2);
  }`}

  ${(props) =>
    props.selectedCard.fastCard &&
    ` img#fast {
      -webkit-filter: drop-shadow(5px 5px 5px gray);
      filter: drop-shadow(5px 5px 5px gray);
      transform: scale(1.2);
  }`}

${(props) =>
    props.selectedCard.addText &&
    ` img#addText {
      -webkit-filter: drop-shadow(5px 5px 5px gray);
      filter: drop-shadow(5px 5px 5px gray);
      transform: scale(1.2);
  }`}

${(props) =>
    props.selectedCard.connect &&
    ` img#connect {
      -webkit-filter: drop-shadow(5px 5px 5px gray);
      filter: drop-shadow(5px 5px 5px gray);
      transform: scale(1.2);
  }`}

${(props) =>
    props.selectedCard.followedCard &&
    ` img#pin {
      -webkit-filter: drop-shadow(5px 5px 5px gray);
      filter: drop-shadow(5px 5px 5px gray);
      transform: scale(1.2);
  }`}
  

${(props) =>
    props.selectedCard.blockedCard &&
    ` img#blocked {
      -webkit-filter: drop-shadow(5px 5px 5px gray);
      filter: drop-shadow(5px 5px 5px gray);
      transform: scale(1.2);
  }`}
`;
