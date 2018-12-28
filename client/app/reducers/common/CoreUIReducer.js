import {
preLoaderKey
} from "../../config/StateKeys"

const initState = {    
    preLoaderStatus:false
}

export default function coreUIReducer(state = initState, action) {
    switch (action.type) {        
        case preLoaderKey:
            return {
                ...state,
                preLoaderStatus: action.payload,
            };
            break;        
        default:
            return state
    }
}