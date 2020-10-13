import { History, LocationState } from 'history';
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ToastContainer, Slide } from 'react-toastify';
import Xarrow from 'react-xarrows';

import { PageTransition, FeedbackButton } from '../../components';
import * as Container from '../../containers';
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
  },
  values: { cards, history },
  forceRerender,
  lines,
}: BoardProps) => (
  <PageTransition>
    <St.Notification>
      <ToastContainer transition={Slide} />
    </St.Notification>
    <St.BoardPage id="canvas">
      <FeedbackButton />

      <Container.TopBarContainer
        data={{
          showBoardModal,
          setShowEditUser,
          setShowBoardModal,
        }}
        history={history}
      />

      <Container.EditUserModalContainer
        data={{
          showEditUser,
          setShowEditUser,
          setShowEditModal,
        }}
        history={history}
      />

      <Container.EditBoardModalContainer
        data={{
          showEditModal,
          showBoardModal,
          setShowEditModal,
          setShowBoardModal,
        }}
        history={history}
      />

      <St.DragScroll
        ignoreElements=".DefaultCard, .CardContainer, .FeedContainer, .CreationMenu"
        hideScrollbars={false}
        className="container">
        <St.InnerBoardContainer>
          <St.SideMenuContainer drag dragMomentum={false}>
            <Container.CreationMenuContainer
              className="CreationMenu"
              setSelectedCard={setSelectedCard}
              selectedCard={selectedCard}
              history={history}
            />
          </St.SideMenuContainer>

          <St.FeedBox drag dragMomentum={false} className="FeedContainer">
            <Container.FeedContainer />
          </St.FeedBox>
          {cards &&
            cards.map((card: Interface.CardInterface, key: number) => (
              <Container.DefaultCardContainer
                id={`card${key}`}
                className="DefaultCard"
                key={key}
                card={card}
                showEditCard={showEditCard}
                setCurrentCard={setCurrentCard}
                setShowEditCard={setShowEditCard}
                selectedCard={selectedCard}
                history={history}
                forceRerender={forceRerender}
              />
            ))}
            {cards.length > 1 && 
            <>{lines.map((line: any, i: number) => (
            <Xarrow key={i} {...line} />
          ))}
          </>}
          

          <St.CardContainer className="CardContainer">
            <Container.BacklogCardContainer data={{ showEditCard, setShowEditCard, currentCard }} />
          </St.CardContainer>
        </St.InnerBoardContainer>
      </St.DragScroll>
    </St.BoardPage>
  </PageTransition>
);

export default Board;
