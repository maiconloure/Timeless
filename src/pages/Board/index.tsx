/* eslint-disable @typescript-eslint/no-unused-vars */
import { Modal, Feed, Input, PasswordInput, Button } from 'capstone-project';
import { motion } from 'framer-motion';
import { History, LocationState } from 'history';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { CreationMenu, DefaultCard, BacklogCard } from '../../components';
import PageTransition from '../../components/pageTransition';
import {
  getBoardsAPI,
  updateBoardAPI,
  getCardsAPI,
  createBoardAPI,
} from '../../redux/actions/boards.action';
import { deleteCardAPI, updateCardAPI, createCardAPI } from '../../redux/actions/cards.action';
import * as Interface from '../../redux/actions/interface.action';
import { signOut } from '../../redux/actions/service.action';
import { RootStoreType } from '../../redux/store/store';
import { fastCard, defaultBoard, defaultCard } from '../../utils/defaults-json-cards';
import { icons, images } from '../../utils/importAll';

const FeedExample = [
  'Christopher acabou a feature chat.',
  'Leandro está trabalhando em testes, veja aqui!',
  'João acabou de seguir seu board!',
  'Guilherme mandou um aviso importante, veja aqui!',
  'Christopher acabou a feature chat.',
  'Leandro está trabalhando em testes, veja aqui!',
  'João acabou de seguir seu board!',
  'Guilherme mandou um aviso importante, veja aqui!',
  'Christopher acabou de desenvolver um bug!!!',
];
interface BoardPageProps {
  history: History<LocationState>;
}

const Board = ({ history }: BoardPageProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStoreType) => state.service.user);
  const token = useSelector((state: RootStoreType) => state.service.token);
  const boards = useSelector((state: RootStoreType) => state.boards.boards);
  const currentBoard = useSelector((state: RootStoreType) => state.boards.currentBoard);
  const cards = useSelector((state: RootStoreType) => state.cards.cards);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEditCard, setShowEditCard] = useState(false);
  const [currentCard, setCurrentCard] = useState({});
  const [selectedCard, setSelectedCard] = useState({
    removeCard: false,
    fastCard: false,
  });
  const [boardTitle, setBoardTitle] = useState('');
  const [boardDescription, setBoardDescription] = useState('');

  useEffect(() => {
    console.log(boardTitle);
    console.log(boardDescription);
  }, [boardDescription, boardTitle]);

  const handleLogout = () => {
    setToggleMenu(!toggleMenu);
    history.push('/');
    dispatch(signOut());
  };

  const saveChanges = () => {
    console.warn('saveChanges');
    // dispatch(updateBoardAPI({ token, board: boards[0] }));
  };

  const currentBoardHandler = (board: Interface.UserBoards) => {
    dispatch(getCardsAPI(board, token, history));
  };

  useEffect(() => {
    dispatch(getBoardsAPI({ user, token }));
    return () => {
      console.log('useEffect: Board Unmounted');
    };
  }, []);

  useEffect(() => {
    // AUTO SAVE, 10s | undefined error in boards[0] some reason
    const timer = setTimeout(saveChanges, 10000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    dispatch(getCardsAPI(currentBoard, token, history));
  }, [currentBoard]);

  return (
    <PageTransition>
      <BoardPage>
        <Background src={images.background} alt="background-image" />

        <TopContainer>
          <Bar>
            <ProjectInfo>
              <a href="https://kenzie.com.br/" target="_blank" rel="noopener noreferrer">
                <img src={icons.kenzie} alt="Project icon" />
              </a>
              <h2> Kenzie Academy Brasil </h2>
              <h4> &nbsp; | &nbsp; </h4>
              <h3>{currentBoard.title}</h3>
            </ProjectInfo>

            <UserInfo>
              <User>
                <h2>{user.name}</h2>
                <p>Online</p>
              </User>

              <ProfileIcon onClick={() => setToggleMenu(!toggleMenu)}>
                <img src={user.image ? user.image : icons.user1} alt="User icon" />
              </ProfileIcon>

              {toggleMenu && (
                <UserMenu>
                  <MainUserMenu>
                    <h2>Conta</h2>
                    <img
                      onClick={() => setToggleMenu(!toggleMenu)}
                      src={icons.closeIcon}
                      alt="close icon"
                    />
                  </MainUserMenu>

                  <UserInfoMenu>
                    <h2>{user.name}</h2>
                    <h3>{user.email}</h3>
                    <p>{user.about}</p>
                  </UserInfoMenu>

                  <MenuOption>
                    <p>Editar perfil</p>
                  </MenuOption>

                  <MenuOption onClick={handleLogout}>
                    <p>Fazer logout</p>
                  </MenuOption>

                  <MenuOption
                    onClick={() => {
                      saveChanges();
                      setToggleMenu(!toggleMenu);
                    }}>
                    <p>Salvar board</p>
                  </MenuOption>

                  <MenuOption
                    onClick={() => {
                      setShowModal(true);
                      setToggleMenu(!toggleMenu);
                    }}>
                    <p>Selecionar board</p>
                  </MenuOption>
                </UserMenu>
              )}
            </UserInfo>
          </Bar>
        </TopContainer>

        <CardModal
          title="Boards"
          data={[showModal, setShowModal]}
          styles={{
            size: 'normal',
            fontSize: 'large',
            bgColorPrimary: '#3aa6f2',
            colorPrimary: '#014d82',
          }}>
          <>
            {showEditModal ? (
              <Form>
                <Button onClick={() => setShowEditModal(false)}>Voltar</Button>
              </Form>
            ) : (
              <ModalContent>
                <MenuModal>
                  <CardModalDescription>Novo Board</CardModalDescription>

                  <CardModalButton
                    onClick={() => {
                      dispatch(createBoardAPI(defaultBoard, token, user));
                      dispatch(createCardAPI({ currentBoard, token, user, card: defaultCard }));
                      setShowEditModal(true);
                    }}>
                    Criar
                  </CardModalButton>
                </MenuModal>
              </ModalContent>
            )}
            {boards &&
              boards.map((board: Interface.UserBoards, key: number) =>
                showEditModal ? (
                  <Form key={key}>
                    <Input
                      type="text"
                      placeholder="Título"
                      width="220px"
                      fontSize="2rem"
                      height="40px"
                      onTextChange={(event) => setBoardTitle(event)}
                    />
                    <Input
                      type="text"
                      placeholder="Descrição"
                      width="220px"
                      fontSize="2rem"
                      height="40px"
                      onTextChange={(event) => setBoardDescription(event)}
                    />
                    <Button
                      fontSize="2.6rem"
                      height="44px"
                      weight={600}
                      onClick={() => {
                        const newBoard = {
                          ...currentBoard,
                          title: boardTitle,
                          description: boardDescription,
                        };
                        dispatch(updateBoardAPI({ token, board: newBoard }));
                        setShowEditModal(false);
                      }}>
                      Modificar
                    </Button>
                  </Form>
                ) : (
                  <ModalContent key={key}>
                    <h2>{board.title}</h2>

                    <CardModalSection>
                      <CardModalDescription>{board.description}</CardModalDescription>

                      <div>
                        <CardModalButton
                          onClick={() => {
                            console.log('Selecionar Board');

                            currentBoardHandler(board);
                            setShowModal(false);
                          }}>
                          Selecionar
                        </CardModalButton>

                        <CardModalButton
                          onClick={() => {
                            console.log('Modificar Board');

                            setShowEditModal(true);
                          }}>
                          Modificar
                        </CardModalButton>

                        <CardModalButton
                          onClick={() => {
                            console.log('Remover Board');
                          }}>
                          Remover
                        </CardModalButton>
                      </div>
                    </CardModalSection>
                  </ModalContent>
                )
              )}
          </>
        </CardModal>

        <InnerBoardContainer>
          <SideMenuContainer drag dragMomentum={false}>
            <CreationMenu setSelectedCard={setSelectedCard} selectedCard={selectedCard} />
          </SideMenuContainer>

          <FeedBox drag dragMomentum={false}>
            <Feed array={FeedExample} />
          </FeedBox>

          {cards &&
            cards.map((card: Interface.CardInterface, key: number) => (
              <CardContainer
                key={key}
                drag
                dragMomentum={false}
                onDragEnd={(e: any) => {
                  /// https://pt.stackoverflow.com/questions/192610/como-pegar-a-posi%C3%A7%C3%A3o-x-e-y-de-um-elemento-relativo-%C3%A0-tela
                  if (e && e.target && e.target.offsetParent) {
                    const position = e.target.offsetParent.getBoundingClientRect();
                    // console.log(position);

                    card.position = {
                      x: position.x,
                      y: position.y - 28, // tive que fazer esse ajuste em pixels
                    };
                  }
                }}
                onDoubleClick={() => {
                  if (!showEditCard) {
                    setCurrentCard(card);
                    setShowEditCard(true);
                  }
                }}
                style={{
                  x: card.position.x,
                  y: card.position.y,
                }}>
                <Card>
                  <DefaultCard data={card.data} />

                  {selectedCard.removeCard ? (
                    <CardButton onClick={() => dispatch(deleteCardAPI({ card, token }))}>
                      Remove
                    </CardButton>
                  ) : (
                    selectedCard.fastCard && (
                      <CardButton
                        onClick={() =>
                          dispatch(
                            updateCardAPI({
                              token,
                              card: { ...card, data: { ...card.data, ...fastCard } },
                            })
                          )
                        }>
                        Card
                      </CardButton>
                    )
                  )}
                </Card>
              </CardContainer>
            ))}

          <CardContainer>
            <BacklogCard closeDataPass={{ showEditCard, setShowEditCard, currentCard }} />
          </CardContainer>
        </InnerBoardContainer>
      </BoardPage>
    </PageTransition>
  );
};

export default Board;

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

    input {
      font-size: 1.8rem;
      padding: 0px 10px;
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

const CardButton = styled.button`
  background-color: var(--color-background);
  color: var(--color-primary-4);
  margin-left: 10px;
  padding: 2px 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  position: absolute;
  bottom: -10px;
  /* box-shadow: 0 8px 6px -6px gray; */

  :hover {
    cursor: pointer;
    color: var(--complement-color-2);
    font-weight: bold;
    border-top: none;
  }

  :active {
    opacity: 0.5;
  }
`;

const Card = styled.div`
  position: relative;
`;

const BoardPage = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Background = styled.img`
  background-repeat: repeat;
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
`;

const TopContainer = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  width: 100vw;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background-color: var(--color-primary-0);

  @media (min-width: 1000px) and (min-height: 768px) {
    height: 60px;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter';

  h2,
  h3,
  h4 {
    display: none;
  }

  img {
    width: 60px;
    margin: 0 5px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1000px) and (min-height: 768px) {
    display: flex;
    align-items: center;

    h2 {
      margin-left: 5px;
      display: block;
      font-size: 1.8rem;
      font-weight: 800;
      text-transform: uppercase;
      color: #fff;
    }

    h3 {
      display: block;
      font-size: 1.6rem;
      color: #fff;
    }

    h4 {
      display: block;
      font-size: 2.4rem;
      font-weight: 900;
      color: #fff;
    }

    img {
      margin: 0 5px;
      width: 50px;
    }
  }
`;

const UserInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const User = styled.div`
  font-family: Inter;
  font-size: 1.4rem;
  margin: 0 4px;

  p {
    text-align: right;
  }

  @media (min-width: 1200px) and (min-height: 768px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;

const UserMenu = styled.div`
  position: absolute;
  top: 65px;
  left: 0;
  width: 220px;
  height: 300px;
  padding: 10px;
  background: #ffffff;
  border-radius: 4px;
  color: #12254e;
  display: flex;
  flex-direction: column;
`;

const MainUserMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  border-bottom: 2px solid #dfe1e7;

  h2 {
    font: 500 1.8rem Fira Code;
    opacity: 0.7;
  }

  img {
    cursor: pointer;
    width: 2rem;
  }
`;

const UserInfoMenu = styled.div`
  margin: 10px 5px;
  height: 70%;
  h2 {
    font: 500 2rem Inter;
  }

  h3 {
    font: 400 1.3rem Inter;
    padding: 2px 0;
    opacity: 0.7;
  }

  p {
    font: 600 1.4rem Inter;
    line-height: 1.6rem;
    padding: 4px 0;
    border-top: 2px solid #dfe1e7;
    opacity: 0.9;
  }
`;

const MenuOption = styled.div`
  border-top: 2px solid #dfe1e7;
  cursor: pointer;
  p {
    font: 500 1.5rem Roboto;
    opacity: 0.9;
    margin: 6px 0;
  }
`;

const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 55px;

  img {
    width: 60px;
    margin-right: 5px;
    border-radius: 50%;
  }

  @media (min-width: 1000px) and (min-height: 768px) {
    img {
      width: 55px;
      margin: 6px 10px;
    }
  }
`;

const InnerBoardContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  overflow: auto;
`;

const SideMenuContainer = styled(motion.div)`
  position: absolute;
  top: 80px;
  left: 40px;
  width: 300px;
`;

const FeedBox = styled(motion.div)`
  position: absolute;
  top: 330px;
  left: 40px;
`;

const CardContainer = styled(motion.div)`
  position: absolute;
  top: calc(50% - 650px / 2);
  left: calc(50% - 650px / 2);
  z-index: 1;
`;
