import { ToolTip } from 'components';
import React from 'react';
import { icons } from 'utils';

import { DefaultCardProps } from '../ComponentsInterface';
import PageTransition from '../PageTransition';
import FastCard from './FastCard';
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
  loading,
  fastCard: { title, setTitle, subtitle, setSubtitle, time, setTime, saveFastCard },
}: DefaultCardProps) => (
  <St.CardContainer onDoubleClick={DoubleClick} className={className}>
    <St.MotionBox
      drag
      onDrag={forceRerender}
      onDragStart={forceRerender}
      dragMomentum={false}
      onDragEnd={onDragEndFunction}
      style={{ x, y }}>
      {loading && (
        <PageTransition>
          <St.Editable blocked={card.data.blocked}>
            <St.Card id={`card${card.id}`} style={{ x, y }}>
              <St.CardInside>
                <St.AlertImg>
                  {card.data.fastCard && card.data.fastCard.show && (
                    <ToolTip tooltiptext=" Possui um cartão rápido">
                      <img
                        src={icons.warning}
                        onClick={() => {
                          saveFastCard();
                          setShowWarning(!showWarning);
                        }}
                        alt="warning"
                      />
                    </ToolTip>
                  )}
                </St.AlertImg>
                <St.CardHeader>
                  <St.MainTags>
                    <ToolTip tooltiptext="tags">
                      {card.data.tags.map((tag: any, key: number) => (
                        <St.Tag key={key} style={{ color: tag.color }}>
                          {tag.text}
                        </St.Tag>
                      ))}
                    </ToolTip>

                    <div>
                      <St.InfoIcons>
                        <ToolTip tooltiptext="Possui descrição">
                          <img src={icons.description} alt="Have description" />
                        </ToolTip>

                        {card.data.followers.length >= 1 && (
                          <ToolTip tooltiptext="Seguindo">
                            <img src={icons.eye} alt="Someone follow" />
                          </ToolTip>
                        )}
                      </St.InfoIcons>
                    </div>
                  </St.MainTags>

                  <St.TimeExec>
                    <ToolTip tooltiptext="Tempo Estimado">
                      <span>{card.data.time.done.hour}</span>
                    </ToolTip>
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
                  <ToolTip tooltiptext="Realizar Check-in">
                    <St.CheckBox
                      onClick={handleCheckBox}
                      type="checkbox"
                      defaultChecked={card.data.checked}
                    />
                  </ToolTip>
                </St.Description>
                <St.CardFooter>
                  <St.CardUsers>
                    <ToolTip tooltiptext={user.name}>
                      <img src={user.image ? user.image : icons.user1} alt="user icon" />
                    </ToolTip>
                  </St.CardUsers>
                  <St.CardData>
                    <ToolTip tooltiptext="Data de Entrega">
                      <span>{card.data.time.finish.date}</span>
                    </ToolTip>
                  </St.CardData>
                </St.CardFooter>
              </St.CardInside>

              {selectedCard.connect && (
                <>
                  <St.ConnectCardRight active={card.id === cardOne} onClick={handleConnection} />
                </>
              )}

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
                  <ToolTip tooltiptext="Bloqueado">
                    <St.BlockedIcon src={icons.blocked} />
                  </ToolTip>
                </St.Block>
              )}
              <St.FastCard>
                {showWarning && card.data.fastCard && (
                  <FastCard
                    title={title}
                    setTitle={setTitle}
                    subtitle={subtitle}
                    setSubtitle={setSubtitle}
                    time={time}
                    setTime={setTime}
                  />
                )}
              </St.FastCard>
            </St.Card>
          </St.Editable>
        </PageTransition>
      )}
    </St.MotionBox>
  </St.CardContainer>
);

export default DefaultCard;
