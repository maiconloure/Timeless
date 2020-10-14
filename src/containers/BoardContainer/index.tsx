import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Board from '../../pages/Board';
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


  const [cardOne, setCardOne] = useState(false)
  const [cardTwo, setCardTwo] = useState(false)
  const [cardSelected, setCardSelected] = useState(false)
  const [confirmConnection, setconfirmConnection] = useState(false)
  const [lines, setLines] = useState([  ]);

  // Para pegar a data atual e horário, pode ser usado em notificações e no card.
  // para atualizar jogar novamente > setHour({date: new Date()})
  const [hour, setHour] = useState({date: new Date()})

  const [, setRender] = useState({});
  const forceRerender = () => setRender({});

  const [state, setState] = useState({});
  const defProps = {
    consoleWarning: false,
    passProps: {
      className: "xarrow",
      onMouseEnter: () => setState({dashness: { animation: 2 }, color: 'red'}),
      onMouseLeave: () => setState({}),
      cursor: "pointer",
    },
  };

  return (
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
