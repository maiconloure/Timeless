/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import Register from '../../pages/Landing/Register';
import { registerUser } from '../../redux/actions/service.action';
import { RootStoreType } from '../../redux/store/store';

interface RegisterContainerProps {
  handleError: (message: string) => void;
  windowSize: {
    width: number;
    height: number;
  };
  handleForm: boolean;
  setHandleForm: any;
}

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
        message: 'senha inválida',
      },
    });

    return () => {
      unregister('name');
      unregister('email');
      unregister('password');
    };
  }, [register, unregister]);

  const OnFinishRegister = (data: any) => {
    dispatch(registerUser({ name: data.name, email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (status !== 200 && status !== 0) {
      handleError('Erro ao efetuar cadastro, verifique seus dados, ou tente novamente mais tarde.');
    }
  }, [status]);

  const handleChangeName = (evt: any) => setValue('name', evt.currentTarget.value);
  const handleChangeEmail = (evt: any) => setValue('email', evt.currentTarget.value);
  const handleChangePassword = (evt: any) => setValue('password', evt.currentTarget.value);

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
