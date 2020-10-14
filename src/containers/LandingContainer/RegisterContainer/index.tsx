/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import Register from '../../../pages/Landing/Register';
import { registerUser, updateStatus } from '../../../redux/actions/service.action';
import { RootStoreType } from '../../../redux/store/store';
import { RegisterContainerProps } from '../../ContainerInterface';

const RegisterContainer = ({
  handleError,
  windowSize,
  handleForm,
  setHandleForm,
}: RegisterContainerProps) => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootStoreType) => state.service.status);
  const { register, unregister, handleSubmit, setValue, errors } = useForm();

  useEffect(() => {
    register('name', {
      required: 'digite seu nome',
      pattern: {
        value: /^.{3,}$/,
        message: 'nome inválido',
      },
    });

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
        message: 'senha deve possui no mínimo 5 caracteres.',
      },
    });

    return () => {
      unregister('name');
      unregister('email');
      unregister('password');
    };
  }, [register, unregister]);

  const OnFinishRegister = (data: { name: string; email: string; password: string }) => {
    dispatch(registerUser({ name: data.name, email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (handleForm && status === 400) {
      handleError('Erro ao efetuar cadastro, verifique seus dados, ou tente novamente mais tarde.');
      dispatch(updateStatus(0));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const handleChangeName = (evt: ChangeEvent<HTMLInputElement>) =>
    setValue('name', evt.currentTarget.value);

  const handleChangeEmail = (evt: ChangeEvent<HTMLInputElement>) =>
    setValue('email', evt.currentTarget.value);

  const handleChangePassword = (evt: ChangeEvent<HTMLInputElement>) =>
    setValue('password', evt.currentTarget.value);

  return (
    <Register
      windowSize={windowSize}
      handleForm={handleForm}
      setHandleForm={setHandleForm}
      handleSubmit={handleSubmit}
      OnFinishRegister={OnFinishRegister}
      errors={errors}
      handleChangeName={handleChangeName}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
    />
  );
};

export default RegisterContainer;
