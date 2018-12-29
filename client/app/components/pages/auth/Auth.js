import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from "./includes/Login";
import Register from "./includes/Register";
import MainWrapper from "../../ui-elements/template/MainWrapper";
import { Breadcrumb } from "../../ui-elements/common-elements/CommonElements";
import * as AuthActions from "../../../actions/auth/AuthActions";

class Auth extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (this.props.isAuthenticated === true) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuthenticated === true) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <MainWrapper>
        <Breadcrumb>
          <i urlTo="/Home" displayName="Home" />
          <i urlTo="/login" displayName="Login / Register" />
        </Breadcrumb>

        <div className="row">
          <div className="col-md-6 col-sm-12 divLeft">
            <Login />
          </div>
          <div className="col-md-6 col-sm-12 divLeft">
            <Register />
          </div>
        </div>
      </MainWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
      isAuthenticated: state.authReducer.isAuthenticated,
  };
}

function mapDispatchToProps(dispatch) {
  return {
      authActions: bindActionCreators(AuthActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Auth);
