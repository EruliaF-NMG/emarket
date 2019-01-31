import {
preLoaderKey,manageModelKEY,setSubchatReceiverKEY,
toggleSubChatWrapperKEY,toggleSubChatBodyKEY
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
        receiver:{id:"",name:"",imgUrl:""}
    }

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
                }
            };
            break; 
        case toggleSubChatWrapperKEY:
            return {
                ...state,
                subChatModel:{
                   ...state.subChatModel,
                   status:!state.subChatModel.status
                }
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
        default:
            return state
    }
}