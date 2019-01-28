import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import MainWrapper from "../../ui-elements/template/MainWrapper";
import { Breadcrumb } from "../../ui-elements/common-elements/CommonElements";
import {ProductGallery,ProductTile} from "./includes/CommonElements";
import {getValue} from "../../../helpers/common/CommonMethods";
import {Button,HtmlButton} from "../../ui-elements/form/CommonElements"
import * as ProductsActions from "../../../actions/products/ProductsActions";
import * as CoreActions from "../../../actions/common/CoreActions";



class ProductInfo extends Component {


    constructor() {
        super();
        this.product=null;
        this.state={
          currentImageKey:0
        }
    }

    componentDidMount() {
        let { match,productsActions } = this.props;
        this.product = match.params.productID 
        productsActions.initProductUI(this.product);
    }

    handleMouseOver=(key)=>{
        this.setState({
          currentImageKey:key
        })
    }

    componentWillReceiveProps=(nextProps,nextState)=>{
        let {productsActions} =this.props;
        if(nextProps.match.params.productID!=this.product){
          this.product = nextProps.match.params.productID;
          productsActions.initProductUI(this.product);
        }
    }

    render() {

      let {coreData} =this.props;
      let {currentImageKey} =this.state;

        return (
            <MainWrapper>
              <Breadcrumb>
                <i urlTo="/" displayName="Home" />
                <i urlTo={"/product/"+this.product} displayName="Product" />
              </Breadcrumb>

              <div className="col-md-12">
               <div className="row">
                  
                  <div className="col-md-4 float-left">
                      <ProductGallery
                        galleryList={getValue(coreData,"currentProduct.gallery",[])}
                        handleMouseOver={this.handleMouseOver}
                        currentImageKey={currentImageKey}
                      />
                  </div>

                  <div className="col-md-5 productDataWrapper float-left">
                     <h1 className="product-title">{getValue(coreData,"currentProduct.name","")}</h1>
                     <p className="product-description">{getValue(coreData,"currentProduct.description","")}</p>
                     <p className="product-price">Rs. {getValue(coreData,"currentProduct.price","")}/=</p>
                     <div className="">
                      <Button
                          wrapperCss="float-left mr-3"
                          buttonTxt="Add To Cart"
                          //onClickBtn={}
                      />
                      
                      <HtmlButton
                        wrapperCss="float-left"
                        buttonTxt="View Cart"
                      />

                     </div>
                  </div>

                  <div className="col-md-3 float-left similarProductsWrapper">
                      <h1>Similar Products</h1>
                      {
                        (coreData.similarProducts||[]).map((product,key)=>{
                          return (
                            <div className="div100 mb-4" key={key}>
                              <ProductTile
                                product={product}
                              />
                            </div>                          
                          )
                        })
                      }                      
                  </div>

               </div>
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
  )(ProductInfo);
  