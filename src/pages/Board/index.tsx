/* eslint-disable @typescript-eslint/no-unused-vars */
import { Modal, Input, PasswordInput, Button } from 'capstone-project';
import { motion } from 'framer-motion';
import { History, LocationState } from 'history';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast, useToast } from 'react-toastify';
import styled from 'styled-components';

import { PageTransition } from '../../components';
import {
  CreationMenuContainer,
  FeedContainer,
  DefaultCardContainer,
  BacklogCardContainer,
} from '../../containers';
import {
  getBoardsAPI,
  updateBoardAPI,
  getCardsAPI,
  createBoardAPI,
  clearBoard,
  deleteBoardAPI,
} from '../../redux/actions/boards.action';
import { deleteCardAPI, updateCardAPI, createCardAPI } from '../../redux/actions/cards.action';
import { getNewAction } from '../../redux/actions/feed.action';
import * as Interface from '../../redux/actions/interface.action';
import { logout, updateUserAPI } from '../../redux/actions/service.action';
import { RootStoreType } from '../../redux/store/store';
import { fastCard, defaultBoard, defaultCard } from '../../utils/defaults-json-cards';
import { icons, images } from '../../utils/importAll';
import 'react-toastify/dist/ReactToastify.css';

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
  const [showBoardModal, setShowBoardModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEditCard, setShowEditCard] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);
  const [currentCard, setCurrentCard] = useState({});
  const [selectedCard, setSelectedCard] = useState({
    removeCard: false,
    fastCard: false,
  });
  const [boardTitle, setBoardTitle] = useState('Título do Board');
  const [boardDescription, setBoardDescription] = useState('Descrição do Board');
  const [selectedBoard, setSelectedBoard] = useState<
    Interface.UserBoards | Interface.CreateUserBoards
  >(defaultBoard);
  const [userName, setUserName] = useState(user.name || 'Nome');
  const [userAbout, setUserAbout] = useState(user.about || 'Descrição');
  const [userImage, setUserImage] = useState(user.image || 'Url da Imagem');

  const handleLogout = () => {
    toast('Saindo... vamos sentir sua falta! 😭', {
      position: 'top-left',
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
      dispatch(logout());
    }, 3300);
  };

  const saveBoard = () => {
    toast('Salvando seu board...', {
      position: 'top-left',
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

  const saveChanges = () => {
    cards.forEach((card: Interface.CardInterface) => {
      // TODO ==> Filtrar Cards Não Modificados
      dispatch(updateCardAPI({ card, token }));
    });
  };

  useEffect(() => {
    dispatch(getBoardsAPI({ user, token }));
  }, []);

  useEffect(() => {
    currentBoard && dispatch(getCardsAPI(currentBoard, token, history));
  }, [currentBoard]);

  return (
    <PageTransition>
      <Notification>
        <ToastContainer />
      </Notification>
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
              <h3 onClick={() => setShowBoardModal(!showBoardModal)}>
                {currentBoard && currentBoard.title}
              </h3>
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

                  <MenuOption
                    onClick={() => {
                      setShowEditUser(true);
                      setShowBoardModal(false);
                      setToggleMenu(!toggleMenu);
                    }}>
                    <p>Editar perfil</p>
                  </MenuOption>

                  <MenuOption onClick={handleLogout}>
                    <p>Fazer logout</p>
                  </MenuOption>

                  <MenuOption onClick={saveBoard}>
                    <p>Salvar board</p>
                  </MenuOption>

                  <MenuOption
                    onClick={() => {
                      setShowBoardModal(true);
                      setShowEditUser(false);
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
            <Form>
              <Input
                type="text"
                placeholder={userName}
                width="220px"
                fontSize="2rem"
                height="40px"
                onTextChange={(event) => setUserName(event)}
              />
              <Input
                type="text"
                placeholder={userAbout}
                width="220px"
                fontSize="2rem"
                height="40px"
                onTextChange={(event) => setUserAbout(event)}
              />

              <Input
                type="text"
                placeholder={userImage}
                width="220px"
                fontSize="2rem"
                height="40px"
                onTextChange={(event) => setUserImage(event)}
              />

              <Button
                fontSize="2.6rem"
                height="44px"
                weight={600}
                onClick={() => {
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
                }}>
                Modificar
              </Button>
            </Form>
          </div>
        </CardModal>

        <CardModal
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
              <Form>
                <Button
                  onClick={() => {
                    setBoardTitle('Título do Board');
                    setBoardDescription('Descrição do Board');
                    setShowEditModal(false);
                  }}>
                  Voltar
                </Button>
              </Form>
            ) : (
              <ModalContent>
                <MenuModal>
                  <CardModalDescription>Novo Board</CardModalDescription>

                  <CardModalButton
                    onClick={() => {
                      setShowEditModal(true);
                      setSelectedBoard(defaultBoard);
                    }}>
                    Criar
                  </CardModalButton>
                </MenuModal>
              </ModalContent>
            )}
            {showEditModal ? (
              <Form>
                <Input
                  type="text"
                  placeholder={boardTitle}
                  width="220px"
                  fontSize="2rem"
                  height="40px"
                  onTextChange={(event) => setBoardTitle(event)}
                />
                <Input
                  type="text"
                  placeholder={boardDescription}
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
                    if (JSON.stringify(selectedBoard) === JSON.stringify(defaultBoard)) {
                      dispatch(createBoardAPI(selectedBoard, token, user));
                    } else {
                      const newBoard: any = {
                        ...selectedBoard,
                        title: boardTitle,
                        description: boardDescription,
                      };
                      dispatch(updateBoardAPI({ token, board: newBoard }));
                    }

                    setBoardTitle('Título do Board');
                    setBoardDescription('Descrição do Board');
                    setShowEditModal(false);
                  }}>
                  Modificar
                </Button>
              </Form>
            ) : (
              boards &&
              boards.map((board: Interface.UserBoards, key: number) => (
                <ModalContent key={key}>
                  <h2>{board.title}</h2>

                  <CardModalSection>
                    <CardModalDescription>{board.description}</CardModalDescription>

                    <div>
                      <CardModalButton
                        onClick={() => {
                          dispatch(getCardsAPI(board, token, history));
                          setShowBoardModal(false);
                        }}>
                        Selecionar
                      </CardModalButton>

                      <CardModalButton
                        onClick={() => {
                          setBoardTitle(board.title);
                          setBoardDescription(board.description);
                          setSelectedBoard(board);
                          setShowEditModal(true);
                        }}>
                        Modificar
                      </CardModalButton>

                      <CardModalButton
                        onClick={() => {
                          dispatch(deleteBoardAPI(board, token));
                        }}>
                        Remover
                      </CardModalButton>
                    </div>
                  </CardModalSection>
                </ModalContent>
              ))
            )}
          </>
        </CardModal>

        <InnerBoardContainer>
          <SideMenuContainer drag dragMomentum={false}>
            <CreationMenuContainer setSelectedCard={setSelectedCard} selectedCard={selectedCard} />
          </SideMenuContainer>

          <FeedBox drag dragMomentum={false}>
            <FeedContainer />
          </FeedBox>

          {cards &&
            cards.map((card: Interface.CardInterface, key: number) => (
              <DefaultCardContainer
                key={key}
                card={card}
                showEditCard={showEditCard}
                setCurrentCard={setCurrentCard}
                setShowEditCard={setShowEditCard}
                selectedCard={selectedCard}
              />
            ))}

          <CardContainer>
            <BacklogCardContainer closeDataPass={{ showEditCard, setShowEditCard, currentCard }} />
          </CardContainer>
        </InnerBoardContainer>
      </BoardPage>
    </PageTransition>
  );
};

export default Board;

const BoardPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 72px auto;
  grid-template-areas:
    'top'
    'board';
  align-items: center;

  @media (min-width: 1000px) and (min-height: 768px) {
    grid-template-rows: 61px auto;
  }
`;

const Notification = styled.div`
  position: absolute;
  z-index: 999999999;

  div {
    font-weight: 700;
    color: #000;
  }
`;

const Background = styled.img`
  grid-area: board;
  height: 100%;
  background-repeat: repeat;
`;

const TopContainer = styled.div`
  grid-area: top;
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

  h3 {
    cursor: pointer;
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

  @media (min-width: 800px) {
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
  justify-content: flex-end;
  color: #fff;
  width: 240px;
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
  left: -10px;
  min-width: 220px;
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
  width: 55px;
  height: 55px;

  img {
    width: 60px;
    height: 60px;
    margin-right: 5px;
    border-radius: 50%;
  }

  @media (min-width: 1000px) and (min-height: 768px) {
    img {
      width: 55px;
      height: 55px;
    }
  }
`;

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

const InnerBoardContainer = styled.div`
  position: relative;
  grid-area: board;
  align-self: center;
  justify-self: center;
  margin: 10px;
  width: 99.4%;
  height: 100%;
  overflow: scroll;
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
