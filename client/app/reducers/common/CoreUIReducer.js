import {
preLoaderKey,manageModelKEY
} from "../../config/StateKeys"



const initState = {    
    preLoaderStatus:false,
    modelStatus:{
        status:{},
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
                    modelType:action.modelType,
                    status:{
                        ...state.modelStatus.status,
                        [action.payload]:!((state.modelStatus.status[action.payload])?true:false)
                    }
                }
            };
            break;            
        default:
            return state
    }
}