import { Input, PasswordInput, Button } from 'capstone-project';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { History, LocationState } from 'history';
import React, { useState } from 'react';
import styled from 'styled-components';

import MainFrameBoard from '../../assets/mainframe.png';
import returnIcon from '../../assets/return.png';
import LibIcon from '../../assets/thumb.jpg';

interface LandingPageProps {
  history: History<LocationState>;
}

const Landing = ({ history }: LandingPageProps) => {
  const [handleForm, setHandleForm] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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

  const OnFinish = () => {
    console.log({ email, password });
    history.push('/board');
  };

  return (
    <LandingPage>
      <Container>
        <LeftMenu>
          <img src={LibIcon} alt="clock-icon" />
          <LinksContainer>
            <p>Exemplo</p>
            <p>Times</p>
            <p>Sobre</p>
          </LinksContainer>
        </LeftMenu>

        {!handleForm && (
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
            <Button
              color="#014D82"
              fontSize={windowSize.height > 550 ? '3.2rem' : '2.8rem'}
              width="200px"
              height={windowSize.height > 550 ? '55px' : '44px'}
              weight={700}
              onClick={OnFinish}>
              Entrar
            </Button>
          </LoginMenu>
        )}

        <LogoArea>
          <Logo>
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
        </RegisterArea>

        {handleForm && (
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
              onClick={OnFinish}>
              Cadastrar
            </Button>
          </RegisterMenu>
        )}

        <MainFrame>
          <img src={MainFrameBoard} alt="main-frame-board" />
        </MainFrame>
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

  &:nth-child(1) {
    margin-right: 20px;
  }

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
      border-radius: 3px;
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
    font: 700 3.6rem Inter;
    line-height: 44px;
    text-align: center;
    color: #ffca30;
  }

  @media (min-width: 550px) and (max-height: 550px) {
    display: flex;
    gap: 5px;
    p {
      font: 700 2.6rem Inter;
      line-height: 2.5rem;
    }
  }

  @media (min-width: 768px) and (min-height: 550px) {
    display: flex;
    gap: 8px;
  }
`;

const FeatOne = styled.div`
  position: absolute;
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
    left: 32%;
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
      font-weight: 500;
      margin-right: 50px;
    }
  }
`;

const FeatTwo = styled.div`
  display: none;
  color: #fff;
  font-weight: 500;
  font-size: 1.8rem;
  position: absolute;
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

  &:nth-child(1) {
    margin-right: 20px;
  }

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
  height: 60%;
  background-color: var(--color-primary-0);
`;
