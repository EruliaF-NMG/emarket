
import User from "../../models/user.model";
import {
    successResponse,
    exceptionResponse
  } from "../../../config/apiResponse";
import { _sendResponse } from "../../helpers/common/commonMethods";


const getUserByID=(req,res,next, id)=>{
    User.findById(id).exec((error,user)=>{

        if(error){
            return res
            .status(exceptionResponse.httpStatus)
            .json(_sendResponse(exceptionResponse,error));
        }
        req.profile=user;
        next();
    });
}  

const getProfileInfo=(req,res)=>{
    req.profile.salt= undefined;
    req.profile.hashed_password= undefined;
    return res
    .status(successResponse.httpStatus)
    .json(_sendResponse(successResponse, req.profile));
}

const updateUser=(req,res)=>{

    let user=req.profile;    
    
    user.email=req.body.email;
    user.name=req.body.name;
    user.profile.about=req.body.about;
    user.profile.address=req.body.address;
    user.profile.contact=req.body.contact;
    user.updated = Date.now();
    
    user.save((error,userdata)=>{
        if(error){
            return res
                .status(exceptionResponse.httpStatus)
                .json(_sendResponse(exceptionResponse,error));
        }

        userdata.salt= undefined;
        userdata.hashed_password= undefined;
        return res
            .status(successResponse.httpStatus)
            .json(_sendResponse(successResponse, userdata));
    });    
}


export default {
    getUserByID,
    getProfileInfo,
    updateUser
}