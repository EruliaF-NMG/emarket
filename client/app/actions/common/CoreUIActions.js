import {   
    preLoaderKey,manageModelKEY
} from '../../config/StateKeys';


function setPreLoader(status) {
    return {
        type: preLoaderKey,
        payload:status
    }
}

function manageModel(key,modelType="lg"){
    return {
        type: manageModelKEY,
        modelType:modelType,
        payload:key
    }
}

export {
    setPreLoader,
    manageModel
}