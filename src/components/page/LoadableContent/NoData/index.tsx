import React from 'react';
import Caption from './Caption';
import { Message } from '../../../common';

function NoData() {
  return (
    <Message>
      <Caption>No data received</Caption>
    </Message>
  );
}

export default NoData;
