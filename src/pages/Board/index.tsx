import { PageTransition, FeedbackButton, MembersBox } from 'components';
import * as Container from 'containers';
import React from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import Xarrow from 'react-xarrows';

import * as Interface from '../../redux/actions/interface.action';
import 'react-toastify/dist/ReactToastify.css';
import { BoardProps } from '../PageInterface';
import * as St from './styled';

const Board = ({
  data: {
    currentCard,
    showEditUser,
    showEditCard,
    selectedCard,
    showEditModal,
    showBoardModal,
    setCurrentCard,
    setShowEditUser,
    setShowEditCard,
    setSelectedCard,
    setShowEditModal,
    setShowBoardModal,
    toggleMenu,
  },
  connection: {
    cardOne,
    setCardOne,
    cardTwo,
    setCardTwo,
    cardSelected,
    setCardSelected,
    confirmConnection,
    setconfirmConnection,
  },
  values: { cards, history },
  forceRerender,
  lines,
  setLines,
  defProps,
  state,
  user,
  token,
  backgroundImage,
  setBackground,
}: BoardProps) => (
  <PageTransition>
    <St.Notification>
      <ToastContainer transition={Slide} />
    </St.Notification>
    <St.BoardPage backgroundImage={backgroundImage} id="canvas">
      <MembersBox UserImage={user.image} />
      <FeedbackButton />
      <St.Info>
        <p>Aplicação/servidor em fase de desenvolvimento.</p>
        <p>Os dados salvados serão perdidos após 24horas.</p>
      </St.Info>
      <Container.SidePushMenuContainer setBackground={setBackground} />

      <Container.TopBarContainer
        data={{
          showEditUser,
          showBoardModal,
          setShowEditUser,
          setShowBoardModal,
        }}
        history={history}
      />

      <Container.EditUserModalContainer
        data={{
          showMobileMenu: false,
          showEditUser,
          setShowEditUser,
          setShowEditModal,
        }}
        history={history}
      />

      <Container.EditBoardModalContainer
        data={{
          showMobileMenu: false,
          showEditModal,
          showBoardModal,
          setShowEditModal,
          setShowBoardModal,
        }}
        history={history}
        lines={lines}
        setLines={setLines}
      />

      <St.DragScroll
        ignoreElements=".DefaultCard, .CardContainer, .FeedContainer, .CreationMenu"
        hideScrollbars={false}
        className="container">
        <St.InnerBoardContainer>
          <St.SideMenuContainer drag dragMomentum={false}>
            <Container.CreationMenuContainer
              className="CreationMenu"
              toggleMenu={toggleMenu}
              setSelectedCard={setSelectedCard}
              selectedCard={selectedCard}
              history={history}
              lines={lines}
              setLines={setLines}
            />
          </St.SideMenuContainer>

          <St.FeedBox drag dragMomentum={false} className="FeedContainer">
            <Container.FeedContainer />
          </St.FeedBox>

          {cards.map((card: Interface.CardInterface, key: number) => (
            <React.Fragment key={key}>
              <Container.DefaultCardContainer
                id={`card${key}`}
                className="DefaultCard"
                card={card}
                showEditCard={showEditCard}
                setCurrentCard={setCurrentCard}
                setShowEditCard={setShowEditCard}
                selectedCard={selectedCard}
                history={history}
                forceRerender={forceRerender}
                lines={lines}
                setLines={setLines}
                connection={{
                  cardOne,
                  cardTwo,
                  setCardOne,
                  setCardTwo,
                  cardSelected,
                  setCardSelected,
                  confirmConnection,
                  setconfirmConnection,
                }}
              />
            </React.Fragment>
          ))}
          <PageTransition>
            {lines.length >= 1 &&
              lines.map((line: any, i: number) => (
                <div id={`line${i}`} key={i}>
                  {line.start && line.end && (
                    <Xarrow
                      start={line.start}
                      end={line.end}
                      strokeWidth={8}
                      {...{ ...defProps, ...state }}
                    />
                  )}
                </div>
              ))}
          </PageTransition>

          {currentCard.data && showEditCard && (
            <St.EditCard
              style={{
                x: currentCard.position && currentCard.position.x,
                y: currentCard.position && currentCard.position.y,
              }}
              className="CardContainer">
              <Container.BacklogCardContainer
                data={{ showEditCard, setShowEditCard, currentCard, user }}
                lines={lines}
                setLines={setLines}
                token={token}
                history={history}
              />
            </St.EditCard>
          )}
        </St.InnerBoardContainer>
      </St.DragScroll>
    </St.BoardPage>
  </PageTransition>
);

export default Board;
