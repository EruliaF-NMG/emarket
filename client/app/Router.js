import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/pages/home/Home";
import Auth from "./components/pages/auth/Auth";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Auth} />
          <Route path="/register" exact component={Auth} />
        </Switch>        
      </BrowserRouter>
    );
  }
}

export default Router;