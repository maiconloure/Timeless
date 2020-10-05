import React, { useState } from 'react';
import { icons } from '../../utils/importAll';

import {
  WriteableContent,
  WriteableTop,
  WriteableBox,
  ContentContainer,
  Main,
  Labels,
  LabelTitle,
  IdLabel,
  HourglassLabel,
  Icon,
  ClockLabel,
  ActionLabels,
  IconSmall,
  FeedbackButton,
  ChecklistContainer,
  Checklist,
  ChecklistTitle,
  ChecklistBox,
} from './style';

export default function Content() {
  return (
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
  );
}
