import React, { Component } from "react";
import Login from "./includes/Login";
import Register from "./includes/Register";
import MainWrapper from "../../ui-elements/template/MainWrapper";
import {Breadcrumb} from "../../ui-elements/common-elements/CommonElements";

class Auth extends Component {
  render() {
    return (
      <MainWrapper>      

        <Breadcrumb>
          <i urlTo="/Home" displayName="Home" />
          <i urlTo="/login" displayName="Login / Register"/>
        </Breadcrumb>

        <div className="row">
          <div className="col-md-6 col-sm-12 divLeft">
          <Login/>
          </div>
          <div className="col-md-6 col-sm-12 divLeft">
          <Register/>        
          </div>
        </div> 
      </MainWrapper>
    );
  }
}

export default Auth;
