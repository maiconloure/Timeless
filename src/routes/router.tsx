import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PageTransition from '../components/pageTransition';
import Board from '../pages/Board';
import Landing from '../pages/Landing';

const Router = () => {
  return (
    <BrowserRouter>
      <PageTransition>
        <Route path="/" exact component={Landing} />
      </PageTransition>
      <PageTransition>
        <Route path="/board" component={Board} />
      </PageTransition>
    </BrowserRouter>
  );
};

export default Router;
