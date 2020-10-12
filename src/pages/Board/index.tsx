/* eslint-disable @typescript-eslint/no-unused-vars */
import { History, LocationState } from 'history';
import React from 'react';
import { ToastContainer, Slide } from 'react-toastify';

import { PageTransition, Feedback } from '../../components';
import * as Container from '../../containers';
import * as Interface from '../../redux/actions/interface.action';
import 'react-toastify/dist/ReactToastify.css';
import * as St from './styled';

interface BoardProps {
  data: {
    currentCard: object;
    showEditUser: boolean;
    showEditCard: boolean;
    showEditModal: boolean;
    showBoardModal: boolean;
    setCurrentCard: React.Dispatch<React.SetStateAction<object>>;
    setShowEditUser: React.Dispatch<React.SetStateAction<boolean>>;
    setShowEditCard: React.Dispatch<React.SetStateAction<boolean>>;
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
    selectedCard: {
      group: boolean;
      removeCard: boolean;
      fastCard: boolean;
      addText: boolean;
      connect: boolean;
      pin: boolean;
      blockedCard: boolean;
    };
    setSelectedCard: React.Dispatch<
      React.SetStateAction<{
        group: boolean;
        removeCard: boolean;
        fastCard: boolean;
        addText: boolean;
        connect: boolean;
        pin: boolean;
        blockedCard: boolean;
      }>
    >;
  };
  values: {
    cards: Interface.CardInterface[];
    history: History<LocationState>;
  };
}

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
}: BoardProps) => {
  return (
    <PageTransition>
      <St.Notification>
        <ToastContainer transition={Slide} />
      </St.Notification>
      <St.BoardPage>
        <Feedback />

        <Container.FixedMenuContainer
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
                  className="DefaultCard"
                  key={key}
                  card={card}
                  showEditCard={showEditCard}
                  setCurrentCard={setCurrentCard}
                  setShowEditCard={setShowEditCard}
                  selectedCard={selectedCard}
                  history={history}
                />
              ))}

            <St.CardContainer className="CardContainer">
              <Container.BacklogCardContainer
                data={{ showEditCard, setShowEditCard, currentCard }}
              />
            </St.CardContainer>
          </St.InnerBoardContainer>
        </St.DragScroll>
      </St.BoardPage>
    </PageTransition>
  );
};

export default Board;
