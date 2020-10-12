import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { LandingContainer } from '../containers';
import Board from '../pages/Board';

const Router = () => {
  return (
    <Switch>
      <Route path="/board" component={Board} />
      <Route path="/" component={LandingContainer} />
    </Switch>
  );
};

export default Router;
