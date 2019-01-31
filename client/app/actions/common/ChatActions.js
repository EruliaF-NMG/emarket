
import {
    toggleSubChatWrapperKEY,toggleSubChatBodyKEY,setSubchatReceiverKEY
} from "../../config/StateKeys";
import {handleInput} from "./CoreActions";
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

function onSendFire(type,socketOBj,receiver,sender,chatMessage){
    return dispatch => {
        
        if(type=="text"){
            dispatch(sendChatMessage(socketOBj,{
                "receiver":receiver.id,
                "sender":sender._id,
                "message":chatMessage,
                "type":"text"
            }));
        }
    }
}

export {
    setSubChatReceiverData,
    toggleSubChat,
    toggleChatBody,
    getChatMessageInput,
    sendChatMessage,
    onSendFire
}