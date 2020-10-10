// /* eslint-disable @typescript-eslint/no-unused-vars */
import { Modal, Input, Button } from 'capstone-project';
import React from 'react';
import styled from 'styled-components';

import * as Interface from '../../redux/actions/interface.action';
import { icons } from '../../utils/importAll';

interface Props {
  showState: {
    showEditUser: boolean;
    setShowEditUser: React.Dispatch<React.SetStateAction<boolean>>;
  };
  editData: {
    userName: string;
    userAbout: string;
    userImage: string;
  };
  handlers: {
    handleUserName: (event: any) => void;
    handleUserAbout: (event: any) => void;
    handleUserImage: (event: any) => void;
    submitNotification: () => void;
  };
}

const styles = {
  size: 'normal',
  fontSize: 'large',
  bgColorPrimary: '#3aa6f2',
  colorPrimary: '#014d82',
};

const EditUserModal = ({
  showState: { showEditUser, setShowEditUser },
  editData: { userName, userAbout, userImage },
  handlers: { handleUserName, handleUserAbout, handleUserImage, submitNotification },
}: Props) => {
  return (
    <CardModal
      icon={icons.closeWindow}
      title="Editar"
      data={[showEditUser, setShowEditUser]}
      styles={styles}>
      <div>
        <Form>
          <Input
            type="text"
            placeholder={userName}
            width="220px"
            fontSize="2rem"
            height="40px"
            onTextChange={handleUserName}
          />
          <Input
            type="text"
            placeholder={userAbout}
            width="220px"
            fontSize="2rem"
            height="40px"
            onTextChange={handleUserAbout}
          />

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
        </Form>
      </div>
    </CardModal>
  );
};

export default EditUserModal;

const CardModal = styled(Modal)`
  div {
    &:last-child {
      padding: 5px !important;
    }
  }
`;

const MenuModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardModalButton = styled.button`
  background-color: var(--complement-color-0);
  color: var(--color-primary-4);
  width: 90px;
  padding: 10px;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 5px;
  margin: 5px;

  :hover {
    background-color: var(--complement-color-1);
    cursor: pointer;
    font-weight: bold;
    border-top: none;
  }

  :active {
    opacity: 0.5;
  }
`;

const CardModalSection = styled.div`
  color: var(--color-primary-4);
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-height: 768px) and (min-width: 968px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  div {
    padding: 10px;
    &:nth-child(4) {
      margin-right: 17px;
    }
    input {
      font-size: 1.8rem;
      padding: 0px 10px;
    }
    svg {
      width: 1.8rem;
    }
  }

  button {
    border-radius: 3px;
    font-size: 2.6rem;
    margin-top: 10px;
    height: 50px;
    width: 200px;

    :hover {
      color: var(--complement-color-0);
    }
  }

  button:nth-child(3) {
    background-color: var(--complement-color-0);
    :hover {
      background-color: var(--color-primary-4);
    }
  }
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 10px;
  width: 100%;
  max-width: 230px;
  min-width: 230px;
  margin: 10px 0;

  h2 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
`;

const CardModalDescription = styled.p`
  margin: 5px;
  @media (min-height: 768px) and (min-width: 968px) {
    display: inline-block;
    font-size: 12px;
  }
`;
