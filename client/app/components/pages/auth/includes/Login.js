import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { InputBox, Button } from "../../../ui-elements/form/CommonElements";
import * as CoreReducerActions from "../../../../actions/common/CoreActions";
import * as AuthActions from "../../../../actions/auth/AuthActions";

class Login extends Component {
  render() {
      let {formData,errorList,coreActions,authActions} =this.props
    return (
      <div className="card col-md-12 divLeft">
        <div className="card-body">
          <div className="row">
            <div className="div100">
            <h5 className="card-title">Login Here..</h5> 
            </div>
            
            <InputBox
              inputID="authEmail"
              inputDisplayName="E-mail"
              inputName="authEmail"
              inputPlaceholder="Enter E-mail Address"
              inputType="text"
              errorTxt={errorList.authEmail}
              inputValue={formData.authEmail}
              onChangeTxt={(eventData)=>coreActions.handleInput(eventData.name,eventData.value)}
            />

            <InputBox
              inputID="authPwd"
              inputDisplayName="Password"
              inputName="authPwd"
              inputPlaceholder="Enter Password"
              inputType="password"
              errorTxt={errorList.authPwd}
              inputValue={formData.authPwd}
              onChangeTxt={(eventData)=>coreActions.handleInput(eventData.name,eventData.value)}
            />

            <Button 
              buttonTxt="Login"
              onClickBtn={()=>authActions.loginUser(formData)}
             />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        formData: state.coreReducer.formData,     
        errorList: state.coreReducer.errorList,     
    };
}

function mapDispatchToProps(dispatch) {
    return {
        coreActions: bindActionCreators(CoreReducerActions, dispatch),   
        authActions: bindActionCreators(AuthActions, dispatch),        
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);
