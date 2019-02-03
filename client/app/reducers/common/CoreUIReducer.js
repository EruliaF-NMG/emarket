import {
preLoaderKey,manageModelKEY,setSubchatReceiverKEY,
toggleSubChatWrapperKEY,toggleSubChatBodyKEY,
resetSubchatModelKEY,onlyAddToChatListKEY
} from "../../config/StateKeys"



const initState = {    
    preLoaderStatus:false,
    modelStatus:{
        status:{},
        modelType:"lg"
    },
    subChatModel:{
        status:false,
        minimizeStatus:false,
        receiver:{id:null,name:null,imgUrl:null,key:null}
    },
    chatList:{}
}

export default function coreUIReducer(state = initState, action) {
    switch (action.type) {        
        case preLoaderKey:
            return {
                ...state,
                preLoaderStatus: action.payload,
            };
            break;  
        case manageModelKEY: 
            return {
                ...state,
                modelStatus: {
                    modelType:action.modelType,
                    status:{
                        ...state.modelStatus.status,
                        [action.payload]:!((state.modelStatus.status[action.payload])?true:false)
                    }
                }
            };
            break;  
        case setSubchatReceiverKEY:
            return {
                ...state,
                subChatModel:{
                    status:true,
                    minimizeStatus:true,
                    receiver:action.payload
                },
                chatList:{
                    ...state.chatList,
                    [action.payload.key]:action.payload
                }
            };
            break;
        case onlyAddToChatListKEY:
            return {
                ...state,               
                chatList:{
                    ...state.chatList,
                    [action.payload.key]:action.payload
                }
            };
            break;
        case toggleSubChatWrapperKEY:
            return {
                ...state,
                subChatModel:initState.subChatModel
            };
            break;   
        case toggleSubChatBodyKEY:
            return {
                ...state,
                subChatModel:{
                   ...state.subChatModel,
                   minimizeStatus:!state.subChatModel.minimizeStatus
                }
            };
            break;   
        case resetSubchatModelKEY:  
            return {
                ...state,
                subChatModel:initState.subChatModel, 
                chatList:initState.chatList        
            }
            break;                          
        default:
            return state
    }
}