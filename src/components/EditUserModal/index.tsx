import { Input, Button } from 'capstone-project';
import React from 'react';
import { icons } from 'utils';

import { EditUserModalProps } from '../ComponentsInterface';
import * as St from '../EditModalStyles';
import ModalBackground from '../ModalBackground';

const EditUserModal = ({
  showEditUser,
  showMobileMenu,
  setShowEditUser,
  userName,
  userAbout,
  userImage,
  submitNotification,
  handleUserName,
  handleUserAbout,
  handleUserImage,
}: EditUserModalProps) => (
  <>
    <ModalBackground show={showEditUser} />
    <St.CardModal
      icon={icons.closeWindow}
      title="Editar"
      data={[showEditUser, setShowEditUser]}
      styles={{
        size: showMobileMenu ? 'normal' : 'large',
        fontSize: showMobileMenu ? 'large' : 'largest',
        bgColorPrimary: '#cdd9e2',
        colorPrimary: '#014d82',
      }}>
      <div>
        <St.Form>
          {!showMobileMenu && <h3>Seu Nome</h3>}

          <Input
            type="text"
            placeholder={userName}
            width="220px"
            fontSize="2rem"
            height="40px"
            onTextChange={handleUserName}
          />
          {!showMobileMenu && <h3>Sobre Você</h3>}

          <Input
            type="text"
            placeholder={userAbout}
            width="220px"
            fontSize="2rem"
            height="40px"
            onTextChange={handleUserAbout}
          />
          {!showMobileMenu && <h3>Link da Imagem</h3>}

          <Input
            type="text"
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
  </>
);

export default EditUserModal;
