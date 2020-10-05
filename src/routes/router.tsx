import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PageTransition from '../components/pageTransition';
import Board from '../pages/Board';
import Landing from '../pages/Landing';

const Router = () => {
  return (
    <Switch>
      <PageTransition>
        <Route path="/board" component={Board} />
      </PageTransition>

      <PageTransition>
        <Route path="/" component={Landing} />
      </PageTransition>
    </Switch>
  );
};

export default Router;
