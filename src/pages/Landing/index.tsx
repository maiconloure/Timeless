/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input, PasswordInput, Button } from 'capstone-project';
import { History, LocationState } from 'history';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import BlankFrameBoard from '../../assets/blank-board.png';
import MainFrameBoard from '../../assets/mainframe.png';
import returnIcon from '../../assets/return-icon.png';
import LibIcon from '../../assets/thumb.jpg';
import PageTransition from '../../components/pageTransition';
import { requestLogin, registerUser } from '../../redux/actions/service.action';
import { RootStoreType } from '../../redux/store';

interface LandingPageProps {
  history: History<LocationState>;
}

const Landing = ({ history }: LandingPageProps) => {
  const dispatch = useDispatch();
  const { status } = useSelector((state: RootStoreType) => state.service);
  const [handleForm, setHandleForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentFrame, setCurrentFrame] = useState('main');
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  window.onresize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const OnFinishLogin = () => {
    console.log('OnFinishLogin');
    dispatch(requestLogin({ email, password }));
  };
  const OnFinishRegister = () => {
    console.log('OnFinishRegister');
    dispatch(registerUser({ email, password }));
  };

  useEffect(() => {
    if (status === 200 || status === 201) {
      history.push('/board');
    }
  });

  return (
    <LandingPage>
      <Container>
        <LeftMenu>
          <img onClick={() => setCurrentFrame('main')} src={LibIcon} alt="clock-icon" />
          <LinksContainer>
            <p onClick={() => setCurrentFrame('examples')}>Exemplo</p>
            <p onClick={() => setCurrentFrame('teams')}>Times</p>
            <p onClick={() => setCurrentFrame('about')}>Sobre</p>
          </LinksContainer>
        </LeftMenu>

        {(!handleForm || windowSize.width > 550) && (
          <LoginMenu>
            <Input
              type="text"
              placeholder="email"
              color="#014D82"
              width={windowSize.width < 550 ? '300px' : '400px'}
              fontSize="2.2rem"
              weight={400}
              height={windowSize.height > 550 ? '55px' : '44px'}
              onTextChange={(evt: any) => setEmail(evt)}
            />
            <PasswordInput
              placeholder="senha"
              width={windowSize.width < 550 ? '300px' : '400px'}
              color="#014D82"
              fontSize="2.2rem"
              weight={400}
              height={windowSize.height > 550 ? '55px' : '44px'}
              onTextChange={(evt: any) => setPassword(evt)}
            />
            <div>
              <Button
                color="#014D82"
                fontSize={windowSize.height > 550 ? '3.2rem' : '2.8rem'}
                width="200px"
                height={windowSize.height > 550 ? '55px' : '44px'}
                weight={700}
                onClick={OnFinishLogin}>
                Entrar
              </Button>
            </div>
          </LoginMenu>
        )}

        <LogoArea>
          <Logo onClick={() => setCurrentFrame('main')}>
            <LogoBox />
            <h1>Time</h1>
            <h1>less</h1>
          </Logo>
          <Slogan>
            <p>simples, rápido</p>
            <p>e dinâmico!</p>
          </Slogan>
        </LogoArea>

        <RegisterArea>
          <TopFrame>
            <FeatOne>
              <div />
              <p>Alto nível em gestão</p>
              <p>de tempo e equipes.</p>
            </FeatOne>

            {!handleForm ? (
              <Button
                color="#014D82"
                fontSize={windowSize.height > 550 ? '2.8rem' : '2.4rem'}
                onClick={() => setHandleForm(true)}
                width="250px"
                height={windowSize.height > 550 ? '70px' : '46px'}
                weight={700}>
                Começe agora
              </Button>
            ) : (
              <Return onClick={() => setHandleForm(false)}>
                <img src={returnIcon} alt="return-icon" />
              </Return>
            )}

            <FeatTwo>
              <div />
              <p>Fluxo dinâmico e intuitivo,</p>
              <p>eficiência elevada ao máximo!</p>
            </FeatTwo>
          </TopFrame>
        </RegisterArea>

        {windowSize.width < 768 && handleForm && (
          <RegisterMenu>
            <Input
              type="text"
              placeholder="email"
              color="#014D82"
              width={windowSize.width < 550 ? '300px' : '400px'}
              fontSize="2.2rem"
              weight={400}
              height={windowSize.height > 550 ? '55px' : '44px'}
              onTextChange={(evt: any) => setEmail(evt)}
            />
            <PasswordInput
              placeholder="senha"
              width={windowSize.width < 550 ? '300px' : '400px'}
              color="#014D82"
              fontSize="2.2rem"
              weight={400}
              height={windowSize.height > 550 ? '55px' : '44px'}
              onTextChange={(evt: any) => setPassword(evt)}
            />
            <Button
              color="#014D82"
              fontSize={windowSize.height > 550 ? '3.2rem' : '2.8rem'}
              width="200px"
              height={windowSize.height > 550 ? '55px' : '44px'}
              weight={700}
              onClick={OnFinishRegister}>
              Começar
            </Button>
          </RegisterMenu>
        )}

        {windowSize.width > 768 && handleForm && (
          <ModalBackground>
            <RegisterModal>
              <ReturnModal onClick={() => setHandleForm(false)}>
                <img src={returnIcon} alt="return-icon" />
              </ReturnModal>
              <Text>
                <h3>Começe hoje mesmo, a gerenciar seu tempo ou equipe.</h3>
              </Text>
              <Form>
                <Input
                  type="text"
                  placeholder="email"
                  color="#014D82"
                  width="300px"
                  fontSize="2rem"
                  weight={400}
                  height="48px"
                  onTextChange={(evt: any) => setEmail(evt)}
                />
                <PasswordInput
                  placeholder="senha"
                  width="300px"
                  color="#014D82"
                  fontSize="2rem"
                  weight={400}
                  height="48px"
                  onTextChange={(evt: any) => setPassword(evt)}
                />
                <Button
                  color="#014D82"
                  fontSize="2.6rem"
                  width="200px"
                  height="44px"
                  weight={600}
                  onClick={OnFinishRegister}>
                  Começar
                </Button>
              </Form>
            </RegisterModal>
          </ModalBackground>
        )}

        {currentFrame === 'main' && (
          <MainFrame>
            <PageTransition>
              <img src={MainFrameBoard} alt="main-frame-board" />
            </PageTransition>
          </MainFrame>
        )}

        {currentFrame === 'examples' && (
          <ExamplesFrame>
            <PageTransition>
              <img src={BlankFrameBoard} alt="main-frame-board" />
            </PageTransition>
          </ExamplesFrame>
        )}

        {currentFrame === 'teams' && (
          <TeamFrame>
            <PageTransition>
              <img src={BlankFrameBoard} alt="main-frame-board" />
            </PageTransition>
          </TeamFrame>
        )}

        {currentFrame === 'about' && (
          <AboutFrame>
            <PageTransition>
              <img src={BlankFrameBoard} alt="main-frame-board" />
            </PageTransition>
          </AboutFrame>
        )}
      </Container>

      <Wave>
        <svg
          width="2560"
          height="690"
          viewBox="0 0 2560 690"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M527.216 101.644C286.545 78.7554 94.5924 34.2534 -38.46 0.440552L-47.1515 639.381C681.489 670.795 1144.29 652.088 1557.37 538.696C1887.83 447.983 2682.96 539.673 3039.21 596.857L3131.52 354.59C3107.28 347.093 2952.62 301.352 2527.86 178.363C2103.09 55.3744 1563.22 71.3994 1346.38 94.7855C848.434 124.515 699.009 117.982 527.216 101.644Z"
            fill="#3AA6F2"
          />
          <path
            d="M524 137C283.04 117.387 90.5 75.5 -43 43.5V682.5C686 704 1148.5 679 1560 560C1889.2 464.8 2685.5 545.667 3042.5 598L3131.5 354.5C3107.17 347.333 2951.9 303.7 2525.5 186.5C2099.1 69.3 1559.5 92.6667 1343 119C845.5 155.5 696 151 524 137Z"
            fill="#0190F5"
          />
        </svg>
      </Wave>
      <BottomBar />
    </LandingPage>
  );
};

export default Landing;

const LandingPage = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  /* IPHONE 5 ??? */
  @media (min-width: 550px) and (max-height: 330px) {
    overflow-y: scroll;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 999;
  display: grid;
  grid-gap: 16px;
  height: 100vh;
  grid-template-columns: 100%;
  grid-template-rows: 12% 22% 13% 38%;
  grid-template-areas:
    'top'
    'logo'
    'register'
    'login';

  @media (min-width: 550px) and (max-height: 550px) {
    grid-gap: 4px;
    grid-template-rows: 8% 30% 15% 60%;
  }

  @media (min-width: 768px) and (min-height: 550px) {
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

const LeftMenu = styled.div`
  grid-area: top;
  display: flex;
  justify-content: space-between;
  margin: 14px 16px 0 16px;

  img {
    display: none;
  }

  @media (min-width: 550px) and (max-height: 550px) {
    margin-top: 4px;
  }

  @media (min-width: 768px) and (min-height: 550px) {
    align-items: center;
    padding: 20px 2px;

    img {
      display: block;
      width: 60px;
      border-radius: 8px;
      box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.4);
      margin-right: 14px;
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;

const LinksContainer = styled.div`
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

  @media (min-width: 550px) and (max-height: 550px) {
    p {
      font-size: 2.4rem;
    }
  }

  @media (min-width: 768px) and (min-height: 550px) {
    justify-content: flex-start;

    p {
      width: auto;
      font-size: 2rem;
      margin: 0 14px;
    }
  }
`;

const LoginMenu = styled.div`
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

  @media (min-width: 768px) and (min-height: 550px) {
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
      border-radius: 2px;
      font-size: 1.8rem;
      margin-top: 0px;
      margin-left: 20px;
      height: 36px;
      width: 120px;
    }
  }
`;

const LogoArea = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) and (min-height: 550px) {
    grid-area: logo;
  }
`;

const Logo = styled.div`
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

  @media (min-width: 550px) and (max-height: 550px) {
    h1 {
      font-size: 6rem;
    }
  }

  @media (min-width: 768px) and (min-height: 550px) {
    h1 {
      font-size: 8rem;
      line-height: 8rem;
      margin-bottom: 2.6rem;
    }
  }
`;

const LogoBox = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 166px;
  height: 68px;
  background: #3aa6f2;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 550px) and (max-height: 550px) {
    width: 148px;
  }

  @media (min-width: 768px) and (min-height: 550px) {
    left: -2px;
    width: 200px;
    height: 80px;
  }
`;

const Slogan = styled.div`
  p {
    font: 700 3rem Inter;
    line-height: 44px;
    text-align: center;
    color: var(--color-secondary-6);
  }

  @media (min-width: 550px) and (max-height: 550px) {
    display: flex;
    gap: 5px;
    p {
      font-size: 2.6rem;
      line-height: 2.5rem;
    }
  }

  @media (min-width: 768px) and (min-height: 550px) {
    p {
      font-size: 2.2vw;
    }

    display: flex;
    gap: 8px;
  }
`;

const Return = styled.div`
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
    width: 80px;
  }

  @media (min-width: 550px) and (max-height: 550px) {
    img {
      width: 60px;
    }
  }
`;

const RegisterArea = styled.div`
  grid-area: register;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) and (min-height: 550px) {
    position: relative;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
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

const TopFrame = styled.div`
  @media (min-width: 768px) and (min-height: 550px) {
    width: 900px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const FeatOne = styled.div`
  /* position: absolute; */
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

  @media (min-width: 768px) and (min-height: 550px) {
    display: block;
  }

  @media (min-width: 2000px) and (min-height: 768px) {
    left: 32vw;
  }
`;

const FeatTwo = styled.div`
  display: none;
  width: 250px;
  color: #fff;
  font-weight: 500;
  font-size: 1.8rem;
  /* position: absolute; */
  /* top: 0; */
  right: 27%;

  div {
    width: 122px;
    height: 6px;
    border-radius: 2px;
    background-color: var(--color-secondary-8);
  }

  @media (min-width: 768px) and (min-height: 550px) {
    display: block;
  }
  @media (min-width: 2000px) and (min-height: 768px) {
    right: 33%;
  }
`;

const RegisterMenu = styled.div`
  grid-area: login;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    &:nth-child(2) {
      margin-right: 17px;
    }
    padding: 10px;

    input {
      padding: 10px;
    }
  }

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

  @media (min-width: 768px) and (min-height: 550px) {
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

const MainFrame = styled.div`
  display: none;
  z-index: 999;

  @media (min-width: 768px) and (min-height: 550px) {
    display: inline-grid;
    justify-content: center;
    grid-area: mainframe;
  }
`;

const ExamplesFrame = styled.div`
  display: none;
  z-index: 999;

  @media (min-width: 768px) and (min-height: 550px) {
    display: inline-grid;
    justify-content: center;
    grid-area: mainframe;
  }
`;
const TeamFrame = styled.div`
  display: none;
  z-index: 999;

  @media (min-width: 768px) and (min-height: 550px) {
    display: inline-grid;
    justify-content: center;
    grid-area: mainframe;
  }
`;
const AboutFrame = styled.div`
  display: none;
  z-index: 999;

  @media (min-width: 768px) and (min-height: 550px) {
    display: inline-grid;
    justify-content: center;
    grid-area: mainframe;
  }
`;

const Wave = styled.div`
  position: absolute;
  top: 11vh;
  left: -1700px;
  z-index: 10;

  @media (min-width: 550px) and (max-height: 550px) {
    top: 4vh;
    left: -1550px;
  }

  @media (min-width: 768px) and (min-height: 550px) {
    width: 100%;
    top: 12%;
    left: 0;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

const BottomBar = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  grid-area: login;
  width: 100%;
  height: 70%;

  @media (max-width: 1660px) {
    height: 72%;
  }
  background-color: var(--color-primary-0);
`;

const ModalBackground = styled.div`
  position: absolute;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;

const Text = styled.div`
  text-align: center;
  width: 80%;

  h3 {
    font: 700 2.6rem Inter;
    color: var(--color-secondary-6);
  }
`;

const ReturnModal = styled.div`
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

const RegisterModal = styled.div`
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

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;

  div {
    padding: 10px;
    &:nth-child(2) {
      margin-right: 17px;
    }
    input {
      font-size: 1.8rem;
      padding: 10px;
      height: 50px;
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
