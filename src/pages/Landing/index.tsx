/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input, PasswordInput, Button } from 'capstone-project';
import { History, LocationState } from 'history';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BlankFrameBoard from '../../assets/blank-board.png';
import MainFrameBoard from '../../assets/mainframe.png';
import returnIcon from '../../assets/return-icon.png';
import LibIcon from '../../assets/thumb.jpg';
import WaveBackground from '../../assets/wave.svg';
import PageTransition from '../../components/pageTransition';
import { requestLogin, registerUser } from '../../redux/actions/service.action';
import { RootStoreType } from '../../redux/store/store';
import * as St from './styled';

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
    console.log(status)
    if (localStorage.service !== undefined) {
      history.push('/board');
    } else {
    }
  });

  return (
    <St.LandingPage>
      <St.Container>
        <St.LeftMenu>
          <img onClick={() => setCurrentFrame('main')} src={LibIcon} alt="clock-icon" />
          <St.LinksContainer>
            <p onClick={() => setCurrentFrame('examples')}>Exemplo</p>
            <p onClick={() => setCurrentFrame('teams')}>Times</p>
            <p onClick={() => setCurrentFrame('about')}>Sobre</p>
          </St.LinksContainer>
        </St.LeftMenu>

        {(!handleForm || windowSize.width > 550) && (
          <St.LoginMenu>
            <Input
              type="email"
              placeholder="email"
              width={windowSize.width < 550 ? '300px' : '400px'}
              height={windowSize.height > 550 ? '55px' : '44px'}
              onTextChange={(evt: any) => setEmail(evt)}
            />
            <PasswordInput
              placeholder="senha"
              width={windowSize.width < 550 ? '300px' : '400px'}
              height={windowSize.height > 550 ? '55px' : '44px'}
              onTextChange={(evt: any) => setPassword(evt)}
            />
            <div>
              <Button
                fontSize={windowSize.height > 550 ? '3.2rem' : '2.8rem'}
                height={windowSize.height > 550 ? '55px' : '44px'}
                onClick={OnFinishLogin}>
                Entrar
              </Button>
            </div>
          </St.LoginMenu>
        )}

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

        <St.RegisterArea>
          <St.TopFrame>
            <St.FeatOne>
              <div />
              <p>Alto nível em gestão</p>
              <p>de tempo e equipes.</p>
            </St.FeatOne>

            {!handleForm ? (
              <Button
                fontSize={windowSize.height > 550 ? '2.8rem' : '2.4rem'}
                onClick={() => setHandleForm(true)}
                width="250px"
                height={windowSize.height > 550 ? '70px' : '46px'}>
                Começe agora
              </Button>
            ) : (
              <St.Return onClick={() => setHandleForm(false)}>
                <img src={returnIcon} alt="return-icon" />
              </St.Return>
            )}

            <St.FeatTwo>
              <div />
              <p>Fluxo dinâmico e intuitivo,</p>
              <p>eficiência elevada ao máximo!</p>
            </St.FeatTwo>
          </St.TopFrame>
        </St.RegisterArea>

        {windowSize.width < 968 && handleForm && (
          <St.RegisterMenu>
            <Input
              type="email"
              placeholder="email"
              width={windowSize.width < 550 ? '300px' : '400px'}
              height={windowSize.height > 550 ? '55px' : '44px'}
              onTextChange={(evt: any) => setEmail(evt)}
            />
            <PasswordInput
              placeholder="senha"
              width={windowSize.width < 550 ? '300px' : '400px'}
              height={windowSize.height > 550 ? '55px' : '44px'}
              onTextChange={(evt: any) => setPassword(evt)}
            />
            <Button
              fontSize={windowSize.height > 550 ? '3.2rem' : '2.8rem'}
              height={windowSize.height > 550 ? '55px' : '44px'}
              onClick={OnFinishRegister}>
              Começar
            </Button>
          </St.RegisterMenu>
        )}

        {windowSize.width > 968 && handleForm && (
          <St.ModalBackground>
            <St.RegisterModal>
              <St.ReturnModal onClick={() => setHandleForm(false)}>
                <img src={returnIcon} alt="return-icon" />
              </St.ReturnModal>
              <St.Text>
                <h3>Começe hoje mesmo, a gerenciar seu tempo ou equipe.</h3>
              </St.Text>
              <St.Form>
                <Input
                  type="text"
                  placeholder="email"
                  width="300px"
                  fontSize="2rem"
                  height="48px"
                  onTextChange={(evt: any) => setEmail(evt)}
                />
                <PasswordInput
                  placeholder="senha"
                  width="300px"
                  fontSize="2rem"
                  height="48px"
                  onTextChange={(evt: any) => setPassword(evt)}
                />
                <Button fontSize="2.6rem" height="44px" weight={600} onClick={OnFinishRegister}>
                  Começar
                </Button>
              </St.Form>
            </St.RegisterModal>
          </St.ModalBackground>
        )}

        {currentFrame === 'main' && (
          <St.MainFrame>
            <PageTransition>
              <img src={MainFrameBoard} alt="main-frame-board" />
            </PageTransition>
          </St.MainFrame>
        )}

        {currentFrame === 'examples' && (
          <St.ExamplesFrame>
            <PageTransition>
              <img src={BlankFrameBoard} alt="main-frame-board" />
            </PageTransition>
          </St.ExamplesFrame>
        )}

        {currentFrame === 'teams' && (
          <St.TeamFrame>
            <PageTransition>
              <img src={BlankFrameBoard} alt="main-frame-board" />
            </PageTransition>
          </St.TeamFrame>
        )}

        {currentFrame === 'about' && (
          <St.AboutFrame>
            <PageTransition>
              <img src={BlankFrameBoard} alt="main-frame-board" />
            </PageTransition>
          </St.AboutFrame>
        )}
      </St.Container>

      <St.Wave>
        <img src={WaveBackground} alt="wave background" />
      </St.Wave>
      <St.BottomBar />
    </St.LandingPage>
  );
};

export default Landing;
