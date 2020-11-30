import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, NotFound, View } from './screens';

export default (
  <Switch>
    <Route component={Main} path={['/', '/characters']} exact />
    <Route component={View} path="/characters/:id" />
    <Route component={NotFound} />
  </Switch>
);
