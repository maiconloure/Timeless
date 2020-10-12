import React from 'react';

import { icons } from '../../utils/importAll';
import * as St from './styled';

const Content = () => (
  <St.ContentContainer>
    <St.Main>
      <St.WriteableContent>
        <St.WriteableTop contentEditable="true" suppressContentEditableWarning>
          DESCRIÇÃO
        </St.WriteableTop>
        <St.WriteableBox contentEditable="true" suppressContentEditableWarning>
          ...
        </St.WriteableBox>
      </St.WriteableContent>
      <St.Labels>
        <St.TimingLabel>
          <St.LabelTitle>ETIQUETAS</St.LabelTitle>
          <St.IdLabel>#Sprint1</St.IdLabel>
          <St.HourglassLabel>
            <St.Icon src={icons.hourglass} alt="Ícone de Ampulheta" onClick={() => {}} />
            <span>
              Tempo Execução{' '}
              <strong
                contentEditable="true"
                suppressContentEditableWarning
                style={{ color: 'red' }}>
                00:00
              </strong>
            </span>
          </St.HourglassLabel>
          <St.ClockLabel>
            <St.Icon src={icons.clock} alt="Ícone de Cronômetro" onClick={() => {}} />
            <span>
              Data Entrega <strong style={{ color: '#ffbe00' }}>00/00/00</strong>
            </span>
          </St.ClockLabel>
        </St.TimingLabel>
        <St.ActionDiv>
          <St.LabelTitle>AÇÕES</St.LabelTitle>
          <St.ActionLabels>
            <St.IconSmall src={icons.signOut} alt="Ícone de Porta" onClick={() => {}} />
            <span>Mover</span>
          </St.ActionLabels>
          <St.ActionLabels>
            <St.IconSmall src={icons.copy} alt="Ícone de Copiar" onClick={() => {}} />
            <span>Copiar</span>
          </St.ActionLabels>
          <St.ActionLabels>
            <St.IconSmall src={icons.deleteCard} alt="Ícone de Excluir" onClick={() => {}} />
            <span>Excluir</span>
          </St.ActionLabels>
          <St.FeedbackButton>feedback</St.FeedbackButton>
        </St.ActionDiv>
      </St.Labels>
    </St.Main>
    <St.ChecklistContainer>
      <St.Checklist>
        <St.ChecklistTitle>
          <St.IconSmall src={icons.checkboxList} alt="Ícone de Lista" />
          <span>Checklist</span>
        </St.ChecklistTitle>
        <St.ChecklistBox>Teste</St.ChecklistBox>
      </St.Checklist>
    </St.ChecklistContainer>
  </St.ContentContainer>
);

export default Content;
