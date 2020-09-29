import { Input, PasswordInput, Button } from 'capstone-project';
import React from 'react';
import styled from 'styled-components';

import LibIcon from '../../assets/thumb.jpg';

const Landing = () => {
  return (
    <LandingPage>
      <Container>
        <TopBox />
        <TopContainer>
          <LeftMenu>
            <img src={LibIcon} alt="clock-icon" />
            <LinksContainer>
              <p>Exemplo</p>
              <p>Times</p>
              <p>Sobre</p>
            </LinksContainer>
          </LeftMenu>

          <LoginMenu>
            <Input
              type="text"
              placeholder="usuário"
              color="#014D82"
              width="220px"
              fontSize="18px"
              weight={400}
              height="36px"
            />
            <PasswordInput
              placeholder="senha"
              width="220px"
              color="#014D82"
              fontSize="18px"
              weight={400}
              height="36px"
            />
            <Button color="#014D82" fontSize="20px" width="120px" height="36px" weight={600}>
              Login
            </Button>
          </LoginMenu>
        </TopContainer>

        <LogoArea>
          <Logo>
            <LogoBox />
            <h1>Time</h1>
            <h1>less</h1>
          </Logo>
        </LogoArea>

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

        <MainFrame />

        <BottomBar />
      </Container>
    </LandingPage>
  );
};

export default Landing;

const LandingPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  /* overflow: hidden; */
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.4fr 1fr 2fr 0.8fr;
`;

const TopContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;

  @media (min-width: 770px) {
    width: 100%;
    height: 50%;
    color: white;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const LeftMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 12px;

  img {
    display: none;
  }

  @media (min-width: 770px) {
    align-items: center;
    padding: 20px;
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
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  margin: 5%;
  p {
    width: 65px;
    font-family: 'Roboto', sans-serif;
    font-size: 2.4rem;
    font-weight: 600;
    color: #2d2b2b;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  @media (min-width: 770px) {
    justify-content: space-evenly;

    p {
      font-size: 18px;
      margin: 0 14px;
    }
  }
`;

const LoginMenu = styled.div`
  @media (min-width: 770px) {
    padding: 20px;
    display: flex;
  }
`;

const LogoArea = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  h1 {
    z-index: 500;
    font-family: Inter;
    color: #fff;
    font-weight: 400;
    font-size: 80px;
    line-height: 116px;

    &:last-child {
      font-weight: 700;
      color: #545454;
    }
  }
`;

const LogoBox = styled.div`
  position: relative;
  left: 198px;
  z-index: 100;
  width: 205px;
  height: 87px;
  background: #3aa6f2;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
`;

const TopBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 500px;
  background-color: #cdd9e2;
`;

const Wave = styled.div``;

const MainFrame = styled.div`
  width: 100%;
`;

const BottomBar = styled.div`
  width: 100%;
  height: 50%;
  background-color: #fff;
`;
