/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input, PasswordInput, Button } from 'capstone-project';
import React, { ChangeEvent } from 'react';

import { LoginProps } from '../../PageInterface';
import * as St from '../styled';

const Login = ({
  OnFinishLogin,
  windowSize,
  handleSubmit,
  handleForm,
  errors,
  handleChangeEmail,
  handleChangePassword,
}: LoginProps) => (
  <>
    {(!handleForm || windowSize.width > 968) && (
      <St.LoginMenu onSubmit={handleSubmit(OnFinishLogin)}>
        <St.LoginForm>
          <Input
            type="text"
            name="email"
            placeholder="email"
            width={windowSize.width < 550 ? '300px' : '400px'}
            height={windowSize.height > 550 ? '55px' : '44px'}
            onTextChange={handleChangeEmail}
          />
          {errors.email && <St.Error>{errors.email.message}</St.Error>}
        </St.LoginForm>

        <St.LoginForm>
          <PasswordInput
            placeholder="senha"
            width={windowSize.width < 550 ? '300px' : '400px'}
            height={windowSize.height > 550 ? '55px' : '44px'}
            onTextChange={handleChangePassword}
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
  </>
);

export default Login;
