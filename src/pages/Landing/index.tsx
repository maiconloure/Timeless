/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input, PasswordInput, Button } from 'capstone-project';
import { History, LocationState } from 'history';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast, useToast } from 'react-toastify';

import PageTransition from '../../components/pageTransition';
import LoginContainer from '../../containers/LoginContainer';
import RegisterContainer from '../../containers/RegisterContainer';
import { requestLogin, registerUser } from '../../redux/actions/service.action';
import { RootStoreType } from '../../redux/store/store';
import { icons, images } from '../../utils/importAll';
import * as St from './styled';

interface LandingPageProps {
  currentFrame: string;
  setCurrentFrame: React.Dispatch<React.SetStateAction<string>>;
  handleError: (message: string) => void;
  windowSize: {
    width: number;
    height: number;
  };
  handleForm: boolean;
  setHandleForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const Landing = ({
  currentFrame,
  setCurrentFrame,
  handleError,
  windowSize,
  handleForm,
  setHandleForm,
}: LandingPageProps) => {
  return (
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

          <LoginContainer
            handleError={handleError}
            windowSize={windowSize}
            handleForm={handleForm}
          />

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
};

export default Landing;
