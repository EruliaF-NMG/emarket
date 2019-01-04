/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2018-12-30 09:54:32 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-01-03 20:13:15
 */

import {
setInputValueKEY,setFormErrorsKEY,unSetFormErrorsKEY,
setApiDataToStoreKey,setDBStatusKEY,setBulkInputValuesKEY,
unSetFormInputsKEY,unSetAPIReturnsKEY
} from "../../config/StateKeys"

const initState = {    
    formData: {},
    errorList: {},
    apiDataList: { uiUpdateStatus: false }, 
    setAPIReturnStatus: {},
    setAPIReturnContent: {contentUpdateStatus: false}   
}

/**
 * @author Nisal Madusanka(EruliaF) 
 * @description manage all common state activeites
 * @param {object} state initialized core Reducer state structure
 * @param {object} action action commands to perform
 */
export default function coreReducer(state = initState, action) {
    switch (action.type) {
        //updating change events of form input data
        case setInputValueKEY:           
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.key]: action.payload,
                }
            };
            break;
        //update set of input data  
        case setBulkInputValuesKEY:
            return {
                ...state,
                formData:action.payload
            }    
        //set form errors to store
        case setFormErrorsKEY:
            return {
                ...state,
                errorList: action.payload,
            };
            break; 
        //unset all form errors
        case unSetFormErrorsKEY:
            return {
                ...state,
                errorList: initState.errorList,
            };
            break;
        // unset all form inputs
        case unSetFormInputsKEY:
            return{
                ...state,
                formData:{}
            }    
        //update user request data by apis    
        case setApiDataToStoreKey:
            return {
                ...state,
                apiDataList: {
                    ...state.apiDataList,
                    [action.arrayKey]:action.payload,
                    uiUpdateStatus:!state.apiDataList.uiUpdateStatus
                }
            };            
            break;
        //update user date submiting(create/delete/edit) activeits      
        case setDBStatusKEY:
            return {
                ...state,
                setAPIReturnStatus:{
                    ...state.setAPIReturnStatus,
                    [action.key]:action.payloadStatus,
                },
                setAPIReturnContent:{
                    ...state.setAPIReturnContent,
                    [action.key]:action.payload,
                    contentUpdateStatus:!state.setAPIReturnContent.contentUpdateStatus
                }
            }
            break;
        //unset api returns
        case unSetAPIReturnsKEY:
            return{
                ...state,
                setAPIReturnStatus:{
                    ...state.setAPIReturnStatus,
                    [action.payload]:null,
                },
                setAPIReturnContent:{
                    ...state.setAPIReturnContent,
                    [action.payload]:null,
                    contentUpdateStatus:!state.setAPIReturnContent.contentUpdateStatus
                }
            }
            break;                   
        default:
            return state
    }
}