/* eslint-disable @typescript-eslint/no-unused-vars */
import { History, LocationState } from 'history';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { FixedMenu } from '../../components';
import { clearBoard } from '../../redux/actions/boards.action';
import { updateCardAPI, clearCards } from '../../redux/actions/cards.action';
import { getNewAction } from '../../redux/actions/feed.action';
import * as Interface from '../../redux/actions/interface.action';
import { logout } from '../../redux/actions/service.action';
import { RootStoreType } from '../../redux/store/store';

interface FixedMenuContainerProps {
  data: {
    showBoardModal: boolean;
    setShowEditUser: React.Dispatch<React.SetStateAction<boolean>>;
    setShowBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
  history: History<LocationState>;
}

const FixedMenuContainer = ({
  data: { showBoardModal, setShowBoardModal, setShowEditUser },
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
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    dispatch(getNewAction(`${user.name} acabou de fazer logout.`));
    setToggleMenu(!toggleMenu);

    setTimeout(() => {
      history.push('/');
      dispatch(clearBoard());
      dispatch(clearCards());
      dispatch(logout());
    }, 3300);
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
      autoClose: 2000,
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

  const handlerToggleBoard = () => setShowBoardModal(!showBoardModal);
  const handleToggleMenu = () => setToggleMenu(!toggleMenu);

  return (
    <FixedMenu
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
