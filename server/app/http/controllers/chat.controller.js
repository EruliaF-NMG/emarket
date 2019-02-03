/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2019-02-01 11:57:49 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-02-03 11:54:03
 */

import {baseUrl} from "../../../config/core";
import User from "../../models/user.model";
import Shop from "../../models/shop.model";
import { _sendResponse } from "../../helpers/common/commonMethods";
import {
    successResponse,
    exceptionResponse
} from "../../../config/apiResponse";
import {getMessageList} from "../../helpers/common/chatMessage";

const getChatMessagers=(req,res)=>{ 
     
    getMessageList(req.params.mainUser,req.params.otherUser,(error,messageList)=>{
        if (error) {
            return res
                .status(exceptionResponse.httpStatus)
                .json(_sendResponse(exceptionResponse, error));
        }
        return res
            .status(successResponse.httpStatus)
            .json(_sendResponse(successResponse, messageList));
    });    
}

const initChatANDGetChatList=(req,res)=>{
    getMessageList(req.params.shopID,req.params.userID,(error,messageList)=>{
        if (error) {
            return res
                .status(exceptionResponse.httpStatus)
                .json(_sendResponse(exceptionResponse, error));
        }

        if(req.params.type=="user"){

            User.findById(req.params.userID).exec((error, user) => {
                if (error) {
                    return res
                        .status(exceptionResponse.httpStatus)
                        .json(_sendResponse(exceptionResponse, error));
                }
                return res
                    .status(successResponse.httpStatus)
                    .json(_sendResponse(successResponse,{
                            "receiver":{
                                id:user._id,
                                name:user.name,
                                imgUrl:baseUrl+"api/user/profile-image/"+user._id,
                                key:req.params.shopID+"_"+req.params.userID
                            },
                            "chatList":messageList
                        }
                    ));
            });

        }else{
            Shop.findById(req.params.shopID).exec((error, shop) => {
                if (error) {
                    return res
                        .status(exceptionResponse.httpStatus)
                        .json(_sendResponse(exceptionResponse, error));
                }
                return res
                    .status(successResponse.httpStatus)
                    .json(_sendResponse(successResponse,{
                            "receiver":{
                                id:shop._id,
                                name:shop.name,
                                imgUrl:baseUrl+"api/shop-logo/"+shop._id,
                                key:req.params.userID+"_"+req.params.shopID
                            },
                            "chatList":messageList
                        }
                    ));
            });
        }
                
    });    
}

export default {
    getChatMessagers,
    initChatANDGetChatList
}