import styled from 'styled-components';

export const FeedBackContainer = styled.div<{ showMobileMenu: boolean }>`
  z-index: 99;
  ${(props) =>
    !props.showMobileMenu &&
    `
      position: absolute;
      top: 58px;
      left: 10px;
  `}
  transition: 100ms;

  margin: 10px 0;

  .tooltip {
    &:hover .tooltiptext {
      visibility: visible;
    }
  }

  .tooltiptext {
    font: 500 1.5rem Inter;
    visibility: hidden;
    width: 100px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    padding: 4px 8px;

    /* Position the tooltip */
    position: absolute;
    z-index: 99999;
  }
`;

export const ConfirmFeedBack = styled.div`
  position: absolute;
  top: 50px;
  left: 55px;
  z-index: 99;
  background-color: #0190f5;
  width: 260px;
  height: 100px;
  padding: 8px 4px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 4px #4169e1;
  button {
    margin: 10px 5px;
  }
`;

export const Message = styled.p`
  font: 600 1.6rem Inter;
  color: #fff;
  margin: 0 4px;
`;

export const Buttons = styled.div``;
