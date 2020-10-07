import { CardLeandro } from 'capstone-project';
import React from 'react';
import styled from 'styled-components';

import { icons } from '../../utils/importAll';

const BacklogCard = ({
  closeDataPass: { showEditCard, setShowEditCard, currentCard },
}: {
  closeDataPass: {
    showEditCard: boolean;
    setShowEditCard: React.Dispatch<React.SetStateAction<boolean>> | ((props: boolean) => void);
    currentCard: any;
  };
}) => {
  return (
    <CardLeandro
      title="Product Backlog"
      boxWidth="700px"
      avatars={[
        { image: icons.user1, user: 'Elaine Benes' },
        { image: icons.user2, user: 'Jerry Seinfeld' },
      ]}
      fontColor="#014D82"
      closeable
      closeDataPass={[showEditCard, setShowEditCard]}
      backgroundColor="rgba(58, 166, 242, 0.5)"
      borderDetails="none">
      <ContentContainer>
        <Main>
          <WriteableContent>
            <WriteableTop contentEditable="true" suppressContentEditableWarning>
              DESCRIÇÃO
            </WriteableTop>
            <WriteableBox contentEditable="true" suppressContentEditableWarning>
              ...
            </WriteableBox>
          </WriteableContent>
          <Labels>
            <LabelTitle>ETIQUETAS</LabelTitle>
            <IdLabel>#Sprint1</IdLabel>
            <HourglassLabel>
              <Icon src={icons.hourglass} alt="Ícone de Ampulheta" onClick={() => {}} />
              <span>
                Tempo Execução{' '}
                <strong
                  contentEditable="true"
                  suppressContentEditableWarning
                  style={{ color: 'red' }}>
                  00:00
                </strong>
              </span>
            </HourglassLabel>
            <ClockLabel>
              <Icon src={icons.clock} alt="Ícone de Cronômetro" onClick={() => {}} />
              <span>
                Data Entrega <strong style={{ color: '#ffbe00' }}>00/00/00</strong>
              </span>
            </ClockLabel>
            <LabelTitle>AÇÕES</LabelTitle>
            <ActionLabels>
              <IconSmall src={icons.signOut} alt="Ícone de Porta" onClick={() => {}} />
              <span>Mover</span>
            </ActionLabels>
            <ActionLabels>
              <IconSmall src={icons.copy} alt="Ícone de Copiar" onClick={() => {}} />
              <span>Copiar</span>
            </ActionLabels>
            <ActionLabels>
              <IconSmall src={icons.deleteCard} alt="Ícone de Excluir" onClick={() => {}} />
              <span>Excluir</span>
            </ActionLabels>
            <FeedbackButton>feedback</FeedbackButton>
          </Labels>
        </Main>
        <ChecklistContainer>
          <Checklist>
            <ChecklistTitle>
              <IconSmall src={icons.checkboxList} alt="Ícone de Lista" />
              <span>Checklist</span>
            </ChecklistTitle>
            <ChecklistBox>Teste</ChecklistBox>
          </Checklist>
        </ChecklistContainer>
      </ContentContainer>
    </CardLeandro>
  );
};

export default BacklogCard;

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

  span {
    strong {
      outline: none;
      width: 50px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
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
