/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input, Button } from 'capstone-project';
import React from 'react';

import * as Interface from '../../redux/actions/interface.action';
import { icons } from '../../utils/importAll';
import { EditBoardModalProps } from '../ComponentsInterface';
import * as St from '../EditModalStyles';

const EditBoardModal = ({
  boards,
  values: { boardTitle, boardDescription },
  showModal: { showEditModal, showBoardModal, setShowEditModal, setShowBoardModal },
  handlers: {
    handlerTitle,
    handlerDescription,
    handleReturnForm,
    handlerModifyBoard,
    handlerRemoveBoard,
    handlerSelectBoard,
    handlerCreateBoard,
    handlerSubmitForm,
  },
}: EditBoardModalProps) => (
  <St.CardModal
    icon={icons.closeWindow}
    title="Boards"
    data={[showBoardModal, setShowBoardModal]}
    styles={{
      size: 'normal',
      fontSize: 'large',
      bgColorPrimary: '#3aa6f2',
      colorPrimary: '#014d82',
    }}>
    <>
      {showEditModal ? (
        <St.Form>
          <Button onClick={handleReturnForm}>Voltar</Button>
          <Input
            type="text"
            placeholder={boardTitle}
            width="220px"
            fontSize="2rem"
            height="40px"
            onTextChange={handlerTitle}
          />
          <Input
            type="text"
            placeholder={boardDescription}
            width="220px"
            fontSize="2rem"
            height="40px"
            onTextChange={handlerDescription}
          />
          <Button fontSize="2.6rem" height="44px" weight={600} onClick={handlerSubmitForm}>
            Modificar
          </Button>
        </St.Form>
      ) : (
        <>
          <St.ModalContent>
            <St.MenuModal>
              <St.CardModalDescription>Novo Board</St.CardModalDescription>

              <St.CardModalButton onClick={handlerCreateBoard}>Criar</St.CardModalButton>
            </St.MenuModal>
          </St.ModalContent>

          {boards &&
            boards.map((board: Interface.UserBoards, key: number) => (
              <St.ModalContent key={key}>
                <h2>{board.title}</h2>

                <St.CardModalSection>
                  <St.CardModalDescription>{board.description}</St.CardModalDescription>

                  <div>
                    <St.CardModalButton onClick={() => handlerSelectBoard(board)}>
                      Selecionar
                    </St.CardModalButton>

                    <St.CardModalButton onClick={() => handlerModifyBoard(board)}>
                      Modificar
                    </St.CardModalButton>

                    <St.CardModalButton onClick={() => handlerRemoveBoard(board)}>
                      Remover
                    </St.CardModalButton>
                  </div>
                </St.CardModalSection>
              </St.ModalContent>
            ))}
        </>
      )}
    </>
  </St.CardModal>
);

export default EditBoardModal;
