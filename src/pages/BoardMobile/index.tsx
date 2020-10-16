import * as Container from 'containers';
import React from 'react';
import { ToastContainer, Slide } from 'react-toastify';

import { FeedbackButton } from '../../components';
import * as Interface from '../../redux/actions/interface.action';
import { icons } from '../../utils/importAll';
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
    showMobileMenu,
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
}: BoardProps) => (
  <>
    <St.Notification>
      <ToastContainer transition={Slide} />
    </St.Notification>
    <Container.EditUserModalContainer
      data={{
        showMobileMenu: true,
        showEditUser,
        setShowEditUser,
        setShowEditModal,
      }}
      history={history}
    />

    <Container.EditBoardModalContainer
      data={{
        showMobileMenu: true,
        showEditModal,
        showBoardModal,
        setShowEditModal,
        setShowBoardModal,
      }}
      history={history}
      lines={lines}
      setLines={setLines}
    />
    <St.MobileContainer className={showMobileMenu ? 'open' : 'close'}>
      {showMobileMenu && (
        <>
          <Container.TopBarContainer
            data={{
              showEditUser,
              showBoardModal,
              setShowEditUser,
              setShowBoardModal,
            }}
            history={history}
          />
          <St.MobileContent>
            <Container.CreationMenuContainer
              className="CreationMenu"
              setSelectedCard={setSelectedCard}
              toggleMenu={toggleMenu}
              selectedCard={selectedCard}
              history={history}
              lines={lines}
              setLines={setLines}
            />
          </St.MobileContent>

          <St.MobileContent>
            <Container.FeedContainer minimize />
          </St.MobileContent>
        </>
      )}

      {showMobileMenu && <FeedbackButton showMobileMenu={showMobileMenu} />}

      <St.MobileMenuOpenClose onClick={toggleMenu}>
        <img src={icons.menu} alt="" />
      </St.MobileMenuOpenClose>
    </St.MobileContainer>

    <St.MobileMapCards>
      {cards &&
        cards.map((card: Interface.CardInterface, key: number) => (
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
              showMobileMenu
            />
          </React.Fragment>
        ))}
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
    </St.MobileMapCards>
  </>
);

export default Board;
