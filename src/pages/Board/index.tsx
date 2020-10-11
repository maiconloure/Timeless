/* eslint-disable @typescript-eslint/no-unused-vars */
import { History, LocationState } from 'history';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast, Slide } from 'react-toastify';

import { PageTransition } from '../../components';
import * as Container from '../../containers';
import { getBoardsAPI, getCardsAPI } from '../../redux/actions/boards.action';
import * as Interface from '../../redux/actions/interface.action';
import { RootStoreType } from '../../redux/store/store';
import 'react-toastify/dist/ReactToastify.css';
import * as St from './styled';

interface BoardPageProps {
  history: History<LocationState>;
}

const Board = ({ history }: BoardPageProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStoreType) => state.service.user);
  const token = useSelector((state: RootStoreType) => state.service.token);
  const currentBoard = useSelector((state: RootStoreType) => state.boards.currentBoard);
  const cards = useSelector((state: RootStoreType) => state.cards.cards);
  const [showBoardModal, setShowBoardModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEditCard, setShowEditCard] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);
  const [currentCard, setCurrentCard] = useState({});
  const [selectedCard, setSelectedCard] = useState({
    removeCard: false,
    fastCard: false,
  });

  useEffect(() => {
    dispatch(getBoardsAPI({ user, token, history }));
  }, []);

  useEffect(() => {
    currentBoard && dispatch(getCardsAPI(currentBoard, token, history));
  }, [currentBoard]);

  useEffect(() => {
    if (localStorage.Status && localStorage.Status === 'jwt expired') {
      toast.dark(
        'Sessão expirada... Redirecionando para a página inicial. Fique tranquilo seu trabalho foi salvo!',
        {
          position: 'top-left',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  }, [localStorage.Status]);

  useEffect(() => {
    if (!localStorage.service) {
      history.push('/');
    }
  });

  return (
    <PageTransition>
      <St.Notification>
        <ToastContainer transition={Slide} />
      </St.Notification>
      <St.BoardPage>
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
