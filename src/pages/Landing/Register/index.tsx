import { Input, PasswordInput, Button } from 'capstone-project';
import React from 'react';

import PageTransition from '../../../components/pageTransition';
import { icons } from '../../../utils/importAll';
import * as St from '../styled';

interface RegisterProps {
  windowSize: {
    width: number;
    height: number;
  };
  handleForm: boolean;
  setHandleForm: any;
  handleSubmit: any;
  OnFinishRegister: (data: any) => void;
  setValue: any;
  errors: any;
}

const Register = ({
  windowSize,
  handleForm,
  setHandleForm,
  handleSubmit,
  OnFinishRegister,
  setValue,
  errors,
}: RegisterProps) => {
  return (
    <>
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
        <St.RegisterMenu onSubmit={handleSubmit(OnFinishRegister)}>
          <St.RegisterForm>
            <Input
              type="text"
              placeholder="nome"
              width={windowSize.width < 550 ? '300px' : '400px'}
              height={windowSize.height > 550 ? '50px' : '40px'}
              onTextChange={(evt: any) => setValue('name', evt.currentTarget.value)}
            />
            {errors.name && <St.Error>{errors.name.message}</St.Error>}
          </St.RegisterForm>

          <St.RegisterForm>
            <Input
              type="email"
              placeholder="email"
              width={windowSize.width < 550 ? '300px' : '400px'}
              height={windowSize.height > 550 ? '50px' : '40px'}
              onTextChange={(evt: any) => setValue('email', evt.currentTarget.value)}
            />
            {errors.email && <St.Error>{errors.email.message}</St.Error>}
          </St.RegisterForm>

          <St.RegisterForm>
            <PasswordInput
              placeholder="senha"
              width={windowSize.width < 550 ? '300px' : '400px'}
              height={windowSize.height > 550 ? '50px' : '40px'}
              onTextChange={(evt: any) => setValue('password', evt.currentTarget.value)}
            />
            {errors.password && <St.Error>{errors.password.message}</St.Error>}
          </St.RegisterForm>

          <St.RegisterForm>
            <Button
              fontSize={windowSize.height > 550 ? '3.2rem' : '2.8rem'}
              height={windowSize.height > 550 ? '55px' : '44px'}
              onClick={handleSubmit(OnFinishRegister)}>
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

              <St.Form onSubmit={handleSubmit(OnFinishRegister)}>
                <St.RegForm>
                  <Input
                    type="text"
                    placeholder="nome"
                    width="300px"
                    fontSize="2rem"
                    height="48px"
                    onTextChange={(evt: any) => setValue('name', evt.currentTarget.value)}
                  />
                  {errors.name && <St.RegError>{errors.name.message}</St.RegError>}
                </St.RegForm>

                <St.RegForm>
                  <Input
                    type="email"
                    placeholder="email"
                    width="300px"
                    fontSize="2rem"
                    height="48px"
                    onTextChange={(evt: any) => setValue('email', evt.currentTarget.value)}
                  />
                  {errors.email && <St.RegError>{errors.email.message}</St.RegError>}
                </St.RegForm>

                <St.RegForm>
                  <PasswordInput
                    placeholder="senha"
                    width="300px"
                    fontSize="2rem"
                    height="48px"
                    onTextChange={(evt: any) => setValue('password', evt.currentTarget.value)}
                  />
                  {errors.password && <St.RegError>{errors.password.message}</St.RegError>}
                </St.RegForm>

                <St.RegForm>
                  <Button
                    fontSize="2.6rem"
                    height="44px"
                    weight={600}
                    onClick={handleSubmit(OnFinishRegister)}>
                    Começar
                  </Button>
                </St.RegForm>
              </St.Form>
            </St.RegisterModal>
          </PageTransition>
        </St.ModalBackground>
      )}
    </>
  );
};

export default Register;
