
import {
    toggleSubChatWrapperKEY,toggleSubChatBodyKEY,setSubchatReceiverKEY,
    resetAllChatStateKEY,resetSubchatModelKEY,onlyAddToChatListKEY
} from "../../config/StateKeys";
import {handleInput,setDataToStore,updateAPIDataToStore} from "./CoreActions";
import {
    getChatMessageListAPI,initAndGetChatMessageListAPI
} from "../../config/APIEndPoints";
import CallApi from "../../helpers/common/CallApi";
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

function manageChatPopup(data,currentUserID,messageList){
    return dispatch => {
        if(!messageList){
            dispatch(setDataToStore(getChatMessageListAPI + currentUserID+"/"+data.id,data.key, "GET"));
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

function onSendFire(type,socketOBj,chatMessage,authUser,key){
    return dispatch => {

        let userType=(authUser.seller==true)?({sender:"Shop",receiver:"User"}):({sender:"User",receiver:"Shop"});
        let userList=key.split("_");
        
        if(type=="text"){
            dispatch(sendChatMessage(socketOBj,{
                "receiver":userList[1],
                "receiver_type":userType.receiver,
                "sender":userList[0],
                "sender_type":userType.sender,
                "message":chatMessage,
                "type":"text"
            }));
        }
    }
}

function setChatMessageToStore(receiveMsg,chatList,key){
   
    return dispatch => {        
        chatList.push(receiveMsg);       
        dispatch(updateAPIDataToStore(chatList,key));
    }
}

function addToChatList(data){
    return {
        type: onlyAddToChatListKEY,
        payload:data
    }
}

function newChatReceived(userIDs,requestType,isChatModelSet){

    return dispatch => {
        try {            

            CallApi.call(initAndGetChatMessageListAPI+userIDs.shopID+"/"+userIDs.userID+"/"+requestType, "GET", true, null)
                .then(function (response) {

                    response=response.data.result;                    

                    dispatch(updateAPIDataToStore(response.chatList,response.receiver.key));
                    if(isChatModelSet==true){
                        dispatch(setSubChatReceiverData(response.receiver));
                    }else{
                        dispatch(addToChatList(response.receiver));
                    }                    

                }).catch(function (error) {
                    alert("error");
                });

        } catch (ex) {
            alert("error -");
        }
    }

}

function resetChatState(){
    return dispatch => {
        dispatch({type: resetAllChatStateKEY});
        dispatch({type: resetSubchatModelKEY});
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
    setChatMessageToStore,
    newChatReceived,
    resetChatState,
    addToChatList
}