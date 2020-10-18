import React from 'react';
import styled from 'styled-components';
import { icons } from 'utils';

const MembersBox = ({ UserImage }: any) => (
  <MembersContainer>
    <Icon src={UserImage ? UserImage : icons.user1} alt="member-icon" />
    <Icon src={icons.user1} alt="member-icon" />
    <Icon src={icons.user2} alt="member-icon" />
  </MembersContainer>
);

export default MembersBox;

const MembersContainer = styled.div`
  position: absolute;
  z-index: 9999999999999;
  top: 90%;
  left: 1%;
  padding: 5px;
  background: #0207b7;
  width: 190px;
  height: 60px;
  border-radius: 4px;
`;

const Icon = styled.img`
  border-radius: 50%;
  width: 50px;
  margin: 0 4px;
`;
