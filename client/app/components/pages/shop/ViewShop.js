import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MainWrapper from "../../ui-elements/template/MainWrapper";
import { Breadcrumb } from "../../ui-elements/common-elements/CommonElements";
import { ShopInfo,CreateShopModel,ProductList } from "./includes/CommonElements";
import {CreateProductModel} from "../products/includes/CommonElements";
import { ProfileInfo } from "../profile/includes/CommonElements";
import {getValue} from  "../../../helpers/common/CommonMethods";
import * as ShopActions from "../../../actions/shop/ShopActions";
import * as CoreActions from "../../../actions/common/CoreActions";
import * as ProductsActions from "../../../actions/products/ProductsActions";

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
        formData,errorList,coreActions,productActions
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
          
          <ProfileInfo 
            info={getValue(coreData,"shopData.owner",{})} 
            type={"shopView"}
          />
        </div>

        <ProductList
          manageCreateModel={()=>productActions.manageCreateModel()}
        />

        {/* UI Pop Ups */}
        <CreateShopModel
          displayStatus={modelStatus.status.editShopModel||false}
          onCloseBtn={shopActions.manageEditModel}
          onSaveBtn={()=>shopActions.editShop(formData,this.shopID)}
          handleInput={coreActions.handleInput}
          formData={formData}
          errorList={errorList}
        />

        <CreateProductModel
          displayStatus={modelStatus.status.createProductModel||false}
          onCloseBtn={()=>productActions.manageCreateModel()}
          onSaveBtn={()=>productActions.createProduct(formData,this.shopID)}
          handleInput={coreActions.handleInput}
          formData={formData}
          errorList={errorList}
        />
        {/* UI Pop Ups */}

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
    shopActions: bindActionCreators(ShopActions, dispatch),
    productActions: bindActionCreators(ProductsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewShop);
