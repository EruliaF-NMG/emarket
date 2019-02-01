
import {
    toggleSubChatWrapperKEY,toggleSubChatBodyKEY,setSubchatReceiverKEY
} from "../../config/StateKeys";
import {handleInput,setDataToStore} from "./CoreActions";
import {
    getChatMessageListAPI
} from "../../config/APIEndPoints";

/**
 * @Author: Nisal Madusanka(EruliaF)
 * @returns {{type: string}}
 */
function toggleSubChat() {
    return {
        type: toggleSubChatWrapperKEY
    }
}

/**
 * @Author: Nisal Madusanka(EruliaF)
 * @returns {{type: string}}
 */
function toggleChatBody() {
    return {
        type: toggleSubChatBodyKEY
    }
}


/**
 * @Author: Nisal Madusanka(EruliaF)
 * @returns {{type: string}}
 */
function setSubChatReceiverData(data) {
    return {
        type: setSubchatReceiverKEY,
        payload:data
    }
}

function manageChatPopup(data,currentUser,messageList){
    return dispatch => {
        if(!messageList){
            dispatch(setDataToStore(getChatMessageListAPI + currentUser._id+"/"+data.id,currentUser._id+"_"+data.id, "GET"));
        }
        dispatch(setSubChatReceiverData(data));
    }
}

function getChatMessageInput(event){
    return dispatch => {
        dispatch(handleInput(event.name,event.value));
    }
}

function sendChatMessage(object,messageObject){
    return dispatch => {
        object.emit('message', messageObject);
        dispatch(handleInput("currentChatMessage",""));
    }
}

function onSendFire(type,socketOBj,receiver,sender,chatMessage,userType){
    return dispatch => {
        
        if(type=="text"){
            dispatch(sendChatMessage(socketOBj,{
                "receiver":receiver.id,
                "receiver_type":userType.receiver,
                "sender":sender._id,
                "sender_type":userType.sender,
                "message":chatMessage,
                "type":"text"
            }));
        }
    }
}

function setChatMessageToStore(receiveMsg,chatList,key){
    console.log(receiveMsg,chatList,key);
    return dispatch => {        
        chatList.push(receiveMsg);       
        dispatch(updateAPIDataToStore(chatList,key));
      }
}

export {
    setSubChatReceiverData,
    toggleSubChat,
    toggleChatBody,
    getChatMessageInput,
    sendChatMessage,
    onSendFire,
    manageChatPopup,
    setChatMessageToStore
}