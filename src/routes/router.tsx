import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Board from '../pages/Board';
import Landing from '../pages/Landing';

const Router = () => {
  return (
    <Switch>
      <Route path="/board" component={Board} />
      <Route path="/" component={Landing} />
    </Switch>
  );
};

export default Router;
