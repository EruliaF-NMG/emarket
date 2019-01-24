import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MainWrapper from "../../ui-elements/template/MainWrapper";
import { Breadcrumb } from "../../ui-elements/common-elements/CommonElements";
import * as ProductsActions from "../../../actions/products/ProductsActions";
import * as CoreActions from "../../../actions/common/CoreActions";


class Category extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <MainWrapper>
              <Breadcrumb>
                <i urlTo="/Home" displayName="Home" />
                <i urlTo="/category" displayName="Category" />
              </Breadcrumb>

              <div className="">
              </div>

            </MainWrapper>
        )
    }
}

function mapStateToProps(state) {
    return {
      authUser: state.authReducer.authUserProfileInfo,
      coreData: state.coreReducer.apiDataList
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
      productsActions: bindActionCreators(ProductsActions, dispatch),
      coreActions: bindActionCreators(CoreActions, dispatch)
    };
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Category);
  