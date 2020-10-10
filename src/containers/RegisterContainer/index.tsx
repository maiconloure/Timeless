/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input, PasswordInput, Button } from 'capstone-project';
import { History, LocationState } from 'history';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast, useToast } from 'react-toastify';

import PageTransition from '../../components/pageTransition';
import Register from '../../pages/Landing/Register';
import { requestLogin, registerUser } from '../../redux/actions/service.action';
import { RootStoreType } from '../../redux/store/store';
import { icons, images } from '../../utils/importAll';

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
    if (localStorage.getItem('Error') === '400') {
      handleError('Erro ao efetuar cadastro, verifique seus dados, ou tente novamente mais tarde.');
    } else {
      setTimeout(() => {
        if (localStorage.getItem('Error') !== '200') {
          handleError(
            'Erro ao efetuar cadastro, verifique seus dados, ou tente novamente mais tarde.'
          );
        }
      }, 1000);
    }
  };

  return (
    <Register
      windowSize={windowSize}
      handleForm={handleForm}
      setHandleForm={setHandleForm}
      handleSubmit={handleSubmit}
      OnFinishRegister={OnFinishRegister}
      setValue={setValue}
      errors={errors}
    />
  );
};

export default RegisterContainer;
