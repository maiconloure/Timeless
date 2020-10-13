import React from 'react';
import { Background } from '../EditModalStyles';

const ModalBackground = ({ show }) => {
  return <>{show && <Background />}</>;
};

export default ModalBackground;
