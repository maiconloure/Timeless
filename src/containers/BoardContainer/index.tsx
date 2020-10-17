import { Board, BoardMobile } from 'pages';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { background, defaultBoard } from 'utils';

import { getBoardsAPI, getCardsAPI } from '../../redux/actions/boards.action';
import * as Interface from '../../redux/actions/interface.action';
import { RootStoreType } from '../../redux/store/store';
import { BoardContainerProps } from '../ContainerInterface';

const BoardContainer = ({ history }: BoardContainerProps) => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootStoreType) => state.service.status);
  const user = useSelector((state: RootStoreType) => state.service.user);
  const token = useSelector((state: RootStoreType) => state.service.token);
  const currentBoard = useSelector((state: RootStoreType) => state.boards.currentBoard);
  const cards = useSelector((state: RootStoreType) => state.cards.cards);
  const boards = useSelector((state: RootStoreType) => state.boards.boards);
  const [selectedBoard] = useState<Interface.UserBoards | Interface.CreateUserBoards>(defaultBoard);

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
  const [backgroundImage, setBackground] = useState(background.official);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      backgroundImage={backgroundImage}
      setBackground={setBackground}
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
      backgroundImage={backgroundImage}
      setBackground={setBackground}
    />
  );
};

export default BoardContainer;
