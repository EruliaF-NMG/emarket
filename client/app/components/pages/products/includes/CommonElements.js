import React from "react";
import { Link } from "react-router-dom";

import AttachFiles from "../../../ui-elements/form/AttachFiles";
import { getValue } from "../../../../helpers/common/CommonMethods";

import {
  Button,
  HtmlButton,
  InputBox,
  InputTextArea,
  SelectBox
} from "../../../ui-elements/form/CommonElements";
import {
  ModelHeader,
  ModelBody,
  ModelFooter,
  ModelWrapper
} from "../../../ui-elements/common-elements/CommonElements";
import { getProductImageAPI } from "../../../../config/APIEndPoints";

const emptyFun = () => undefined;

const CreateProductModel = ({
  displayStatus = false,
  onCloseBtn = emptyFun,
  onSaveBtn = emptyFun,
  handleInput = emptyFun,
  formData = {},
  errorList = {},
  categoryList = []
}) => {
  return (
    <ModelWrapper displayStatus={displayStatus}>
      <ModelHeader
        title="Add New Product"
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
            inputPlaceholder="Enter Product Name"
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
          <SelectBox
            inputID="category"
            inputDisplayName="Category"
            inputName="category"
            inputValue={formData.category}
            onChangeItem={eventData =>
              handleInput(eventData.name, eventData.value)
            }
            errorTxt={errorList.category}
            itemList={categoryList}
          />
        </div>
        <div className="col-md-6 float-left">
          <InputBox
            inputID="quantity"
            inputDisplayName="Quantity"
            inputName="quantity"
            inputPlaceholder="Enter Product quantity"
            inputValue={formData.quantity}
            onChangeTxt={eventData =>
              handleInput(eventData.name, eventData.value)
            }
            inputType="text"
            errorTxt={errorList.quantity}
          />
          <InputBox
            inputID="price"
            inputDisplayName="Price"
            inputName="price"
            inputPlaceholder="Enter Product price"
            inputValue={formData.price}
            onChangeTxt={eventData =>
              handleInput(eventData.name, eventData.value)
            }
            inputType="text"
            errorTxt={errorList.price}
          />
        </div>
        <div className="col-md-12 float-left">
          <AttachFiles
            inputDisplayName="Product Galary"
            inputName="galary"
            inputValue={formData.galary}
            onChangeFile={handleInput}
            errorTxt={errorList.galary}
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

const ProductTile = ({
  product={}
}) => {
  return (
    <Link to={"/product/" + getValue(product, "_id", null)}>
      <div className="div100 productInfoCard">
        <img
          src={getProductImageAPI + getValue(product, "gallery.0.fileId", null)}
          className="product-image"
        />
        <div className="product-content">
          <h5 className="product-title">{product.name}</h5>
          <p className="product-price">Rs.{product.price}/=</p>
        </div>
      </div>
    </Link>
  );
};

const ProductCard = ({ info = [] }) => {
  return (
    <div>
      {info.map(function(product, key) {
        return (
          <div className="col-md-3 col-sm-6 divLeft productWrapper" key={key}>
            <ProductTile
             product={product}
            />
          </div>
        );
      })}
    </div>
  );
};

const ProductGallery = ({
  galleryList = [],
  handleMouseOver = emptyFun,
  currentImageKey = 0
}) => {
  return (
    <div className="div100 galleryWrapper">
      <div className="mainImage">
        <img
          src={
            getProductImageAPI +
            getValue(galleryList[currentImageKey], "fileId", null)
          }
        />
      </div>
      <div className="subImagLinkWrapper div100">
        {
          galleryList.map((item, key) => {
            return (
              <div
                className={
                  "col-sm-3 imgLinkSubWrapper " +
                  (currentImageKey == key ? "active" : "")
                }
                key={key}
              >
                <img
                  src={getProductImageAPI + getValue(item, "fileId", null)}
                  onMouseEnter={() => handleMouseOver(key)}
                />
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export { 
  CreateProductModel,
  ProductCard,
  ProductGallery,
  ProductTile
};
