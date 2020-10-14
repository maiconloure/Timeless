/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { EditUserModal } from '../../components';
import { updateUserAPI } from '../../redux/actions/service.action';
import { RootStoreType } from '../../redux/store/store';
import { EditUserModalContainerProps } from '../ContainerInterface';

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
        history,
      })
    );
    setShowEditUser(false);
    setShowEditModal(false);
  };

  const handleUserName = (evt: any) => setUserName(evt.currentTarget.value);
  const handleUserAbout = (evt: any) => setUserAbout(evt.currentTarget.value);
  const handleUserImage = (evt: any) => setUserImage(evt.currentTarget.value);

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
