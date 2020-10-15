/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Board from '../../pages/Board';
import BoardMobile from '../../pages/BoardMobile';
import { getBoardsAPI, getCardsAPI, updateBoardAPI } from '../../redux/actions/boards.action';
import { RootStoreType } from '../../redux/store/store';
import { defaultCard } from '../../utils/defaults-json-cards';
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
  const [showEditUser, setShowEditUser] = useState(true);
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
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => setShowMobileMenu(!showMobileMenu);

  window.onresize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const [cardOne, setCardOne] = useState(false);
  const [cardTwo, setCardTwo] = useState(false);
  const [cardSelected, setCardSelected] = useState(false);
  const [confirmConnection, setconfirmConnection] = useState(false);
  const [, setRender] = useState({});
  const forceRerender = () => setRender(Math.random());
  const [state, setState] = useState({});
  const [lines, setLines] = useState([]);

  useEffect(() => {
    if (currentBoard) {
      if (currentBoard.connections && lines.length < 1) {
        setLines(currentBoard.connections);
      }
      if (currentBoard && currentBoard.connections && lines.length > 1) {
        setLines(currentBoard.connections);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentBoard]);

  useEffect(() => {
    if (localStorage.service === undefined || !localStorage.service) {
      history.push('/');
    }
  }, [history, user]);

  useEffect(() => {
    dispatch(getBoardsAPI({ user, token, history }));
    setTimeout(() => {
      dispatch(getBoardsAPI({ user, token, history }));
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentBoard && currentBoard.id) {
      dispatch(getCardsAPI(currentBoard, token, history));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentBoard, localStorage, token, history]);

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

  const defProps = {
    consoleWarning: false,
    passProps: {
      className: 'xarrow',
      onMouseEnter: () => setState({ dashness: { animation: 2 }, color: 'red' }),
      onMouseLeave: () => setState({}),
      cursor: 'pointer',
    },
  };

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
      values={{ cards, history }}
      forceRerender={forceRerender}
      lines={lines}
      setLines={setLines}
      defProps={defProps}
      state={state}
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
      values={{ cards, history }}
      forceRerender={forceRerender}
      lines={lines}
      setLines={setLines}
      defProps={defProps}
      state={state}
    />
  );
};

export default BoardContainer;
