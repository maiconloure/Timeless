import React, { useEffect, ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import Login from '../../pages/Landing/Login';
import { requestLogin, updateStatus } from '../../redux/actions/service.action';
import { RootStoreType } from '../../redux/store/store';
import { LoginContainerProps } from '../ContainerInterface';

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

  const OnFinishLogin = (data: { email: string; password: string }) => {
    dispatch(requestLogin({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (!handleForm && status === 400) {
      handleError('Erro ao efetuar login, verifique seus dados, ou tente novamente mais tarde.');
      dispatch(updateStatus(0));
    }
  }, [status]);

  const handleChangeEmail = (evt: ChangeEvent<HTMLInputElement>) =>
    setValue('email', evt.currentTarget.value);

  const handleChangePassword = (evt: ChangeEvent<HTMLInputElement>) =>
    setValue('password', evt.currentTarget.value);

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
