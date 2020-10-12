/* eslint-disable @typescript-eslint/no-unused-vars */
import { History, LocationState } from 'history';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Landing from '../../pages/Landing';
import { RootStoreType } from '../../redux/store/store';

interface LandingContainerProps {
  history: History<LocationState>;
}

const LandingContainer = ({ history }: LandingContainerProps) => {
  const [handleForm, setHandleForm] = useState(false);
  const status = useSelector((state: RootStoreType) => state.service.status);
  const user = useSelector((state: RootStoreType) => state.service.user);
  const [currentFrame, setCurrentFrame] = useState('main');
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  window.onresize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const handleError = (message: string) => {
    toast.error(message, {
      position: 'top-center',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    if (localStorage.service !== undefined) {
      history.push('/board');
    }
  }, [user]);

  return (
    <Landing
      currentFrame={currentFrame}
      setCurrentFrame={setCurrentFrame}
      handleError={handleError}
      windowSize={windowSize}
      handleForm={handleForm}
      setHandleForm={setHandleForm}
    />
  );
};

export default LandingContainer;
