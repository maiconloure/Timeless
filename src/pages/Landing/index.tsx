import React from 'react';
import { ToastContainer } from 'react-toastify';

import { PageTransition } from '../../components';
import { LoginContainer, RegisterContainer } from '../../containers';
import { icons, images } from '../../utils/importAll';
import { LandingPageProps } from '../PageInterface';
import * as St from './styled';

const Landing = ({
  currentFrame,
  setCurrentFrame,
  handleError,
  windowSize,
  handleForm,
  setHandleForm,
}: LandingPageProps) => (
  <PageTransition>
    <St.Notification>
      <ToastContainer />
    </St.Notification>
    <St.LandingPage>
      <St.Container>
        <St.LeftMenu>
          <img onClick={() => setCurrentFrame('main')} src={icons.logo} alt="logo" />
          <St.LinksContainer>
            <p onClick={() => setCurrentFrame('examples')}>Exemplo</p>
            <p onClick={() => setCurrentFrame('teams')}>Times</p>
            <p onClick={() => setCurrentFrame('about')}>Sobre</p>
          </St.LinksContainer>
        </St.LeftMenu>
        <LoginContainer handleError={handleError} windowSize={windowSize} handleForm={handleForm} />
        <St.LogoArea>
          <St.Logo onClick={() => setCurrentFrame('main')}>
            <St.LogoBox />
            <h1>Time</h1>
            <h1>less</h1>
          </St.Logo>
          <St.Slogan>
            <p>simples, rápido e dinâmico!</p>
          </St.Slogan>
        </St.LogoArea>
        <RegisterContainer
          handleError={handleError}
          windowSize={windowSize}
          handleForm={handleForm}
          setHandleForm={setHandleForm}
        />
        {currentFrame === 'main' && (
          <St.MainFrame>
            <PageTransition>
              <img src={images.mainframe} alt="main-frame-board" />
            </PageTransition>
          </St.MainFrame>
        )}
        {currentFrame === 'examples' && (
          <St.ExamplesFrame>
            <PageTransition>
              <img src={images.blankBoard} alt="main-frame-board" />
            </PageTransition>
          </St.ExamplesFrame>
        )}
        {currentFrame === 'teams' && (
          <St.TeamFrame>
            <PageTransition>
              <img src={images.blankBoard} alt="main-frame-board" />
            </PageTransition>
          </St.TeamFrame>
        )}
        {currentFrame === 'about' && (
          <St.AboutFrame>
            <PageTransition>
              <img src={images.blankBoard} alt="main-frame-board" />
            </PageTransition>
          </St.AboutFrame>
        )}
      </St.Container>
      <St.Wave>
        <img src={images.wave} alt="wave background" />
      </St.Wave>
      <St.BottomBar />
    </St.LandingPage>
  </PageTransition>
);

export default Landing;
