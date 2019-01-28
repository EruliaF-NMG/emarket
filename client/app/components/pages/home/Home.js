import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MainWrapper from "../../ui-elements/template/MainWrapper";
import {ShowProductList} from "./includes/CommonElements";
import * as ProductsActions from "../../../actions/products/ProductsActions";
import * as CoreActions from "../../../actions/common/CoreActions";

class Home extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    let { productsActions } = this.props;
    productsActions.initHomeUI();
  }

  render() {

    let {coreData} =this.props;

    return (
      <MainWrapper>
        <ShowProductList
          productList={coreData.allProduct}
        />
      </MainWrapper>
    );
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
  )(Home);