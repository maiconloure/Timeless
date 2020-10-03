import { Button, CardLeandro, Title } from 'capstone-project';
import React, { useState } from 'react';
import styled from 'styled-components';

import hourglassIcon from '../../assets/icons/icons8-ampulheta-96.png';
import copyIcon from '../../assets/icons/icons8-copiar-96.png';
import clockIcon from '../../assets/icons/icons8-cronômetro-100.png';
import deleteIcon from '../../assets/icons/icons8-excluir-propriedade-96.png';
import listIcon from '../../assets/icons/icons8-lista-de-verificação-100.png';
import doorIcon from '../../assets/icons/icons8-sair-100.png';
import elaine from '../../images/elaine-avatar.jpg';
import jerry from '../../images/jerry-avatar.jpg';

export default function BacklogCard() {
  const [showCard, setShowCard] = useState(true);

  return (
    <CardLeandro
      title="Product Backlog"
      boxWidth="700px"
      avatars={[
        { image: elaine, user: 'Elaine Benes' },
        { image: jerry, user: 'Jerry Seinfeld' },
      ]}
      fontColor="#014D82"
      closeable
      data={[showCard, () => setShowCard(!showCard)]}
      backgroundColor="rgba(58, 166, 242, 0.5)"
      borderDetails="none">
      <ContentContainer>
        <Main>
          <WriteableContent>
            <WriteableTop contentEditable="true">...</WriteableTop>
            <WriteableBox contentEditable="true">...</WriteableBox>
          </WriteableContent>
          <Labels>
            <LabelTitle>ETIQUETAS</LabelTitle>
            <IdLabel>#Sprint1</IdLabel>
            <HourglassLabel>
              <Icon src={hourglassIcon} alt="Ícone de Ampulheta" onClick={() => {}} />
              <span>
                Tempo Execução <strong style={{ color: 'red' }}>2:00</strong>
              </span>
            </HourglassLabel>
            <ClockLabel>
              <Icon src={clockIcon} alt="Ícone de Cronômetro" onClick={() => {}} />
              <span>
                Data Entrega <strong style={{ color: '#ffbe00' }}>28/09/20</strong>
              </span>
            </ClockLabel>
            <LabelTitle>AÇÕES</LabelTitle>
            <ActionLabels>
              <IconSmall src={doorIcon} alt="Ícone de Porta" onClick={() => {}} />
              <span>Mover</span>
            </ActionLabels>
            <ActionLabels>
              <IconSmall src={copyIcon} alt="Ícone de Copiar" onClick={() => {}} />
              <span>Copiar</span>
            </ActionLabels>
            <ActionLabels>
              <IconSmall src={deleteIcon} alt="Ícone de Excluir" onClick={() => {}} />
              <span>Excluir</span>
            </ActionLabels>
            <FeedbackButton>feedback</FeedbackButton>
          </Labels>
        </Main>
        <ChecklistContainer>
          <Checklist>
            <ChecklistTitle>
              <IconSmall src={listIcon} alt="Ícone de Lista" />
              <span>Checklist</span>
            </ChecklistTitle>
            <ChecklistBox></ChecklistBox>
          </Checklist>
        </ChecklistContainer>
      </ContentContainer>
    </CardLeandro>
  );
}

const WriteableContent = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 75%;
  height: 100%;
  box-shadow: 8px 8px 12px 0 rgba(0, 0, 0, 0.4);
`;

const WriteableTop = styled.div`
  -moz-appearance: textfield-multiline;
  -webkit-appearance: textarea;
  padding: 10px;
  outline: none;
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  width: 100%;
  height: 8%;
  background: #f0f0f0;
  color: #555;
`;

const WriteableBox = styled.div`
  -moz-appearance: textfield-multiline;
  -webkit-appearance: textarea;
  padding: 10px;
  outline: none;
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  width: 100%;
  height: 92%;
  min-height: 100px;
  background: white;
  text-align: left;
  color: #333;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
`;

const Labels = styled.div`
  width: 22%;
  height: 100%;
`;

const LabelTitle = styled.h2`
  color: #014d82;
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  padding-top: 0;
  margin-top: 0;
  margin-bottom: 4px;
`;

const IdLabel = styled.div`
  width: 100%;
  background-color: #8b62fc;
  color: white;
  border-radius: 0px 8px 8px 0px;
  padding: 4px;

  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const HourglassLabel = styled.div`
  width: 100%;
  background-color: white;
  color: #014d82;
  border-radius: 0px 8px 8px 0px;
  padding: 4px;

  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 4px;

  &:hover {
    cursor: pointer;
  }
`;

const ClockLabel = styled.div`
  width: 100%;
  background-color: white;
  color: #014d82;
  border-radius: 0px 8px 8px 0px;
  padding: 4px;

  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const ActionLabels = styled.div`
  width: 100%;
  background-color: white;
  color: #014d82;
  border-radius: 0px 8px 8px 0px;
  padding: 4px;

  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const IconSmall = styled.img`
  width: 34px;
  height: 34px;
  margin-right: 4px;

  &:hover {
    cursor: pointer;
  }
`;

const FeedbackButton = styled.button`
  width: 100%;
  background-color: #cb9700;
  text-align: center;
  border: none;
  border-radius: 8px;
  padding: 8px;
  color: white;
  font-size: 2rem;
`;

const ChecklistContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 16px;
`;

const Checklist = styled.div`
  width: 75%;
  display: flex;
  flex-flow: column;
`;

const ChecklistTitle = styled.h2`
  color: #014d82;
  font-family: 'Blinker', sans-serif;
  font-size: 2.2rem;
  padding-top: 0;
  margin-top: 0;
  margin-bottom: 4px;

  display: flex;
  align-items: center;
`;

const ChecklistBox = styled.div`
  width: 100%;
  box-shadow: 8px 8px 12px 0 rgba(0, 0, 0, 0.4);
  background-color: white;
  height: 100px;
`;
