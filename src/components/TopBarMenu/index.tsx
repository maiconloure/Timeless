import React from 'react';
import { icons, images } from 'utils';

import { FixedMenuProps } from '../ComponentsInterface';
import * as St from './styled';

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
}: FixedMenuProps) => (
  <St.TopContainer>
    <St.Bar>
      <St.ProjectInfo>
        <a
          href="https://gitlab.com/capstoneproject-group-4/timeless"
          target="_blank"
          rel="noopener noreferrer">
          <div className="tooltip">
            <img src={images.logo} alt="Logo" />
            <span className="tooltiptext">Timeless salva automaticamente o seu trabalho!</span>
          </div>
          {/* <img src={icons.kenzie} alt="Project icon" /> */}
        </a>
        <div className="tooltip">
          <h2> Kenzie Academy Brasil </h2>
          <span className="tooltiptext">Nome da empresa</span>
        </div>
        <h4> &nbsp; | &nbsp; </h4>
        <div className="tooltip">
          <h3 onClick={handlerToggleBoard}>{currentBoard && currentBoard.title}</h3>
          <span className="tooltiptext">Nome do projeto</span>
        </div>
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

export default FixedMenu;
