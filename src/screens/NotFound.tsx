import React from 'react';
import { Message } from '../components/common';
import { Description, Status } from '../components/notFound';

function NotFound() {
  return (
    <Message>
      <Status>404</Status>
      <Description>
        The page you requested was not found
      </Description>
    </Message>
  );
}

export default NotFound;
