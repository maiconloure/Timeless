import { TopBarMenu } from 'components';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { clearBoard, updateBoardAPI } from '../../redux/actions/boards.action';
import { updateCardAPI, clearCards } from '../../redux/actions/cards.action';
import * as Interface from '../../redux/actions/interface.action';
import { logout } from '../../redux/actions/service.action';
import { RootStoreType } from '../../redux/store/store';
import { FixedMenuContainerProps } from '../ContainerInterface';

const FixedMenuContainer = ({
  data: { showEditUser, showBoardModal, setShowBoardModal, setShowEditUser },
  history,
}: FixedMenuContainerProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStoreType) => state.service.user);
  const currentBoard = useSelector((state: RootStoreType) => state.boards.currentBoard);
  const cards = useSelector((state: RootStoreType) => state.cards.cards);
  const token = useSelector((state: RootStoreType) => state.service.token);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLogout = () => {
    toast.dark('Saindo... vamos sentir sua falta! 😭', {
      position: 'top-center',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    updateBoardAPI({
      board: {
        ...currentBoard,
        data: {
          ...currentBoard.data,
          notifications: [
            `${user.name} acabou de fazer logout.`,
            ...currentBoard.data.notifications,
          ],
        },
      },
      token,
      history,
    });
    setToggleMenu(!toggleMenu);

    setTimeout(() => {
      history.push('/');
      dispatch(clearBoard());
      dispatch(clearCards());
      dispatch(logout());
    }, 1600);
  };

  const saveChanges = () => {
    cards.forEach((card: Interface.CardInterface) => {
      // TODO ==> Filtrar Cards Não Modificados
      dispatch(updateCardAPI({ card, token, history }));
    });
  };

  const handlerSaveBoard = () => {
    toast.dark('Salvando seu board...', {
      position: 'top-center',
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    saveChanges();
    setToggleMenu(!toggleMenu);
  };

  const handleOpenEditProfile = () => {
    setShowEditUser(true);
    setShowBoardModal(false);
    setToggleMenu(!toggleMenu);
  };
  const handleOpenEditBoard = () => {
    setShowBoardModal(true);
    setShowEditUser(false);
    setToggleMenu(!toggleMenu);
  };

  const handlerToggleBoard = () => {
    setShowEditUser(false);
    setShowBoardModal(!showBoardModal);
  };
  const handleToggleMenu = () => {
    if (!showEditUser && !showBoardModal) {
      setToggleMenu(!toggleMenu);
    }
  };

  return (
    <TopBarMenu
      values={{ user, currentBoard, toggleMenu }}
      handlers={{
        handleLogout,
        handlerSaveBoard,
        handleOpenEditProfile,
        handleOpenEditBoard,
        handlerToggleBoard,
        handleToggleMenu,
      }}
    />
  );
};

export default FixedMenuContainer;
