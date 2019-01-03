import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Authorized from "./components/middlewares/Authorized";
import Guest from "./components/middlewares/Guest";

import Home from "./components/pages/home/Home";
import Auth from "./components/pages/auth/Auth";
import Profile from "./components/pages/profile/Profile";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Authorized(Home)} />
          <Route path="/profile/:userID?" exact component={Authorized(Profile)} />
          <Route path="/login" exact component={Guest(Auth)} />
          <Route path="/register" exact component={Guest(Auth)} />
        </Switch>        
      </BrowserRouter>
    );
  }
}

export default Router;