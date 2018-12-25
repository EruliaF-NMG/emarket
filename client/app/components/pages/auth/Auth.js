import React, { Component } from "react";
import Login from "./includes/Login";
import Register from "./includes/Register";
import MainWrapper from "../../ui-elements/template/MainWrapper"

class Auth extends Component {
  render() {
    return (
      <div className="container">
      <MainWrapper/>
        <div className="row">
          <div className="col-md-6 col-sm-12 divLeft">
          <Login/>
          </div>
          <div className="col-md-6 col-sm-12 divLeft">
          <Register/>        
          </div>
        </div> 
      </div>
    );
  }
}

export default Auth;
