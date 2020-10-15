/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { icons } from '../../utils/importAll';
import { DefaultCardProps } from '../ComponentsInterface';
import FastCard from './fast-card';
import * as St from './styled';

const DefaultCard = ({
  card,
  user,
  showEditCard,
  setCurrentCard,
  setShowEditCard,
  onDragEndFunction,
  showMobileMenu,
  x,
  y,
  showWarning,
  setShowWarning,
  selectedCard,
  handleCheckBox,
  removeCard,
  creationCard,
  DoubleClick,
  className,
  id,
  blockCard,
  followCard,
  forceRerender,
  handleConnection,
  cardOne,
  cardTwo,
}: DefaultCardProps) => (
  <St.CardContainer onDoubleClick={DoubleClick} className={className}>
    <St.MotionBox
      drag
      onDrag={forceRerender}
      onDragStart={forceRerender}
      dragMomentum={false}
      onDragEnd={onDragEndFunction}
      style={{ x, y }}>
      <St.Editable blocked={card.data.blocked}>
        <St.Card id={`card${card.id}`} style={{ x, y }}>
          <St.CardInside>
            <St.AlertImg>
              {card.data.fastCard && card.data.fastCard.show && (
                <div className="tooltip">
                  <img
                    src={icons.warning}
                    onClick={() => setShowWarning(!showWarning)}
                    alt="warning"
                  />
                  <span className="tooltiptext">Possui um cartão rápido</span>
                </div>
              )}
            </St.AlertImg>
            <St.CardHeader>
              <St.MainTags>
                {card.data.tags.map((tag: any, key: number) => (
                  <St.Tag key={key} style={{ color: tag.color }}>
                    {tag.text}
                  </St.Tag>
                ))}
                <div>
                  <St.InfoIcons>
                    <div className="tooltip">
                      <img src={icons.description} alt="Have description" />
                      <span className="tooltiptext">Possui descrição</span>
                    </div>

                    {card.data.followers.length >= 1 && (
                      <div className="tooltip">
                        <img src={icons.eye} alt="Someone follow" />
                        <span className="tooltiptext">Seguindo</span>
                      </div>
                    )}
                  </St.InfoIcons>
                </div>
              </St.MainTags>

              <St.TimeExec>
                <div className="tooltip">
                  <span>{card.data.time.start.date}</span>
                  <span className="tooltiptext">Tempo Estimado</span>
                </div>
              </St.TimeExec>
            </St.CardHeader>
            <St.Description>
              <div>
                <div>
                  <St.DescriptionTitle>{card.data.title}</St.DescriptionTitle>
                </div>
                <div>
                  <p>{card.data.description}</p>
                </div>
              </div>
              <St.CheckBox
                onClick={handleCheckBox}
                type="checkbox"
                defaultChecked={card.data.checked}
              />
            </St.Description>
            <St.CardFooter>
              <St.CardUsers>
                <div className="tooltip">
                  <img src={user.image ? user.image : icons.user1} alt="user icon" />
                  <span className="tooltiptext">{user.name}</span>
                </div>
              </St.CardUsers>
              <St.CardData>
                <div className="tooltip">
                  <span>{card.data.time.finish.date}</span>
                  <span className="tooltiptext">Data de Entrega</span>
                </div>
              </St.CardData>
            </St.CardFooter>
          </St.CardInside>

          {selectedCard.connect && (
            <>
              <St.ConnectCardRight active={card.id === cardOne} onClick={handleConnection} />
              {/* <St.ConnectCardLeft active={card.id === cardOne} onClick={handleConnection} /> */}
            </>
          )}

          {showWarning && card.data.fastCard && <FastCard fastCard={card.data.fastCard} />}

          {selectedCard.removeCard ? (
            <St.CardButton onClick={removeCard}>remover</St.CardButton>
          ) : (
            selectedCard.fastCard &&
            !card.data.fastCard && (
              <St.CardButton onClick={creationCard}>cartão rápido</St.CardButton>
            )
          )}

          {selectedCard.followedCard && card.data.followers.length === 0 && (
            <St.CardButton onClick={() => followCard(true)}>seguir</St.CardButton>
          )}

          {selectedCard.followedCard && card.data.followers.length >= 1 && (
            <St.CardButton onClick={() => followCard(false)}>deixar de seguir</St.CardButton>
          )}

          {selectedCard.blockedCard && !card.data.blocked && (
            <St.CardButton onClick={() => blockCard(true)}>bloquear</St.CardButton>
          )}

          {selectedCard.blockedCard && card.data.blocked && (
            <St.CardButton id="unlock" onClick={() => blockCard(false)}>
              desbloquear
            </St.CardButton>
          )}

          {card.data.blocked && (
            <St.Block>
              <div className="tooltip">
                <St.BlockedIcon src={icons.blocked} />
                <span className="tooltiptext">Bloqueado</span>
              </div>
            </St.Block>
          )}
        </St.Card>
      </St.Editable>
    </St.MotionBox>
  </St.CardContainer>
);

export default DefaultCard;
