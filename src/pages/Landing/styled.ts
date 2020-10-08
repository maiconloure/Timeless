import styled from 'styled-components';

export const LandingPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  /* IPHONE 5 ??? */
  @media (min-width: 550px) and (max-height: 330px) {
    overflow-y: scroll;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 999;
  display: grid;
  grid-gap: 12px;
  height: 100vh;
  grid-template-columns: 100%;
  grid-template-rows: 12% 22% 13% 38%;
  grid-template-areas:
    'top'
    'logo'
    'register'
    'login';

  /* MOBILE HORIZONTAL*/
  @media (min-width: 550px) and (max-height: 550px) {
    grid-gap: 4px;
    grid-template-rows: 8% 30% 15% 60%;
  }

  /* IPAD */
  @media (min-width: 968px) and (max-width: 1200px) {
    grid-gap: 0;
    grid-template-columns: 35% 30% 35%;
    grid-template-rows: 8% 8% 30% 8% auto;
    grid-template-areas:
      'top top top'
      'login login login'
      '. logo .'
      'register register register'
      'mainframe mainframe mainframe';
  }

  /* NOTEBOOK/PC/ULTRAWIDE */
  @media (min-height: 768px) and (min-width: 968px) {
    grid-gap: 0;
    grid-template-columns: 35% 30% 35%;
    grid-template-rows: 8% 30% 8% auto;
    grid-template-areas:
      'top . login'
      '. logo .'
      'register register register'
      'mainframe mainframe mainframe';
  }
`;

export const LeftMenu = styled.div`
  grid-area: top;
  display: flex;
  justify-content: space-between;
  margin: 14px 16px 0 16px;

  img {
    display: none;
  }

  /* MOBILE HORIZONTAL*/
  @media (min-width: 550px) and (max-height: 550px) {
    margin-top: 4px;
  }

  /* NOTEBOOK/PC/ULTRAWIDE */
  @media (min-width: 968px) and (min-height: 550px) {
    align-items: center;
    padding: 20px 2px;

    img {
      display: block;
      width: 50px;
      border-radius: 8px;
      box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.4);
      margin-right: 14px;
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    width: 70px;
    font: 600 2.8rem Roboto;
    color: #2d2b2b;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  /* MOBILE HORIZONTAL*/
  @media (min-width: 550px) and (max-height: 550px) {
    p {
      font-size: 2.4rem;
    }
  }

  /* NOTEBOOK/PC/ULTRAWIDE */
  @media (min-width: 968px) and (min-height: 550px) {
    justify-content: flex-start;

    p {
      width: auto;
      font-size: 1.8rem;
      margin: 0 14px;
    }
  }
`;

export const LoginMenu = styled.div`
  grid-area: login;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    padding: 10px;

    input {
      padding: 10px;
    }
  }

  /* MOBILE HORIZONTAL*/
  @media (min-width: 550px) and (max-height: 550px) {
    justify-content: flex-start;
    div {
      padding: 4px;

      input {
        padding: 4px;
      }

      svg {
      }
    }
    button {
      margin-top: 5px;
    }
  }

  /* NOTEBOOK/PC/ULTRAWIDE */
  @media (min-width: 968px) and (min-height: 550px) {
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 28px;
    div {
      padding: 10px;

      input {
        font-size: 1.5rem;
        padding: 10px;
        height: 32px;
        width: 200px;
      }
      svg {
        width: 1.5rem;
      }
    }
    button {
      border-radius: 2px;
      font-size: 1.8rem;
      margin-top: 0px;
      margin-left: 20px;
      height: 36px;
      width: 120px;
    }
  }
`;

export const LogoArea = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: logo;
`;

export const Logo = styled.div`
  grid-area: logo;
  position: relative;
  display: flex;
  cursor: pointer;

  h1 {
    z-index: 999;
    font: 400 7rem Inter;
    color: #fff;
    line-height: 7rem;
    margin-bottom: 1rem;

    &:last-child {
      font-weight: 700;
      color: #545454;
    }
  }

  /* MOBILE HORIZONTAL*/
  @media (min-width: 550px) and (max-height: 550px) {
    h1 {
      font-size: 6rem;
    }
  }

  /* NOTEBOOK/PC/ULTRAWIDE */
  @media (min-width: 968px) and (min-height: 550px) {
    h1 {
      font-size: 7rem;
      line-height: 7rem;
      margin-bottom: 2.6rem;
    }
  }
`;

export const LogoBox = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 166px;
  height: 68px;
  background: #3aa6f2;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

  /* MOBILE HORIZONTAL*/
  @media (min-width: 550px) and (max-height: 550px) {
    width: 143px;
  }

  /* MOBILE ANTI-BUG */
  @media (min-width: 670px) {
    width: 148px;
  }

  /* NOTEBOOK/PC/ULTRAWIDE */
  @media (min-width: 968px) and (min-height: 550px) {
    left: -2px;
    width: 174px;
    height: 70px;
  }
`;

export const Slogan = styled.div`
  p {
    font: 700 3rem Inter;
    line-height: 44px;
    text-align: center;
    color: var(--color-secondary-6);
  }

  /* MOBILE HORIZONTAL*/
  @media (min-width: 550px) and (max-height: 550px) {
    display: flex;
    gap: 5px;
    p {
      font-size: 2.6rem;
      line-height: 2.5rem;
    }
  }

  /* IPAD  */
  @media (min-width: 968px) and (max-width: 1100px) {
    width: 500px;
    p {
      font-size: 3.4rem;
    }
  }

  /* NOTEBOOK/PC/ULTRAWIDE */
  @media (min-height: 768px) and (min-width: 1100px) {
    p {
      font-size: 1.7vw;
    }

    display: flex;
    gap: 8px;
  }
`;

export const Return = styled.div`
  grid-area: register;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(0.7);
  }
  img {
    width: 65px;
  }

  @media (min-width: 550px) and (max-height: 550px) {
    img {
      width: 65px;
    }
  }
`;

export const RegisterArea = styled.div`
  grid-area: register;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* IPAD */
  @media (min-width: 968px) and (max-width: 1100px) {
    width: 68vw;
    position: relative;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 8px;

    button {
      font-size: 1.5rem;
      width: 120px;
      height: 36px;
      font-weight: 600;
    }
  }

  /* NOTEBOOK/PC/ULTRAWIDE */
  @media (min-height: 768px) and (min-width: 1100px) {
    position: relative;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 8px;

    button {
      font-size: 2.2rem;
      width: 190px;
      height: 44px;
      font-weight: 600;
      margin-right: 50px;
    }
  }
`;

export const TopFrame = styled.div`
  @media (min-width: 968px) and (min-height: 550px) {
    width: 900px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FeatOne = styled.div`
  width: 250px;
  left: 25%;
  display: none;
  color: #fff;
  font-weight: 500;
  font-size: 1.8rem;

  div {
    width: 77px;
    height: 6px;
    border-radius: 2px;
    background-color: var(--color-secondary-8);
  }

  /* IPAD */
  @media (min-width: 968px) and (max-width: 1100px) {
    display: block;
    font-size: 1.2rem;
    width: 170px;
    div {
      width: 57px;
      height: 6px;
      border-radius: 2px;
      background-color: var(--color-secondary-8);
    }
  }

  /* NOTEBOOK/PC */
  @media (min-height: 768px) and (min-width: 1100px) {
    display: block;
  }

  /* ULTRAWIDE */
  @media (min-width: 2000px) and (min-height: 768px) {
    left: 32vw;
  }
`;

export const FeatTwo = styled.div`
  display: none;
  width: 250px;
  color: #fff;
  font-weight: 500;
  font-size: 1.8rem;
  right: 27%;

  div {
    width: 122px;
    height: 6px;
    border-radius: 2px;
    background-color: var(--color-secondary-8);
  }

  /* IPAD */
  @media (min-width: 968px) and (max-width: 1100px) {
    display: block;
    font-size: 1.2rem;
    width: 170px;

    div {
      width: 94px;
      height: 6px;
      border-radius: 2px;
      background-color: var(--color-secondary-8);
    }
  }

  /* NOTEBOOK/PC */
  @media (min-height: 768px) and (min-width: 1100px) {
    display: block;
  }

  /* ULTRAWIDE */
  @media (min-width: 2000px) and (min-height: 768px) {
    right: 33%;
  }
`;

export const RegisterMenu = styled.div`
  grid-area: login;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    padding: 5px;

    input {
      padding: 5px;
    }
  }
  button {
    margin-top: 5px;
  }

  /* MOBILE HORIZONTAL */
  @media (min-width: 550px) and (max-height: 550px) {
    justify-content: flex-start;
    div {
      padding: 4px;

      input {
        padding: 4px;
      }

      svg {
      }
    }
    button {
      margin-top: 5px;
    }
  }

  /* NOTEBOOK/PC */
  @media (min-width: 968px) and (min-height: 550px) {
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 28px;
    div {
      padding: 10px;

      input {
        font-size: 1.7rem;
        padding: 10px;
        height: 36px;
        width: 220px;
      }
      svg {
        width: 1.8rem;
      }
    }
    button {
      border-radius: 3px;
      font-size: 1.8rem;
      margin-top: 0px;
      margin-left: 20px;
      height: 36px;
      width: 120px;
    }
  }
`;

export const MainFrame = styled.div`
  display: none;
  z-index: 999;
  justify-content: center;
  grid-area: mainframe;

  @media (min-width: 968px) and (max-width: 1100px) {
    display: inline-grid;
    img {
      width: 700px;
    }
  }

  /* ULTRAWIDE */
  @media (min-height: 768px) and (min-width: 1100px) {
    display: inline-grid;
  }
`;

export const ExamplesFrame = styled.div`
  display: none;
  z-index: 999;
  justify-content: center;
  grid-area: mainframe;

  /* NOTEBOOK/PC */
  @media (min-width: 968px) and (max-width: 1100px) {
    display: inline-grid;
    img {
      width: 700px;
    }
  }

  /* ULTRAWIDE */
  @media (min-height: 768px) and (min-width: 1200px) {
    display: inline-grid;
  }
`;

export const TeamFrame = styled.div`
  display: none;
  z-index: 999;
  justify-content: center;
  grid-area: mainframe;

  /* NOTEBOOK/PC */
  @media (min-width: 968px) and (max-width: 1200px) {
    display: inline-grid;
    img {
      width: 700px;
    }
  }

  /* ULTRAWIDE */
  @media (min-height: 768px) and (min-width: 1200px) {
    display: inline-grid;
  }
`;

export const AboutFrame = styled.div`
  display: none;
  z-index: 999;
  justify-content: center;
  grid-area: mainframe;

  /* NOTEBOOK/PC */
  @media (min-width: 968px) and (max-width: 1100px) {
    display: inline-grid;
    img {
      width: 700px;
    }
  }

  /* ULTRAWIDE */
  @media (min-height: 768px) and (min-width: 1100px) {
    display: inline-grid;
  }
`;

export const Wave = styled.div`
  position: absolute;
  top: 11vh;
  left: -1600px;
  z-index: 10;

  /* MOBILE HORIZONTAL */
  @media (min-width: 550px) and (max-height: 550px) {
    top: 4vh;
    left: -1550px;
  }

  /* NOTEBOOK/PC */
  @media (min-width: 968px) and (min-height: 550px) {
    width: 100%;
    top: 12%;
    left: 0;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const BottomBar = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  grid-area: login;
  width: 100%;
  height: 70%;
  background-color: var(--color-primary-0);

  @media (min-width: 550px) and (max-height: 550px) {
    height: 40%;
  }

  /* IPAD VERTICAL*/
  @media (min-width: 768px) and (max-width: 1100px) {
    height: 67%;
  }

  /* NOTEBOOK/PC */
  @media (min-height: 768px) and (min-width: 1999px) {
    height: 72%;
  }

  /* ULTRAWIDE */
  @media (min-width: 2000px) {
    height: 70%;
  }
`;

export const ModalBackground = styled.div`
  position: absolute;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;

export const Text = styled.div`
  text-align: center;
  width: 80%;

  h3 {
    font: 700 2.6rem Inter;
    color: var(--color-secondary-6);
  }
`;

export const ReturnModal = styled.div`
  margin-top: 15px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.2);
  }
  img {
    width: 60px;
  }
`;

export const RegisterModal = styled.div`
  position: absolute;
  z-index: 99999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 440px;
  height: 580px;
  border-radius: 4px;
  background: var(--color-primary-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;

  div {
    padding: 10px;
    &:nth-child(3) {
      margin-right: 17px;
    }
    input {
      font-size: 1.8rem;
      padding: 0px 10px;
      height: 45px;
      width: 300px;
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
  }
`;
