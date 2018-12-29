import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { InputBox, Button,CheckBox } from "../../../ui-elements/form/CommonElements";
import * as CoreReducerActions from "../../../../actions/common/CoreActions";
import * as AuthActions from "../../../../actions/auth/AuthActions";

class Register extends Component {

  render() {

    let {formData,errorList,coreActions,authActions} =this.props

    return (
      <div className="card col-md-12 divLeft">
        <div className="card-body">
          <div className="row">

            <div className="div100">
            <h5 className="card-title">Register Here..</h5>
            </div>
            

            <InputBox
              inputID="name"
              inputDisplayName="Name"
              inputName="name"
              inputPlaceholder="Enter Your Name"
              inputValue={formData.name}
              onChangeTxt={(eventData)=>coreActions.handleInput(eventData.name,eventData.value)}
              inputType="text"
              errorTxt={errorList.name}
            />

            <InputBox
              inputID="email"
              inputDisplayName="E-mail"
              inputName="email"
              inputPlaceholder="Enter E-mail Address"
              inputValue={formData.email}
              onChangeTxt={(eventData)=>coreActions.handleInput(eventData.name,eventData.value)}
              inputType="text"
              errorTxt={errorList.email}
            />

            <InputBox
              inputID="password"
              inputDisplayName="Password"
              inputName="password"
              inputPlaceholder="Enter Password"
              inputValue={formData.password}
              onChangeTxt={(eventData)=>coreActions.handleInput(eventData.name,eventData.value)}
              inputType="password"
              errorTxt={errorList.password}
            />

            <CheckBox
              inputID="seller"
              inputDisplayName="Register as a Merchant"
              inputName="seller"
              inputValue={formData.seller||false}
              onChangeItem={(eventData)=>coreActions.handleInput(eventData.name,eventData.value)}
              errorTxt={errorList.seller}
            />

           
            <Button buttonTxt="Register" onClickBtn={()=>authActions.registerUser(formData)}  />

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
)(Register);
