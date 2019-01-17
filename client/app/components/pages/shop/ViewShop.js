import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MainWrapper from "../../ui-elements/template/MainWrapper";
import { Breadcrumb } from "../../ui-elements/common-elements/CommonElements";
import { ShopInfo,CreateShopModel } from "./includes/CommonElements";
import { ProfileInfo } from "../profile/includes/CommonElements";
import {getValue} from  "../../../helpers/common/CommonMethods";
import * as ShopActions from "../../../actions/shop/ShopActions";
import * as CoreActions from "../../../actions/common/CoreActions";

class ViewShop extends Component {
  constructor() {
    super();
    this.shopID=null;
  }

  componentDidMount() {
    let { match,shopActions} = this.props;
    this.shopID = match.params.shopID;
    shopActions.initViewShopUI(this.shopID);
  }

  componentWillReceiveProps(nextProps,nextState){
    let {shopActions,coreData} =this.props;

    if(nextProps.setAPIReturnStatus.editShop==true){
     shopActions.editSucess(nextProps.setAPIReturnContent.editShop,coreData.shopData);
    }
 
   }

  render() {
      let {
        coreData,shopActions,modelStatus,
        formData,errorList,coreActions
      } =this.props;
    return (
      <MainWrapper>
        <Breadcrumb>
          <i urlTo="/Home" displayName="Home" />
          <i urlTo={"/shop/"+this.shopID} displayName="Shop" />
        </Breadcrumb>

        <div className="row profileWrapper">
          <ShopInfo 
            info={getValue(coreData,"shopData",{})} 
            manageEditModel={()=>shopActions.manageEditModel(getValue(coreData,"shopData",{}))}
          />
          
          <ProfileInfo info={getValue(coreData,"shopData.owner",{})} type={"shopView"}/>
        </div>

        <div className="card col-md-12 divLeft">
          <div className="row">
            <h5 className="card-header div100 divLeft">Products</h5>
          </div>
        <div className="card-body"></div>
        </div>

        <CreateShopModel
          displayStatus={modelStatus.status.editShopModel||false}
          onCloseBtn={shopActions.manageEditModel}
          onSaveBtn={()=>shopActions.editShop(formData,this.shopID)}
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
    coreActions: bindActionCreators(CoreActions, dispatch),
    shopActions: bindActionCreators(ShopActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewShop);
