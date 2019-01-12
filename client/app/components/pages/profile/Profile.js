import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MainWrapper from "../../ui-elements/template/MainWrapper";
import { Breadcrumb } from "../../ui-elements/common-elements/CommonElements";
import { ProfileInfo, MyShops,EditProfileModel } from "./includes/CommonElements";
import { CreateShopModel } from "../shop/includes/CommonElements"
import * as ProfileActions from "../../../actions/profile/ProfileActions";
import * as ShopActions from "../../../actions/shop/ShopActions";
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

  componentWillReceiveProps(nextProps,nextState){
   let {setAPIReturnStatus,profileActions,shopActions,coreData} =this.props;

   if(nextProps.setAPIReturnStatus.editUserInfo==true){
    profileActions.updateSucess(nextProps.setAPIReturnContent.editUserInfo);
   }

   if(nextProps.setAPIReturnStatus.createNewShop==true){
    shopActions.createSucess(nextProps.setAPIReturnContent.createNewShop,coreData.shopList);
   }

  }

  render() {
    let {
      uiChangeStatus, coreData,profileActions,
      modelStatus,formData,errorList,coreActions,
      shopActions
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
          <MyShops 
           manageCreateModel={()=>shopActions.manageCreateModel()}
           list={coreData.shopList||[]}
          />
        </div>

        <EditProfileModel
          displayStatus={modelStatus.status.editModel||false}
          onCloseBtn={profileActions.manageProfileEditModel}
          onSaveBtn={profileActions.editProfileInfo}
          handleInput={coreActions.handleInput}
          formData={formData}
          errorList={errorList}
          currentUserID={this.userID}
        />

        <CreateShopModel
          displayStatus={modelStatus.status.createShopModel||false}
          onCloseBtn={shopActions.manageCreateModel}
          onSaveBtn={()=>shopActions.createNewShop(formData,this.userID)}
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
    setAPIReturnStatus: state.coreReducer.setAPIReturnStatus, 
    setAPIReturnContent: state.coreReducer.setAPIReturnContent   
  };
}

function mapDispatchToProps(dispatch) {
  return {
    profileActions: bindActionCreators(ProfileActions, dispatch),
    coreActions: bindActionCreators(CoreActions, dispatch),   
    shopActions: bindActionCreators(ShopActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
