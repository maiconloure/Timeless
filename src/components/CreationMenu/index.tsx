import { ToolTip } from 'components';
import React from 'react';
import { icons } from 'utils';

import { CreationMenuProps } from '../ComponentsInterface';
import * as St from './styled';
const CreationMenu = ({
  selectedCard,
  groupButton,
  createCardButton,
  createFasterCardButton,
  removeCardButton,
  createTextButton,
  connectArrowButton,
  desconnectArrowButton,
  pinCardButton,
  blockCardButton,
  className,
  cards,
}: CreationMenuProps) => (
  <St.Menu className={className}>
    <St.MenuTitle>
      <span />
      <span />
      <span />
    </St.MenuTitle>

    <St.MenuSection>
      <St.SectionTitle>
        <h4>OBJETOS</h4>
      </St.SectionTitle>

      <St.MenuOptions selectedCard={selectedCard}>
        {/* <ToolTip tooltiptext="Agrupar cartões">
          <img id="group" src={icons.group} onClick={groupButton} alt="group" />
        </ToolTip> */}

        <ToolTip tooltiptext="Criar cartão">
          <img id="card" src={icons.card} onClick={createCardButton} alt="create" />
        </ToolTip>

        <ToolTip tooltiptext="Cartão Rápido">
          <img id="fast" src={icons.fastCard} onClick={createFasterCardButton} alt="fast" />
        </ToolTip>

        <ToolTip tooltiptext="Habilitar lixeira">
          <img id="trash" src={icons.trash} onClick={removeCardButton} alt="remove" />
        </ToolTip>
      </St.MenuOptions>
    </St.MenuSection>

    <St.MenuSection>
      <St.SectionTitle>
        <h4>FERRAMENTAS</h4>
      </St.SectionTitle>

      <St.MenuOptions selectedCard={selectedCard}>
        {/* <ToolTip tooltiptext="Adicionar Texto">
          <img id="addText" src={icons.addText} onClick={createTextButton} alt="text" />
        </ToolTip> */}

        <ToolTip tooltiptext="Habilitar modo conexão">
          <img id="connect" src={icons.connect} onClick={connectArrowButton} alt="connect" />
        </ToolTip>

        <ToolTip tooltiptext="Desfazer última conexão">
          <img id="card" src={icons.desconnect} onClick={desconnectArrowButton} alt="connect" />
        </ToolTip>

        <ToolTip tooltiptext="Seguir cartão">
          <img id="pin" src={icons.pin} onClick={pinCardButton} alt="pin/follow" />
        </ToolTip>

        <ToolTip tooltiptext="Bloquear cartão">
          <img id="blocked" src={icons.blocked} onClick={blockCardButton} alt="block" />
        </ToolTip>
      </St.MenuOptions>
    </St.MenuSection>
  </St.Menu>
);

export default CreationMenu;
