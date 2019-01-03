import {
preLoaderKey,manageModelKEY
} from "../../config/StateKeys"



const initState = {    
    preLoaderStatus:false,
    modelStatus:{
        status:false,
        modelType:"lg"
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
                    status:!state.modelStatus.status,
                    modelType:action.modelType
                }
            };
            break;            
        default:
            return state
    }
}