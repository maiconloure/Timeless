import React from 'react';

import { icons } from '../../utils/importAll';
import * as ST from './styled';

interface CreationMenuProps {
  selectedCard: {
    removeCard: boolean;
    fastCard: boolean;
  };
  groupButton: () => void;
  createCardButton: () => void;
  createFasterCardButton: () => void;
  removeCardButton: () => void;
  createTextButton: () => void;
  connectArrowButton: () => void;
  pinCardButton: () => void;
  blockCardButton: () => void;
  className: string;
}

const CreationMenu = ({
  selectedCard,
  groupButton,
  createCardButton,
  createFasterCardButton,
  removeCardButton,
  createTextButton,
  connectArrowButton,
  pinCardButton,
  blockCardButton,
  className,
}: CreationMenuProps) => {
  return (
    <ST.Menu className={className}>
      <ST.MenuTitle>
        <span />
        <span />
        <span />
      </ST.MenuTitle>

      <ST.MenuSection>
        <ST.SectionTitle>
          <h4>OBJETOS</h4>
        </ST.SectionTitle>

        <ST.MenuOptions selectedCard={selectedCard}>
          <div className="tooltip">
            <img id="group" src={icons.group} onClick={groupButton} alt="group" />
            <span className="tooltiptext">Agrupar cartões</span>
          </div>

          <div className="tooltip">
            <img id="card" src={icons.card} onClick={createCardButton} alt="create" />
            <span className="tooltiptext">Cartão padrão</span>
          </div>

          <div className="tooltip">
            <img id="fast" src={icons.fastCard} onClick={createFasterCardButton} alt="fast" />
            <span className="tooltiptext">Cartão Rápido</span>
          </div>

          <div className="tooltip">
            <img id="trash" src={icons.trash} onClick={removeCardButton} alt="remove" />
            <span className="tooltiptext">Habilitar lixeira</span>
          </div>
        </ST.MenuOptions>
      </ST.MenuSection>

      <ST.MenuSection>
        <ST.SectionTitle>
          <h4>FERRAMENTAS</h4>
        </ST.SectionTitle>

        <ST.MenuOptions selectedCard={selectedCard}>
          <div className="tooltip">
            <img id="addText" src={icons.addText} onClick={createTextButton} alt="text" />
            <span className="tooltiptext">Adicionar Texto</span>
          </div>

          <div className="tooltip">
            <img id="connect" src={icons.connect} onClick={connectArrowButton} alt="connect" />
            <span className="tooltiptext">Conectar cartão</span>
          </div>

          <div className="tooltip">
            <img id="pin" src={icons.pin} onClick={pinCardButton} alt="pin/follow" />
            <span className="tooltiptext">Seguir cartão</span>
          </div>

          <div className="tooltip">
            <img id="blocked" src={icons.blocked} onClick={blockCardButton} alt="block" />
            <span className="tooltiptext">Bloquear cartão</span>
          </div>
        </ST.MenuOptions>
      </ST.MenuSection>
    </ST.Menu>
  );
};

export default CreationMenu;
