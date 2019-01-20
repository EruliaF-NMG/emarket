import React  from "react";

import AttachFiles from "../../../ui-elements/form/AttachFiles";
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

const CreateProductModel = ({
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
            onChangeTxt={eventData =>handleInput(eventData.name, eventData.value)}
            inputType="text"
            errorTxt={errorList.name}
          />
          <InputTextArea
            inputID="description"
            inputDisplayName="Description"
            inputName="description"
            inputPlaceholder="Description...."
            inputValue={formData.description}
            onChangeTxt={eventData =>handleInput(eventData.name, eventData.value)}
            inputType="text"
            errorTxt={errorList.description}
          />
        </div>
        <div className="col-md-6 float-left">
          <InputBox
            inputID="quantity"
            inputDisplayName="Quantity"
            inputName="quantity"
            inputPlaceholder="Enter Product quantity"
            inputValue={formData.quantity}
            onChangeTxt={eventData =>handleInput(eventData.name, eventData.value)}
            inputType="text"
            errorTxt={errorList.quantity}
          />
          <InputBox
            inputID="price"
            inputDisplayName="Price"
            inputName="price"
            inputPlaceholder="Enter Product price"
            inputValue={formData.price}
            onChangeTxt={eventData =>handleInput(eventData.name, eventData.value)}
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

export {
    CreateProductModel
}