import React from 'react';
import { Circle } from 'styled-spinkit';
import constants from '../../../constants';

function Preloader() {
  return <Circle color={constants.colors.background2} size={100} />;
}

export default Preloader;
