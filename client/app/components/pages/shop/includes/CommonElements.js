import React, { Component } from "react";

import {HtmlButton,InputBox,InputTextArea,FileInput} from "../../../ui-elements/form/CommonElements"
import {ModelHeader,ModelBody,ModelFooter,ModelWrapper} from "../../../ui-elements/common-elements/CommonElements"

const emptyFun = () => undefined;

const CreateShopModel=({
    displayStatus=false,
    onCloseBtn=emptyFun,
    onSaveBtn=emptyFun,
    handleInput=emptyFun,
    formData={},
    errorList={}
})=>{

  

    return (
        <ModelWrapper
            displayStatus={displayStatus}
        >
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
                        onChangeTxt={(eventData)=>handleInput(eventData.name,eventData.value)}
                        inputType="text"
                        errorTxt={errorList.name}
                    />                   
                    <InputTextArea
                        inputID="description"
                        inputDisplayName="Description"
                        inputName="description"
                        inputPlaceholder="Description...."
                        inputValue={formData.description}
                        onChangeTxt={(eventData)=>handleInput(eventData.name,eventData.value)}
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
                        onChangeTxt={(eventData)=>handleInput(eventData.name,eventData.value)}
                        inputType="text"
                        errorTxt={errorList.address}
                    />
                    <InputBox
                        inputID="contact"
                        inputDisplayName="Contact"
                        inputName="contact"
                        inputPlaceholder="Enter Contact Number"
                        inputValue={formData.contact}
                        onChangeTxt={(eventData)=>handleInput(eventData.name,eventData.value)}
                        inputType="text"
                        errorTxt={errorList.contact}
                    />
                    <FileInput
                        inputID="logo"
                        inputDisplayName="Shop Logo"
                        inputName="logo"
                        inputValue={formData.logo}
                        onChangeTxt={(eventData)=>handleInput(eventData.name,eventData.value)}
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
    )
}


export {
    CreateShopModel
}