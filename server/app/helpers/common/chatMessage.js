/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2019-02-01 14:38:24 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-02-01 15:04:23
 */
import _ from "lodash";
import Chat from "../../models/chat.model";

function addChat(data,cb){
    let formData={
        "sender_id":data.sender,
        "senderModel":_.startCase(_.toLower(data.sender_type)),
        "receiver_id":data.receiver,
        "receiverModel":_.startCase(_.toLower(data.receiver_type)),
        "chat":data.message,
        "type":data.type,
    };   
    const chat = new Chat(formData);
    chat.save((err, message) => {
        if (err) {
            cb(err)
        }else{
            cb(null,message)
        }
    });
}

export {
    addChat
}