import React from 'react';
import styled from 'styled-components';

import { icons } from '../../utils/importAll';

const MembersBox = ({ UserImage }: any) => (
  <MembersContainer>
    <Icon src={UserImage} alt="member-icon" />
    <Icon src={icons.user1} alt="member-icon" />
    <Icon src={icons.user2} alt="member-icon" />
  </MembersContainer>
);

export default MembersBox;

const MembersContainer = styled.div`
  position: absolute;
  z-index: 9999999999;
  top: 90%;
  left: 1%;
  padding: 5px;
  background: #0207b7;
  width: 190px;
  height: 60px;
  border-radius: 4px;

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

const Icon = styled.img`
  border-radius: 50%;
  width: 50px;
  margin: 0 4px;
`;
