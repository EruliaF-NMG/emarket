import {
setInputValueKEY,setFormErrorsKEY,unSetFormErrorsKEY,
preLoaderKey
} from "../../config/StateKeys"

const initState = {    
    formData: {},
    errorList: {},    
}

export default function coreReducer(state = initState, action) {
    switch (action.type) {
        case setInputValueKEY:           
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.key]: action.payload,
                }
            };
            break;
        case setFormErrorsKEY:
            return {
                ...state,
                errorList: action.payload,
            };
            break;    
        case unSetFormErrorsKEY:
            return {
                ...state,
                errorList: initState.errorList,
            };
            break;    
        case preLoaderKey:
            return {
                ...state,
                errorList: initState.errorList,
            };
            break;        
        default:
            return state
    }
}