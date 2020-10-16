/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Board from '../../pages/Board';
import BoardMobile from '../../pages/BoardMobile';
import { getBoardsAPI, getCardsAPI, updateBoardAPI } from '../../redux/actions/boards.action';
import * as Interface from '../../redux/actions/interface.action';
import { RootStoreType } from '../../redux/store/store';
import { defaultCard, defaultBoard } from '../../utils/defaults-json-cards';
import { BoardContainerProps } from '../ContainerInterface';

const BoardContainer = ({ history }: BoardContainerProps) => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootStoreType) => state.service.status);
  const user = useSelector((state: RootStoreType) => state.service.user);
  const token = useSelector((state: RootStoreType) => state.service.token);
  const currentBoard = useSelector((state: RootStoreType) => state.boards.currentBoard);
  const cards = useSelector((state: RootStoreType) => state.cards.cards);
  const boards = useSelector((state: RootStoreType) => state.boards.boards);
  const [selectedBoard, setSelectedBoard] = useState<
    Interface.UserBoards | Interface.CreateUserBoards
  >(defaultBoard);

  const [showBoardModal, setShowBoardModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEditCard, setShowEditCard] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);
  const [currentCard, setCurrentCard] = useState({});
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [cardOne, setCardOne] = useState(false);
  const [cardTwo, setCardTwo] = useState(false);
  const [cardSelected, setCardSelected] = useState(false);
  const [confirmConnection, setconfirmConnection] = useState(false);
  const [, setRender] = useState({});
  const [state, setState] = useState({});
  const [lines, setLines] = useState([]);

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

  const forceRerender = () => setRender(Math.random());
  const toggleMenu = () => setShowMobileMenu(!showMobileMenu);

  // useEffect(() => {
  //   console.log(`status: `, status);
  // }, [status]);
  // useEffect(() => {
  //   console.log(`user:`, user);
  // }, [user]);
  // useEffect(() => {
  //   console.log(`token: `, token);
  // }, [token]);
  // useEffect(() => {
  //   console.log(`currentBoard:`, currentBoard);
  // }, [currentBoard]);

  // useEffect(() => {
  //   console.log(`cards:`, cards);
  // }, [cards]);

  // useEffect(() => {
  //   console.log(`lines:`, lines);
  // }, [lines]);

  // useEffect(() => {
  //   console.log(
  //     `localStorage.chosenBoards:`,
  //     localStorage.chosenBoard && JSON.parse(localStorage.chosenBoard)
  //   );
  // }, [localStorage]);

  const defProps = {
    consoleWarning: false,
    passProps: {
      className: 'xarrow',
      onMouseEnter: () => setState({ dashness: { animation: 2 }, color: 'red' }),
      onMouseLeave: () => setState({}),
      cursor: 'pointer',
    },
  };

  useEffect(() => {
    dispatch(getBoardsAPI({ user, token, history }));
    if (user && token) {
      dispatch(getBoardsAPI({ user, token, history }));
    }
    setTimeout(() => {
      dispatch(getBoardsAPI({ user, token, history }));
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, token]);

  useEffect(() => {
    if (currentBoard.connections && lines.length < 1) {
      setLines(currentBoard.connections);
    } else if (currentBoard && currentBoard.connections && lines.length > 1) {
      setLines(currentBoard.connections);
    }
  }, [currentBoard, cards, boards, selectedBoard]);

  useEffect(() => {
    if (localStorage.service === undefined || !localStorage.service) {
      history.push('/');
    }
    if (status === 440) {
      toast.dark('Sessão expirada, redirecionando... fique tranquilo seu trabalho foi salvo!', {
        position: 'top-center',
        autoClose: 3200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [history, user, status]);

  useEffect(() => {
    if (currentBoard && currentBoard.id) {
      dispatch(getCardsAPI(currentBoard, token, history));
    }
  }, [dispatch, currentBoard, token, history]);

  window.onresize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
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
      user={user}
      token={token}
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
      user={user}
      token={token}
    />
  );
};

export default BoardContainer;
