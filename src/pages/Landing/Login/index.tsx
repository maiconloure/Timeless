import { Input, PasswordInput, Button } from 'capstone-project';
import React from 'react';

import * as St from '../styled';

interface LoginProps {
  handleSubmit: any;
  OnFinishLogin: (data: any) => void;
  windowSize: {
    width: number;
    height: number;
  };
  setValue: any;
  errors: any;
  handleForm: boolean;
}

const Login = ({
  handleSubmit,
  handleForm,
  OnFinishLogin,
  windowSize,
  setValue,
  errors,
}: LoginProps) => {
  return (
    <>
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
    </>
  );
};

export default Login;
