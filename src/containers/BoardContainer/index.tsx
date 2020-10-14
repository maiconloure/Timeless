import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Board from '../../pages/Board';
import BoardMobile from '../../pages/BoardMobile';
import { getBoardsAPI, getCardsAPI, updateBoardAPI } from '../../redux/actions/boards.action';
import { RootStoreType } from '../../redux/store/store';
import { BoardContainerProps } from '../ContainerInterface';

const BoardContainer = ({ history }: BoardContainerProps) => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootStoreType) => state.service.status);
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
    group: false,
    removeCard: false,
    fastCard: false,
    addText: false,
    connect: false,
    followedCard: false,
    blockedCard: false,
  });
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showMobileMenu, setShowMobileMenu] = useState(true);

  const toggleMenu = () => setShowMobileMenu(!showMobileMenu);

  window.onresize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    dispatch(getBoardsAPI({ user, token, history }));
  }, []);

  useEffect(() => {
    if (currentBoard && currentBoard.data) {
      updateBoardAPI({
        board: {
          ...currentBoard,
          data: {
            ...currentBoard.data,
            notifications: [
              ...currentBoard.data.notifications,
              `${user.name} acabou de criar um grupo de cartões.`,
            ],
          },
        },
        token,
        history,
      });
      dispatch(getCardsAPI(currentBoard, token, history));
    }
  }, [currentBoard]);

  useEffect(() => {
    if (status === 440) {
      toast.dark('Sessão expirada, redirecionando... fique tranquilo seu trabalho foi salvo!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [status]);

  useEffect(() => {
    if (!localStorage.service) {
      history.push('/');
    }
  });

  const [lines] = useState([
    {
      start: 'card1',
      end: 'card2',
      headSize: 3,
      strokeWidth: 10,
    },
    {
      start: 'card2',
      end: 'card3',
      headSize: 3,
      strokeWidth: 10,
    },
  ]);

  const [, setRender] = useState({});
  const forceRerender = () => setRender(Math.random());

  return windowSize.width < 550 ? (
    <BoardMobile
      data={{
        showMobileMenu,
        windowSize,
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
      }}
      values={{ cards, history }}
      forceRerender={forceRerender}
      lines={lines}
    />
  ) : (
    <Board
      data={{
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
      }}
      values={{ cards, history }}
      forceRerender={forceRerender}
      lines={lines}
    />
  );
};

export default BoardContainer;
