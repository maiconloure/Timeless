import { Input, PasswordInput, Button } from 'capstone-project';
import React from 'react';

import { PageTransition } from '../../../components';
import { RegisterProps } from '../../PageInterface';
import * as St from '../styled';

const Register = ({
  windowSize,
  handleForm,
  setHandleForm,
  handleSubmit,
  OnFinishRegister,
  errors,
  handleChangeName,
  handleChangeEmail,
  handleChangePassword,
  switchText,
  setSwitchText,
}: RegisterProps) => (
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
            <p>Voltar</p>
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
            onTextChange={handleChangeName}
          />
          {errors.name && <St.Error>{errors.name.message}</St.Error>}
        </St.RegisterForm>

        <St.RegisterForm>
          <Input
            type="email"
            placeholder="email"
            width={windowSize.width < 550 ? '300px' : '400px'}
            height={windowSize.height > 550 ? '50px' : '40px'}
            onTextChange={handleChangeEmail}
          />
          {errors.email && <St.Error>{errors.email.message}</St.Error>}
        </St.RegisterForm>

        <St.RegisterForm>
          <PasswordInput
            placeholder="senha"
            width={windowSize.width < 550 ? '300px' : '400px'}
            height={windowSize.height > 550 ? '50px' : '40px'}
            onTextChange={handleChangePassword}
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
            {!switchText ? (
              <St.Text>
                <h3>Comece hoje mesmo, a gerenciar seu tempo ou equipe.</h3>
              </St.Text>
            ) : (
              <St.Text>
                <h3>Aproveite 3 meses grátis!</h3>
              </St.Text>
            )}

            <St.Form onSubmit={handleSubmit(OnFinishRegister)}>
              <St.RegForm>
                <Input
                  type="text"
                  placeholder="nome"
                  width="300px"
                  fontSize="2rem"
                  height="48px"
                  onTextChange={handleChangeName}
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
                  onTextChange={handleChangeEmail}
                />
                {errors.email && <St.RegError>{errors.email.message}</St.RegError>}
              </St.RegForm>

              <St.RegForm>
                <PasswordInput
                  placeholder="senha"
                  width="300px"
                  fontSize="2rem"
                  height="48px"
                  onTextChange={handleChangePassword}
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

                <St.ReturnModal onClick={() => setHandleForm(false)}>
                  <p>Voltar</p>
                </St.ReturnModal>
              </St.RegForm>
            </St.Form>
          </St.RegisterModal>
        </PageTransition>
      </St.ModalBackground>
    )}
  </>
);

export default Register;
