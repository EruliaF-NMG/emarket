/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2019-02-01 11:57:49 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-02-01 12:28:45
 */

import Chat from "../../models/chat.model";
import { _sendResponse } from "../../helpers/common/commonMethods";
import {
    successResponse,
    exceptionResponse
} from "../../../config/apiResponse";

const getChatMessagers=(req,res)=>{    
    Chat.find({
        $or: [{
                $and:[{
                    sender_id:req.params.mainUser
                },{
                    receiver_id:req.params.otherUser
                }]
            },{
                $and:[{
                    receiver_id:req.params.mainUser
                },{
                    sender_id:req.params.otherUser
                }] 
            }]
    }).sort({created: 'desc'}).exec((error, chatMessgers)=>{
        if (error) {
            return res
                .status(exceptionResponse.httpStatus)
                .json(_sendResponse(exceptionResponse, error));
        }
        return res
            .status(successResponse.httpStatus)
            .json(_sendResponse(successResponse, chatMessgers));
    });
}

export default {
    getChatMessagers
}