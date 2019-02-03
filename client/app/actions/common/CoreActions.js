import socketIOClient from 'socket.io-client';

import {
    setInputValueKEY,setFormErrorsKEY,unSetFormErrorsKEY,
    setDBStatusKEY,setApiDataToStoreKey,setBulkInputValuesKEY,
    unSetFormInputsKEY,unSetAPIReturnsKEY,initSocketIOKEY
} from '../../config/StateKeys';
import CallApi from "../../helpers/common/CallApi";
import {baseUrl} from "../../config/Core";
import {setPreLoader} from "./CoreUIActions";
 

/**
 * @Author: Nisal Madusanka(EruliaF)
 * @returns {{type: string}}
 */
function handleInput(key,value) {
    return {
        type: setInputValueKEY,
        payload:value,
        key:key
    }
}

function setBulkFormInputs(value) {
    return {
        type: setBulkInputValuesKEY,
        payload:value,
    }
}

function setInputErrors(value) {
    return {
        type: setFormErrorsKEY,
        payload:value
    }
}

function unsetInputErrors() {
    return {
        type: unSetFormErrorsKEY
    }
}

function unsetInputs() {
    return {
        type: unSetFormInputsKEY
    }
}

function unsetAPIReturnsBYKey(key) {
    return {
        type: unSetAPIReturnsKEY,
        payload:key
    }
}

function updateAPIStates(status,response,stateKey){
    return {
        type: setDBStatusKEY, 
        payloadStatus:status,
        payload:response,
        key:stateKey
    }
}

function updateAPIDataToStore(response,storeElementKey){
    return {
        type: setApiDataToStoreKey, 
        payload: response,
        arrayKey: storeElementKey
    }
}

function setDB(api,method="POST",requestBody={},stateKey="createData",responseMessage=[]) {
    return dispatch => {
        try {

            //set loader
            dispatch(setPreLoader(true));
            
            //init store key
            dispatch(updateAPIStates(null,null,stateKey));

            CallApi.call(api,method, true, requestBody)
                .then(function (response) {

                    //Remove loader
                    dispatch(setPreLoader(false));                  

                    if(response.data.status=="validation-error"){
                        //set Error                        
                        dispatch(setInputErrors(response.data.result));

                    }else if(response.data.status=="success"){
                        //remove errors
                        dispatch(setInputErrors({}));

                        dispatch(updateAPIStates(true,response.data.result,stateKey));

                    }

                }).catch(function (error) {
                    
                    //Remove loader
                    dispatch(setPreLoader(false));  
                    dispatch(updateAPIStates(false,response.data.result,stateKey));   
                    
                });


        }catch(ex){
            //remove loader
            dispatch(setPreLoader(false));
            dispatch(updateAPIStates(false,{},stateKey));   
        }
    }
}


function setDataToStore(api,storeElementKey,apiMethod="GET",apiBody=null,responseBody=null,addToResponse=false) {

    return dispatch => {
        try {

            //dispatch(updateAPIDataToStore(null,storeElementKey));

            CallApi.call(api, apiMethod, true, apiBody)
                .then(function (response) {

                    if(responseBody!=null){
                        response=response[responseBody];
                    }else{
                        response=response.data.result;
                    }

                    if(addToResponse!=false){
                        let oldResponse=response;
                        response={};
                        response['result']=oldResponse;
                        response['addedToResponse']=addToResponse;
                    }

                    dispatch(updateAPIDataToStore(response,storeElementKey));


                }).catch(function (error) {
                    dispatch(updateAPIDataToStore(false,storeElementKey));
                });

        } catch (ex) {
            dispatch(updateAPIDataToStore(false,storeElementKey));
        }
    }

}

function initWebSocket(id){    
    const socket = socketIOClient(baseUrl);   
    socket.on('connect',(data)=>{       
        socket.emit('clientKey',{customId:id});
    });
    return {
        type: initSocketIOKEY,
        payload:socket
    }
}


export {
    handleInput,
    setInputErrors,
    unsetInputErrors,
    updateAPIStates,
    updateAPIDataToStore,
    setDB,
    setDataToStore,
    setBulkFormInputs,
    unsetInputs,
    unsetAPIReturnsBYKey,
    initWebSocket
}