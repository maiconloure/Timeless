/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from 'framer-motion';
import { History, LocationState } from 'history';
import React, { useState, useEffect } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast, Slide } from 'react-toastify';
import styled from 'styled-components';

import { PageTransition } from '../../components';
import * as Container from '../../containers';
import { getBoardsAPI, getCardsAPI, clearBoard } from '../../redux/actions/boards.action';
import { updateCardAPI, clearCards } from '../../redux/actions/cards.action';
import { getNewAction } from '../../redux/actions/feed.action';
import * as Interface from '../../redux/actions/interface.action';
import { logout } from '../../redux/actions/service.action';
import { RootStoreType } from '../../redux/store/store';
import { icons, images } from '../../utils/importAll';
import 'react-toastify/dist/ReactToastify.css';

interface BoardPageProps {
  history: History<LocationState>;
}

const Board = ({ history }: BoardPageProps) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStoreType) => state.service.user);
  const token = useSelector((state: RootStoreType) => state.service.token);
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

  const handleLogout = () => {
    toast.dark('Efetuando logout...  vamos sentir sua falta! 😭', {
      position: 'top-center',
      autoClose: 1800,
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
    }, 2100);
  };

  const saveBoard = () => {
    toast.dark('Salvando board...', {
      position: 'top-center',
      autoClose: 1300,
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
      dispatch(updateCardAPI({ card, token, history }));
    });
  };

  useEffect(() => {
    dispatch(getBoardsAPI({ user, token, history }));
  }, []);

  useEffect(() => {
    currentBoard && dispatch(getCardsAPI(currentBoard, token, history));
  }, [currentBoard]);

  useEffect(() => {
    if (localStorage.Status && localStorage.Status === 'jwt expired') {
      toast.dark(
        'Sessão expirada... Redirecionando para a página inicial. Fique tranquilo seu trabalho foi salvo!',
        {
          position: 'top-left',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  }, [localStorage.Status]);

  return (
    <PageTransition>
      <Notification>
        <ToastContainer transition={Slide} />
      </Notification>
      <BoardPage>
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

        <Container.EditUserModalContainer
          showEditUser={showEditUser}
          setShowEditUser={setShowEditUser}
          setShowEditModal={setShowEditModal}
          history={history}
        />

        <Container.EditBoardModalContainer
          setShowEditModal={setShowEditModal}
          showBoardModal={showBoardModal}
          showEditModal={showEditModal}
          setShowBoardModal={setShowBoardModal}
          history={history}
        />

        <DragScroll
          ignoreElements=".DefaultCard, .CardContainer, .FeedContainer, .CreationMenu"
          hideScrollbars={false}
          className="container">
          <InnerBoardContainer>
            <SideMenuContainer drag dragMomentum={false}>
              <Container.CreationMenuContainer
                className="CreationMenu"
                setSelectedCard={setSelectedCard}
                selectedCard={selectedCard}
                history={history}
              />
            </SideMenuContainer>

            <FeedBox drag dragMomentum={false}>
              <Container.FeedContainer />
            </FeedBox>

            {cards &&
              cards.map((card: Interface.CardInterface, key: number) => (
                <Container.DefaultCardContainer
                  key={key}
                  card={card}
                  showEditCard={showEditCard}
                  setCurrentCard={setCurrentCard}
                  setShowEditCard={setShowEditCard}
                  selectedCard={selectedCard}
                  history={history}
                />
              ))}

            <CardContainer>
              <Container.BacklogCardContainer
                closeDataPass={{ showEditCard, setShowEditCard, currentCard }}
              />
            </CardContainer>
          </InnerBoardContainer>
        </DragScroll>
      </BoardPage>
    </PageTransition>
  );
};

export default Board;

const BoardPage = styled.div`
  background-image: url(${images.reactWallpaper});
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
    font-weight: 800;
    color: #fff;
  }
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

const InnerBoardContainer = styled.div`
  position: relative;
  grid-area: board;
  align-self: center;
  justify-self: center;
  margin: 5px;
  /* width: 99.4%; */
  /* height: 99%; */
  width: 5000px;
  height: 5000px;

  overflow: scroll;

  &:active {
    cursor: grabbing;
  }
`;

const DragScroll = styled(ScrollContainer)`
  grid-area: board;
  /* position: absolute; */
  height: calc(100vh - 20px);
  max-height: 100vh;
  width: 100vw !important;
  max-width: 100vw !important;

  &:active {
    cursor: grabbing;
  }
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

  &:active {
    cursor: grabbing;
  }
`;

const CardContainer = styled(motion.div)`
  position: absolute;
  top: calc(50% - 650px / 2);
  left: calc(50% - 650px / 2);
  z-index: 1;
`;
