import React from 'react';
import { icons } from 'utils';

import * as St from './styled';

const FormataStringData = (data: any) => {
  var dia = data.split('/')[0];
  var mes = data.split('/')[1];
  var ano = data.split('/')[2];
  return ano + '-' + ('0' + mes).slice(-2) + '-' + ('0' + dia).slice(-2);
};

interface ContentProps {
  currentCard: any;
  user: any;
  currentTags: any;
  getTags: any;
  getDescription: any;
  currentDescription: any;
  getDate: any;
  getTime: any;
  currentDate: any;
  currentTime: any;
  removeCard: any;
  duplicateCard: any;
}

const Content = ({
  currentCard,
  user,
  currentTags,
  getTags,
  getDescription,
  currentDescription,
  getDate,
  getTime,
  currentDate,
  currentTime,
  removeCard,
  duplicateCard,
}: ContentProps) => (
  <St.ContentContainer>
    <St.Main>
      <St.WriteableContent>
        <St.WriteableTop>
          <p>DESCRIÇÃO</p>
        </St.WriteableTop>
        <St.WriteableBox onChange={getDescription} value={currentDescription} />
      </St.WriteableContent>
      <St.Labels>
        <St.TimingLabel>
          <St.LabelTitle>ETIQUETAS</St.LabelTitle>
          <St.IdLabel value={currentTags} onChange={getTags} />
          <St.HourglassLabel>
            <St.Icon src={icons.hourglass} alt="Ícone de Ampulheta" onClick={() => {}} />
            <span>
              Tempo Execução{' '}
              <input
                type="time"
                style={{ width: '90px', fontSize: '1rem' }}
                name="time"
                value={currentTime || ''}
                onChange={getTime}
              />
            </span>
          </St.HourglassLabel>
          <St.ClockLabel>
            <St.Icon src={icons.clock} alt="Ícone de Cronômetro" onClick={() => {}} />
            <span>
              Data Entrega
              <input
                type="date"
                style={{ width: '90px', fontSize: '1rem' }}
                name="date"
                value={FormataStringData(currentDate) || ''}
                onChange={getDate}
              />
            </span>
          </St.ClockLabel>
        </St.TimingLabel>
        <St.ActionDiv>
          <St.LabelTitle>AÇÕES</St.LabelTitle>
          <St.ActionLabels>
            <St.IconSmall src={icons.signOut} alt="Ícone de Porta" onClick={() => {}} />
            <span>Mover</span>
          </St.ActionLabels>
          <St.ActionLabels onClick={duplicateCard}>
            <St.IconSmall src={icons.copy} alt="Ícone de Copiar" onClick={() => {}} />
            <span>Duplicar</span>
          </St.ActionLabels>
          <St.ActionLabels onClick={removeCard}>
            <St.IconSmall src={icons.deleteCard} alt="Ícone de Excluir" />
            <span>Excluir</span>
          </St.ActionLabels>
        </St.ActionDiv>
      </St.Labels>
    </St.Main>
  </St.ContentContainer>
);

export default Content;
