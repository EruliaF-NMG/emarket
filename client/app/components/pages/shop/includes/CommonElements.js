import React, { Component } from "react";
import {Link} from "react-router-dom";

import { getValue } from "../../../../helpers/common/CommonMethods";
import { getShopLogoByIDApi,getProductImageAPI } from "../../../../config/APIEndPoints";
import {
  Button,
  HtmlButton,
  InputBox,
  InputTextArea,
  FileInput
} from "../../../ui-elements/form/CommonElements";
import {
  ModelHeader,
  ModelBody,
  ModelFooter,
  ModelWrapper
} from "../../../ui-elements/common-elements/CommonElements";

const emptyFun = () => undefined;

const CreateShopModel = ({
  displayStatus = false,
  onCloseBtn = emptyFun,
  onSaveBtn = emptyFun,
  handleInput = emptyFun,
  formData = {},
  errorList = {}
}) => {
  return (
    <ModelWrapper displayStatus={displayStatus}>
      <ModelHeader
        title="Add New Shop"
        elementCss="bg-primary text-white"
        buttonCss="text-white"
        onClickBtn={() => onCloseBtn()}
      />
      <ModelBody>
        <div className="col-md-6 float-left">
          <InputBox
            inputID="name"
            inputDisplayName="Name"
            inputName="name"
            inputPlaceholder="Enter Shop Name"
            inputValue={formData.name}
            onChangeTxt={eventData =>
              handleInput(eventData.name, eventData.value)
            }
            inputType="text"
            errorTxt={errorList.name}
          />
          <InputTextArea
            inputID="description"
            inputDisplayName="Description"
            inputName="description"
            inputPlaceholder="Description...."
            inputValue={formData.description}
            onChangeTxt={eventData =>
              handleInput(eventData.name, eventData.value)
            }
            inputType="text"
            errorTxt={errorList.description}
          />
        </div>
        <div className="col-md-6 float-left">
          <InputBox
            inputID="address"
            inputDisplayName="Address"
            inputName="address"
            inputPlaceholder="Enter Shop Address"
            inputValue={formData.address}
            onChangeTxt={eventData =>
              handleInput(eventData.name, eventData.value)
            }
            inputType="text"
            errorTxt={errorList.address}
          />
          <InputBox
            inputID="contact"
            inputDisplayName="Contact"
            inputName="contact"
            inputPlaceholder="Enter Contact Number"
            inputValue={formData.contact}
            onChangeTxt={eventData =>
              handleInput(eventData.name, eventData.value)
            }
            inputType="text"
            errorTxt={errorList.contact}
          />
          <FileInput
            inputID="logo"
            inputDisplayName="Shop Logo"
            inputName="logo"
            inputValue={formData.logo}
            onChangeTxt={eventData =>
              handleInput(eventData.name, eventData.value)
            }
            errorTxt={errorList.logo}
          />
        </div>
      </ModelBody>
      <ModelFooter>
        <HtmlButton
          buttonCss={"btn-sm btn-secondary"}
          buttonTxt={"Close"}
          onClickBtn={() => onCloseBtn()}
        />
        <HtmlButton
          buttonCss={"btn-sm btn-primary"}
          buttonTxt={"Save changes"}
          onClickBtn={onSaveBtn}
        />
      </ModelFooter>
    </ModelWrapper>
  );
};

const ShopInfo = ({ info = {}, manageEditModel = emptyFun }) => {
  return (
    <div className="col-md-6 col-sm-12 divLeft">
      <div className="card col-md-12 divLeft">
        <div className="card-body">
          <div className="row">
            <div className="media div100">
              <img
                src={
                  getShopLogoByIDApi +
                  getValue(info, "_id") +
                  "?" +
                  getValue(info, "updated", "image")
                }
                className="align-self-start mr-3 proImage"
              />
              <div className="media-body div100">
                <h5 className="mt-0 proNameh5">{getValue(info, "name")}</h5>
                <p>Address :- {getValue(info, "address")}</p>
                <p>Contact :- {getValue(info, "contact")}</p>
                <p>About :- {getValue(info, "description")}</p>

                <Button
                  wrapperCss={"mt-3 div100"}
                  buttonCss={"btn-primary btn-sm float-right"}
                  buttonTxt="Edit Shop"
                  onClickBtn={manageEditModel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ 
info = [],
manageCreateModel=emptyFun
}) => {
  return (
    <div className="card col-md-12 divLeft mt-3">
      <div className="card-header row">
        
        <div className="col-md-6 divLeft">
          <h5 className="">Products </h5>
        </div>
        
        <div className="col-md-6 ">
          <Button
            wrapperCss={"div100"}
            buttonCss={"btn-primary btn-sm float-right"}
            buttonTxt="Add New Product"
            onClickBtn={() => manageCreateModel()}
          />
        </div>

      </div>
      <div className="card-body">
        <div className="row">
                    {
                        info.map(function(product,key){                          
                          return(
                           
                              <Link to={"/product/"+getValue(product,"_id",null)} key={key}>
                                  <div className="col-md-6 divLeft">
                                      <div className="card div100">
                                          <img
                                            src={getProductImageAPI+getValue(product,"gallery.0.fileId",null)}
                                            className="card-img-top"
                                          />
                                          <div className="card-body">
                                          <h5 className="card-title">{product.name}</h5>
                                          </div>                                        
                                      </div>
                                  </div>
                              </Link>    
                          )
                        })
                    }
        </div>
      </div>
    </div>
  );
};

export { 
  CreateShopModel,
  ShopInfo,
  ProductList 
};
