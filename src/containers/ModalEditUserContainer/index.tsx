/* eslint-disable @typescript-eslint/no-unused-vars */
import { Modal, Input, PasswordInput, Button } from 'capstone-project';
import { History, LocationState } from 'history';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast, useToast } from 'react-toastify';

import { EditBoardModal, EditUserModal } from '../../components';
import * as Interface from '../../redux/actions/interface.action';
import { requestLogin, registerUser, updateUserAPI } from '../../redux/actions/service.action';
import { RootStoreType } from '../../redux/store/store';
import { fastCard, defaultBoard, defaultCard } from '../../utils/defaults-json-cards';

interface Props {
  showState: {
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
    showEditUser: boolean;
    setShowEditUser: React.Dispatch<React.SetStateAction<boolean>>;
  };
  selected: {
    selectedBoard: Interface.UserBoards | Interface.CreateUserBoards;
    setSelectedBoard: React.Dispatch<
      React.SetStateAction<Interface.UserBoards | Interface.CreateUserBoards>
    >;
  };
}

const ModalEditUserContainer = ({
  showState: { setShowEditModal, showEditUser, setShowEditUser },
  selected: { selectedBoard, setSelectedBoard },
}: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state: RootStoreType) => state.service.user);
  const token = useSelector((state: RootStoreType) => state.service.token);

  const [userName, setUserName] = useState(user.name || 'Nome');
  const [userAbout, setUserAbout] = useState(user.about || 'Descrição');
  const [userImage, setUserImage] = useState(user.image || 'Url da Imagem');

  const submitNotification = () => {
    dispatch(
      updateUserAPI({
        user: {
          ...user,
          name: userName,
          image: userImage,
          about: userAbout,
        },
        token,
        history,
      })
    );

    setShowEditModal(false);
  };

  const handleUserName = (event: any) => setUserName(event);
  const handleUserAbout = (event: any) => setUserAbout(event);
  const handleUserImage = (event: any) => setUserImage(event);

  return (
    <EditUserModal
      showState={{ showEditUser, setShowEditUser }}
      editData={{ userName, userAbout, userImage }}
      handlers={{ handleUserName, handleUserAbout, handleUserImage, submitNotification }}
    />
  );
};

export default ModalEditUserContainer;
