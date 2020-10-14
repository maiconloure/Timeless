import React from 'react';
import { Background } from '../EditModalStyles';

interface Props {
  show: boolean;
}

const ModalBackground = ({ show }: Props) => {
  return <>{show && <Background />}</>;
};

export default ModalBackground;
