/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2019-02-01 14:38:24 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-02-03 14:02:07
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
            
            Chat.findById(message._id)
                .populate('sender_id')
                .populate('receiver_id')
                .exec((error, msgObj) => {
                    if (err) {
                        cb(err)
                    }else{
                        const sender=(msgObj.senderModel=="User")?msgObj.sender_id._id:msgObj.sender_id.owner;
                        const receiver=(msgObj.receiverModel=="User")?msgObj.receiver_id._id:msgObj.receiver_id.owner;
                        cb(null,message,sender,receiver);
                    }
                });

        }
    });
}

function getMessageList(mainUser,otherUser,cb){
    
    Chat.find({
        $or: [{
                $and:[{
                    sender_id:mainUser
                },{
                    receiver_id:otherUser
                }]
            },{
                $and:[{
                    receiver_id:mainUser
                },{
                    sender_id:otherUser
                }] 
            }]
    })
    .exec((error, chatMessgers)=>{
        if (error) {
            cb(error);
        }else{
            cb(null,chatMessgers);
        }        
    });    
}

export {
    addChat,
    getMessageList
}