/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import Login from '../../pages/Landing/Login';
import { requestLogin } from '../../redux/actions/service.action';
import { RootStoreType } from '../../redux/store/store';

interface LoginContainerProps {
  handleError: (message: string) => void;
  windowSize: {
    width: number;
    height: number;
  };
  handleForm: boolean;
}

const LoginContainer = ({ handleError, windowSize, handleForm }: LoginContainerProps) => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootStoreType) => state.service.status);
  const { register, unregister, handleSubmit, setValue, errors } = useForm();

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
        value: /^.{3,}$/,
        message: 'senha inválida',
      },
    });
    return () => {
      unregister('email');
      unregister('password');
    };
  }, [register, unregister]);

  const OnFinishLogin = (data: any) => {
    dispatch(requestLogin({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (status !== 200 && status !== 0) {
      handleError('Erro ao efetuar login, verifique seus dados, ou tente novamente mais tarde.');
    }
  }, [status]);

  const handleChangeEmail = (evt: any) => setValue('email', evt.currentTarget.value);
  const handleChangePassword = (evt: any) => setValue('password', evt.currentTarget.value);

  return (
    <Login
      handleSubmit={handleSubmit}
      OnFinishLogin={OnFinishLogin}
      windowSize={windowSize}
      errors={errors}
      handleForm={handleForm}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
    />
  );
};

export default LoginContainer;
