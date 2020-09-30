import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Board from "../pages/Board";

const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/board" component={Board} />
    </BrowserRouter>
  );
};

export default Router;
