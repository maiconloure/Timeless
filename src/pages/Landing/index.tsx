/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input, PasswordInput, Button } from 'capstone-project';
import { History, LocationState } from 'history';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageTransition from '../../components/pageTransition';
import { requestLogin, registerUser } from '../../redux/actions/service.action';
import { RootStoreType } from '../../redux/store/store';
import { icons, images } from '../../utils/importAll';
import * as St from './styled';

interface LandingPageProps {
  history: History<LocationState>;
}

const Landing = ({ history }: LandingPageProps) => {
  const dispatch = useDispatch();
  const [handleForm, setHandleForm] = useState(false);
  const user = useSelector((state: RootStoreType) => state.service.user);
  const [name, setName] = useState('');
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

  const handleKeyDown = (evt: any) => {
    if (evt.key === 'Enter') {
      if (handleForm) {
        OnFinishRegister();
      } else {
        OnFinishLogin();
      }
    }
  };

  const OnFinishLogin = () => {
    console.log('OnFinishLogin');
    dispatch(requestLogin({ email, password }));
  };

  const OnFinishRegister = () => {
    console.log('OnFinishRegister');
    dispatch(registerUser({ name, email, password }));
  };

  useEffect(() => {
    if (localStorage.service !== undefined) {
      history.push('/board');
    }
  }, [user]);

  return (
    <PageTransition>
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

          {(!handleForm || windowSize.width > 968) && (
            <St.LoginMenu onKeyDown={handleKeyDown}>
              <Input
                type="email"
                name="email"
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
                  Comece agora
                </Button>
              ) : (
                <St.Return onClick={() => setHandleForm(false)}>
                  <img src={icons.return} alt="return-icon" />
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
            <St.RegisterMenu onKeyDown={handleKeyDown}>
              <Input
                type="text"
                placeholder="nome"
                width={windowSize.width < 550 ? '300px' : '400px'}
                height={windowSize.height > 550 ? '50px' : '40px'}
                onTextChange={(evt: any) => setName(evt)}
              />
              <Input
                type="email"
                placeholder="email"
                width={windowSize.width < 550 ? '300px' : '400px'}
                height={windowSize.height > 550 ? '50px' : '40px'}
                onTextChange={(evt: any) => setEmail(evt)}
              />
              <PasswordInput
                placeholder="senha"
                width={windowSize.width < 550 ? '300px' : '400px'}
                height={windowSize.height > 550 ? '50px' : '40px'}
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
              <PageTransition>
                <St.RegisterModal>
                  <St.ReturnModal onClick={() => setHandleForm(false)}>
                    <img src={icons.return} alt="return-icon" />
                  </St.ReturnModal>
                  <St.Text>
                    <h3>Comece hoje mesmo, a gerenciar seu tempo ou equipe.</h3>
                  </St.Text>
                  <St.Form onKeyDown={handleKeyDown}>
                    <Input
                      type="text"
                      placeholder="nome"
                      width="300px"
                      fontSize="2rem"
                      height="48px"
                      onTextChange={(evt: any) => setName(evt)}
                    />
                    <Input
                      type="email"
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
              </PageTransition>
            </St.ModalBackground>
          )}

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
