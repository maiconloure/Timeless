import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { LandingContainer, BoardContainer } from '../containers';

const Router = () => {
  return (
    <Switch>
      <Route path="/board" component={BoardContainer} />
      <Route path="/" component={LandingContainer} />
    </Switch>
  );
};

export default Router;
