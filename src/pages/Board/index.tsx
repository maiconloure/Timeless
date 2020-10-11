/* eslint-disable @typescript-eslint/no-unused-vars */
import { History, LocationState } from 'history';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { PageTransition } from '../../components';
import * as Container from '../../containers';
import { getBoardsAPI, getCardsAPI } from '../../redux/actions/boards.action';
import * as Interface from '../../redux/actions/interface.action';
import { RootStoreType } from '../../redux/store/store';
import { images } from '../../utils/importAll';
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
    dispatch(getBoardsAPI({ user, token }));
  }, []);

  useEffect(() => {
    currentBoard && dispatch(getCardsAPI(currentBoard, token, history));
  }, [currentBoard]);

  return (
    <PageTransition>
      <St.Notification>
        <ToastContainer />
      </St.Notification>
      <St.BoardPage>
        <St.Background src={images.background} alt="background-image" />

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

        <St.InnerBoardContainer>
          <St.SideMenuContainer drag dragMomentum={false}>
            <Container.CreationMenuContainer
              data={{
                selectedCard,
                setSelectedCard,
              }}
            />
          </St.SideMenuContainer>

          <St.FeedBox drag dragMomentum={false}>
            <Container.FeedContainer />
          </St.FeedBox>

          {cards &&
            cards.map((card: Interface.CardInterface, key: number) => (
              <Container.DefaultCardContainer
                key={key}
                card={card}
                data={{
                  showEditCard,
                  selectedCard,
                  setCurrentCard,
                  setShowEditCard,
                }}
              />
            ))}

          <St.CardContainer>
            <Container.BacklogCardContainer data={{ showEditCard, setShowEditCard, currentCard }} />
          </St.CardContainer>
        </St.InnerBoardContainer>
      </St.BoardPage>
    </PageTransition>
  );
};

export default Board;
