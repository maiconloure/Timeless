/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input, PasswordInput, Button } from 'capstone-project';
import { History, LocationState } from 'history';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast, useToast } from 'react-toastify';

import PageTransition from '../../components/pageTransition';
import { requestLogin, registerUser } from '../../redux/actions/service.action';
import { RootStoreType } from '../../redux/store/store';
import { icons, images } from '../../utils/importAll';
import * as St from './styled';

import src from '*.bmp';

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

  const { register, unregister, handleSubmit, setValue, errors } = useForm();

  const {
    register: register2,
    unregister: unregister2,
    handleSubmit: handleSubmit2,
    setValue: setValue2,
    errors: errors2,
  } = useForm();

  useEffect(() => {
    register('email', {
      required: 'email obrigatório',
      pattern: {
        value: /[a-z0-9._%+!$&*=^|~#%{}/-]+@([a-z0-9-]+\.){1,}([a-z]{2,22})/,
        message: 'email inválido',
      },
    });
    register('password', {
      required: 'digite sua senha',
      pattern: {
        value: /^.{5,}$/,
        message: 'senha inválida',
      },
    });
    return () => {
      unregister('email');
      unregister('password');
    };
  }, [register, unregister]);

  useEffect(() => {
    register2('name', {
      required: 'digite seu nome',
      pattern: {
        value: /^.{3,}$/,
        message: 'nome inválido',
      },
    });
    register2('email', {
      required: 'email obrigatório',
      pattern: {
        value: /[a-z0-9._%+!$&*=^|~#%{}/-]+@([a-z0-9-]+\.){1,}([a-z]{2,22})/,
        message: 'email inválido',
      },
    });
    register2('password', {
      required: 'digite sua senha',
      pattern: {
        value: /^.{5,}$/,
        message: 'senha inválida',
      },
    });
    return () => {
      unregister2('name');
      unregister2('email');
      unregister2('password');
    };
  }, [register2, unregister2]);

  window.onresize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const OnFinishLogin = (data: any) => {
    dispatch(requestLogin({ email: data.email, password: data.password }));
    setTimeout(() => {
      if (localStorage.getItem('Error') !== '200') {
        toast.error('Erro ao efetuar login, verifique seus dados, ou tente novamente mais tarde.', {
          position: 'top-center',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }, 1000);
  };

  const OnFinishRegister = (data: any) => {
    dispatch(registerUser({ name: data.name, email: data.email, password: data.password }));
    setTimeout(() => {
      if (localStorage.getItem('Error') !== '200') {
        toast.error(
          'Erro ao efetuar cadastro, verifique seus dados, ou tente novamente mais tarde.',
          {
            position: 'top-center',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
    }, 1000);
  };

  useEffect(() => {
    if (localStorage.service !== undefined) {
      history.push('/board');
    }
  }, [user]);

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

          {(!handleForm || windowSize.width > 968) && (
            <St.LoginMenu onSubmit={handleSubmit(OnFinishLogin)}>
              <St.LoginForm>
                <Input
                  type="email"
                  name="email"
                  placeholder="email"
                  width={windowSize.width < 550 ? '300px' : '400px'}
                  height={windowSize.height > 550 ? '55px' : '44px'}
                  onTextChange={(evt: any) => setValue('email', evt.currentTarget.value)}
                />
                {errors.email && <St.Error>{errors.email.message}</St.Error>}
              </St.LoginForm>

              <St.LoginForm>
                <PasswordInput
                  placeholder="senha"
                  width={windowSize.width < 550 ? '300px' : '400px'}
                  height={windowSize.height > 550 ? '55px' : '44px'}
                  onTextChange={(evt: any) => setValue('password', evt.currentTarget.value)}
                />
                {errors.password && <St.Error>{errors.password.message}</St.Error>}
              </St.LoginForm>

              <St.LoginForm>
                <Button
                  fontSize={windowSize.height > 550 ? '3.2rem' : '2.8rem'}
                  height={windowSize.height > 550 ? '55px' : '44px'}
                  onClick={handleSubmit(OnFinishLogin)}>
                  Entrar
                </Button>
              </St.LoginForm>
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
                  comece agora
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
            <St.RegisterMenu onSubmit={handleSubmit2(OnFinishRegister)}>
              <St.RegisterForm>
                <Input
                  type="text"
                  placeholder="nome"
                  width={windowSize.width < 550 ? '300px' : '400px'}
                  height={windowSize.height > 550 ? '50px' : '40px'}
                  onTextChange={(evt: any) => setValue2('name', evt.currentTarget.value)}
                />
                {errors2.name && <St.Error>{errors2.name.message}</St.Error>}
              </St.RegisterForm>

              <St.RegisterForm>
                <Input
                  type="email"
                  placeholder="email"
                  width={windowSize.width < 550 ? '300px' : '400px'}
                  height={windowSize.height > 550 ? '50px' : '40px'}
                  onTextChange={(evt: any) => setValue2('email', evt.currentTarget.value)}
                />
                {errors2.email && <St.Error>{errors2.email.message}</St.Error>}
              </St.RegisterForm>

              <St.RegisterForm>
                <PasswordInput
                  placeholder="senha"
                  width={windowSize.width < 550 ? '300px' : '400px'}
                  height={windowSize.height > 550 ? '50px' : '40px'}
                  onTextChange={(evt: any) => setValue2('password', evt.currentTarget.value)}
                />
                {errors2.password && <St.Error>{errors2.password.message}</St.Error>}
              </St.RegisterForm>
              <St.RegisterForm>
                <Button
                  fontSize={windowSize.height > 550 ? '3.2rem' : '2.8rem'}
                  height={windowSize.height > 550 ? '55px' : '44px'}
                  onClick={handleSubmit2(OnFinishRegister)}>
                  Começar
                </Button>
              </St.RegisterForm>
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
                  <St.Form onSubmit={handleSubmit2(OnFinishRegister)}>
                    <St.RegForm>
                      <Input
                        type="text"
                        placeholder="nome"
                        width="300px"
                        fontSize="2rem"
                        height="48px"
                        onTextChange={(evt: any) => setValue2('name', evt.currentTarget.value)}
                      />
                      {errors2.name && <St.RegError>{errors2.name.message}</St.RegError>}
                    </St.RegForm>

                    <St.RegForm>
                      <Input
                        type="email"
                        placeholder="email"
                        width="300px"
                        fontSize="2rem"
                        height="48px"
                        onTextChange={(evt: any) => setValue2('email', evt.currentTarget.value)}
                      />
                      {errors2.email && <St.RegError>{errors2.email.message}</St.RegError>}
                    </St.RegForm>

                    <St.RegForm>
                      <PasswordInput
                        placeholder="senha"
                        width="300px"
                        fontSize="2rem"
                        height="48px"
                        onTextChange={(evt: any) => setValue2('password', evt.currentTarget.value)}
                      />
                      {errors2.password && <St.RegError>{errors2.password.message}</St.RegError>}
                    </St.RegForm>
                    <St.RegForm>
                      <Button
                        fontSize="2.6rem"
                        height="44px"
                        weight={600}
                        onClick={handleSubmit2(OnFinishRegister)}>
                        Começar
                      </Button>
                    </St.RegForm>
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
