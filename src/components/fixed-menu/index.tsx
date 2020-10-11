import React from 'react';

import * as Interface from '../../redux/actions/interface.action';
import { icons } from '../../utils/importAll';
import * as St from './styled';

interface FixedMenuProps {
  values: {
    user: Interface.UserInterface;
    currentBoard: Interface.UserBoards;
    toggleMenu: boolean;
  };
  handlers: {
    handleLogout: () => void;
    handlerSaveBoard: () => void;
    handleOpenEditProfile: () => void;
    handleOpenEditBoard: () => void;
    handlerToggleBoard: () => any;
    handleToggleMenu: () => any;
  };
}

const FixedMenu = ({
  values: { user, currentBoard, toggleMenu },
  handlers: {
    handleLogout,
    handlerSaveBoard,
    handleOpenEditProfile,
    handleOpenEditBoard,
    handlerToggleBoard,
    handleToggleMenu,
  },
}: FixedMenuProps) => {
  return (
    <St.TopContainer>
      <St.Bar>
        <St.ProjectInfo>
          <a href="https://kenzie.com.br/" target="_blank" rel="noopener noreferrer">
            <img src={icons.kenzie} alt="Project icon" />
          </a>
          <h2> Kenzie Academy Brasil </h2>
          <h4> &nbsp; | &nbsp; </h4>
          <h3 onClick={handlerToggleBoard}>{currentBoard && currentBoard.title}</h3>
        </St.ProjectInfo>

        <St.UserInfo>
          <St.User>
            <h2>{user.name}</h2>
            <p>Online</p>
          </St.User>

          <St.ProfileIcon onClick={handleToggleMenu}>
            <img src={user.image ? user.image : icons.user1} alt="User icon" />
          </St.ProfileIcon>

          {toggleMenu && (
            <St.UserMenu>
              <St.MainUserMenu>
                <h2>Conta</h2>
                <img onClick={handleToggleMenu} src={icons.closeIcon} alt="close icon" />
              </St.MainUserMenu>

              <St.UserInfoMenu>
                <h2>{user.name}</h2>
                <h3>{user.email}</h3>
                <p>{user.about}</p>
              </St.UserInfoMenu>

              <St.MenuOption onClick={handleOpenEditProfile}>
                <p>Editar perfil</p>
              </St.MenuOption>

              <St.MenuOption onClick={handleLogout}>
                <p>Fazer logout</p>
              </St.MenuOption>

              <St.MenuOption onClick={handlerSaveBoard}>
                <p>Salvar board</p>
              </St.MenuOption>

              <St.MenuOption onClick={handleOpenEditBoard}>
                <p>Selecionar board</p>
              </St.MenuOption>
            </St.UserMenu>
          )}
        </St.UserInfo>
      </St.Bar>
    </St.TopContainer>
  );
};

export default FixedMenu;
