import React, { Component } from "react";
import {Link} from "react-router-dom";

import {Button,HtmlButton,InputBox,InputTextArea,FileInput} from "../../../ui-elements/form/CommonElements"
import {ModelHeader,ModelBody,ModelFooter,ModelWrapper} from "../../../ui-elements/common-elements/CommonElements"
import {getValue} from "../../../../helpers/common/CommonMethods";
import {getProfileImageIDAPI,getShopLogoByIDApi} from "../../../../config/APIEndPoints"


const emptyFun = () => undefined;

const ProfileInfo = ({
    info={},
    manageEditModel=emptyFun,
    type="profile"
}) => {
  return (
        <div className="col-md-6 col-sm-12 divLeft">
            <div className="card col-md-12 divLeft">
            {(type!="profile")?
                (
                <div className="row">
                    <h5 className="card-header div100 divLeft">Shop Owner </h5>
                </div>
                ):(null)
            }

                <div className="card-body">
                    <div className="row">
                        <div className="media div100">
                            <img
                                src={getProfileImageIDAPI+getValue(info,'_id')+"?"+getValue(info,'updated',"image")}
                                className="align-self-start mr-3 proImage"
                            />
                            <div className="media-body div100">
                                <h5 className="mt-0 proNameh5">{getValue(info,'name')}</h5>
                                <p>E-mail :- {getValue(info,'email')}</p>
                                <p>Address :- {getValue(info,'profile.address')}</p>
                                <p>Contact :- {getValue(info,'profile.contact')}</p>
                                <p>About :- {getValue(info,'profile.about')}</p>
                                {
                                    (type=="profile")?(
                                        <Button
                                            wrapperCss={"mt-3 div100"}
                                            buttonCss={"btn-primary btn-sm float-right"}
                                            buttonTxt="Edit Profile"
                                            onClickBtn={()=>manageEditModel()}
                                        />
                                    ):(
                                        <Link to={"/profile/"+getValue(info,'_id')}>
                                            <Button
                                                wrapperCss={"mt-3 div100"}
                                                buttonCss={"btn-primary btn-sm float-right"}
                                                buttonTxt="View Profile"
                                            />
                                        </Link>                                    
                                    )
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
};

const MyShops = ({
    manageCreateModel=emptyFun,
    list=[]
}) => {
  return (
        <div className="col-md-6 col-sm-12 divLeft">
            <div className="card div100 divLeft">

                <div className="div100 divLeft card-header">
                    <div className="col-md-6 divLeft">
                    <h5 className="">My Shops </h5>
                    </div>
                    <div className="col-md-6 divLeft">
                                <Button
                                    wrapperCss={"div100"}
                                    buttonCss={"btn-primary btn-sm float-right"}
                                    buttonTxt="Add Shop"
                                    onClickBtn={()=>manageCreateModel()}
                                />
                    </div>
                </div>                
                
                <div className="card-body">
                <div className="row">
                   {
                       list.map(function(shop, key){
                        return(
                            <Link to={"/shop/"+getValue(shop,"_id",null)} key={key}>
                                <div className="col-md-6 divLeft">
                                    <div className="card div100">
                                        <img
                                        src={getShopLogoByIDApi+getValue(shop,"_id",null)+"?"+getValue(shop,'updated',new Date().getTime())}
                                        className="card-img-top"
                                        />
                                        <div className="card-body">
                                        <h5 className="card-title">{shop.name}</h5>
                                        </div>
                                        <div className="card-footer">
                                        <small className="text-muted">Last updated 3 mins ago</small>
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
        </div>
  )
};

const EditProfileModel=({
    displayStatus=false,
    onCloseBtn=emptyFun,
    onSaveBtn=emptyFun,
    handleInput=emptyFun,
    formData={},
    errorList={},
    currentUserID=null
})=>{

  

    return (
        <ModelWrapper
            displayStatus={displayStatus}
        >
            <ModelHeader
                title="Edit Profile"
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
                        inputPlaceholder="Enter Your Name"
                        inputValue={formData.name}
                        onChangeTxt={(eventData)=>handleInput(eventData.name,eventData.value)}
                        inputType="text"
                        errorTxt={errorList.name}
                    />
                    <InputBox
                        inputID="email"
                        inputDisplayName="E-mail"
                        inputName="email"
                        inputPlaceholder="Enter E-mail Address"
                        inputValue={formData.email}
                        onChangeTxt={(eventData)=>handleInput(eventData.name,eventData.value)}
                        inputType="text"
                        errorTxt={errorList.email}
                    />
                    <InputTextArea
                        inputID="about"
                        inputDisplayName="About Me"
                        inputName="about"
                        inputPlaceholder="Explain Yourself.."
                        inputValue={formData.about}
                        onChangeTxt={(eventData)=>handleInput(eventData.name,eventData.value)}
                        inputType="about"
                        errorTxt={errorList.about}
                    />
                </div>
                <div className="col-md-6 float-left">
                    <InputBox
                        inputID="address"
                        inputDisplayName="address"
                        inputName="address"
                        inputPlaceholder="Enter Your Address"
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
                        inputID="proPic"
                        inputDisplayName="Profile Image"
                        inputName="proPic"
                        inputValue={formData.proPic}
                        onChangeTxt={(eventData)=>handleInput(eventData.name,eventData.value)}
                        errorTxt={errorList.proPic}
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
                    onClickBtn={() => onSaveBtn(formData,currentUserID)}
                />
            </ModelFooter>
        </ModelWrapper>
    )
}


export {
    ProfileInfo,
    MyShops,
    EditProfileModel
}