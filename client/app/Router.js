import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Authorized from "./components/middlewares/Authorized";
import Guest from "./components/middlewares/Guest";

import Home from "./components/pages/home/Home";
import Auth from "./components/pages/auth/Auth";
import Profile from "./components/pages/profile/Profile";
import ViewShop from "./components/pages/shop/ViewShop";
import ProductInfo from "./components/pages/products/ProductInfo";
import Category from "./components/pages/category/Category";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Guest(Auth)} />
          <Route path="/register" exact component={Guest(Auth)} />

          <Route path="/" exact component={Authorized(Home)} />
          <Route path="/profile/:userID?" exact component={Authorized(Profile)} />         
          <Route path="/shop/:shopID" exact component={Authorized(ViewShop)} />
          <Route path="/product/:productID" exact component={Authorized(ProductInfo)} />
          <Route path="/category" exact component={Authorized(Category)} />
        </Switch>        
      </BrowserRouter>
    );
  }
}

export default Router;