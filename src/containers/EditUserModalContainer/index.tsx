/* eslint-disable @typescript-eslint/no-unused-vars */
import { History, LocationState } from 'history';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { EditUserModal } from '../../components';
import { updateUserAPI } from '../../redux/actions/service.action';
import { RootStoreType } from '../../redux/store/store';

interface EditUserModalContainerProps {
  data: {
    showEditUser: boolean;
    setShowEditUser: React.Dispatch<React.SetStateAction<boolean>>;
    setShowEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
  history: History<LocationState>;
}

const EditUserModalContainer = ({
  data: { showEditUser, setShowEditUser, setShowEditModal },
  history,
}: EditUserModalContainerProps) => {
  const dispatch = useDispatch();
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
      })
    );

    setShowEditModal(false);
  };

  const handleUserName = (value: any) => setUserName(value);
  const handleUserAbout = (value: any) => setUserAbout(value);
  const handleUserImage = (value: any) => setUserImage(value);

  return (
    <EditUserModal
      showEditUser={showEditUser}
      setShowEditUser={setShowEditUser}
      userName={userName}
      userAbout={userAbout}
      userImage={userImage}
      submitNotification={submitNotification}
      handleUserName={handleUserName}
      handleUserAbout={handleUserAbout}
      handleUserImage={handleUserImage}
    />
  );
};

export default EditUserModalContainer;
