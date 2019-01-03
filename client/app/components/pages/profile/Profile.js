import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MainWrapper from "../../ui-elements/template/MainWrapper";
import { Breadcrumb } from "../../ui-elements/common-elements/CommonElements";
import { ProfileInfo, MyShops,EditProfileModel } from "./includes/CommonElements";
import * as ProfileActions from "../../../actions/profile/ProfileActions";
import * as CoreActions from "../../../actions/common/CoreActions";

class Profile extends Component {
  constructor() {
    super();
    this.userID = null;
  }

  componentDidMount() {
    let { match, authUser, profileActions } = this.props;
    this.userID = match.params.userID ? match.params.userID : authUser._id;
    profileActions.initProfileUI(this.userID);
  }

  render() {
    let {
      uiChangeStatus, coreData,profileActions,
      modelStatus,formData,errorList,coreActions
    } = this.props;
    return (
      <MainWrapper>
        <Breadcrumb>
          <i urlTo="/Home" displayName="Home" />
          <i urlTo="/profile" displayName="Profile" />
        </Breadcrumb>

        <div className="row profileWrapper">
          <ProfileInfo 
            info={coreData.profileData}
            manageEditModel={()=>profileActions.manageProfileEditModel(coreData.profileData)}
          />
          <MyShops />
        </div>

        <EditProfileModel
          displayStatus={modelStatus.status}
          onCloseBtn={profileActions.manageProfileEditModel}
          handleInput={coreActions.handleInput}
          formData={formData}
          errorList={errorList}
        />


        
      </MainWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    authUser: state.authReducer.authUserProfileInfo,
    coreData: state.coreReducer.apiDataList,
    modelStatus: state.coreUIReducer.modelStatus,
    uiChangeStatus: state.coreReducer.apiDataList.uiUpdateStatus,
    formData: state.coreReducer.formData,     
    errorList: state.coreReducer.errorList,   
  };
}

function mapDispatchToProps(dispatch) {
  return {
    profileActions: bindActionCreators(ProfileActions, dispatch),
    coreActions: bindActionCreators(CoreActions, dispatch),   
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
