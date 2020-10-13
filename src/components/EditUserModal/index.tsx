import { Input, Button } from 'capstone-project';
import React from 'react';

import { icons } from '../../utils/importAll';
import { EditUserModalProps } from '../ComponentsInterface';
import * as St from '../EditModalStyles';

const EditUserModal = ({
  showEditUser,
  setShowEditUser,
  userName,
  userAbout,
  userImage,
  submitNotification,
  handleUserName,
  handleUserAbout,
  handleUserImage,
}: EditUserModalProps) => (
  <St.CardModal
    icon={icons.closeWindow}
    title="Editar"
    data={[showEditUser, setShowEditUser]}
    styles={{
      size: 'normal',
      fontSize: 'large',
      bgColorPrimary: '#3aa6f2',
      colorPrimary: '#014d82',
    }}>
    <div>
      <St.Form>
        <Input
          type="text"
          value={userName}
          placeholder={userName}
          width="220px"
          fontSize="2rem"
          height="40px"
          onTextChange={handleUserName}
        />
        <Input
          type="text"
          value={userAbout}
          placeholder={userAbout}
          width="220px"
          fontSize="2rem"
          height="40px"
          onTextChange={handleUserAbout}
        />

        <Input
          type="text"
          value={userImage}
          placeholder={userImage}
          width="220px"
          fontSize="2rem"
          height="40px"
          onTextChange={handleUserImage}
        />

        <Button fontSize="2.6rem" height="44px" weight={600} onClick={submitNotification}>
          Modificar
        </Button>
      </St.Form>
    </div>
  </St.CardModal>
);

export default EditUserModal;
