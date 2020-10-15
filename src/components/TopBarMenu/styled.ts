import styled from 'styled-components';

export const TopContainer = styled.div`
  grid-area: top;
  position: fixed;
  z-index: 9999;
  top: 0;
  width: 100vw;

  .tooltip {
    &:hover .tooltiptext {
      visibility: visible;
    }
  }

  .tooltiptext {
    font: 500 1.5rem Inter;
    visibility: hidden;
    min-width: 40px;
    max-width: 160px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    padding: 4px 8px;

    /* Position the tooltip */
    position: absolute;
    z-index: 99;
  }
`;

export const Bar = styled.div`
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

export const ProjectInfo = styled.div`
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
    border-radius: 6px;
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

export const User = styled.div`
  font-family: Inter;
  font-size: 1.4rem;
  margin: 0 10px 0 0;

  h2 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    text-align: right;
    font-weight: 600;
    color: #adff2f;
    margin: 0 4px 0 0;
  }

  @media (min-width: 1200px) and (min-height: 768px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.7rem;
    }
  }
`;

export const ProfileIcon = styled.div`
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

export const UserMenu = styled.div`
  position: absolute;
  top: 65px;
  left: 10px;
  min-width: 220px;
  height: 300px;
  padding: 10px;
  background: #ffffff;
  border-radius: 4px;
  color: #12254e;
  display: flex;
  flex-direction: column;
`;

export const UserInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  width: 260px;
  max-width: 280;
`;

export const MenuOption = styled.div`
  border-top: 2px solid #dfe1e7;
  cursor: pointer;
  p {
    font: 500 1.5rem Roboto;
    opacity: 0.9;
    margin: 6px 0;
  }
`;

export const UserInfoMenu = styled.div`
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

export const MainUserMenu = styled.div`
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
