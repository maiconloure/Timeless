import React from 'react';
import { ToastContainer, Slide } from 'react-toastify';

import { FeedbackButton } from '../../components';
import * as Container from '../../containers';
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
}: BoardProps) => (
  <>
    <St.Notification>
      <ToastContainer transition={Slide} />
    </St.Notification>
    {/* <St.BoardPage id="canvas"> */}
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
    <St.MobileContainer className={showMobileMenu ? 'open' : 'close'}>
      {showMobileMenu && (
        <>
          <Container.TopBarContainer
            data={{
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
          <Container.DefaultCardContainer
            key={key}
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
        ))}
    </St.MobileMapCards>
  </>
);

export default Board;
