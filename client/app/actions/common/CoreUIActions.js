import {   
    preLoaderKey,manageModelKEY
} from '../../config/StateKeys';


function setPreLoader(status) {
    return {
        type: preLoaderKey,
        payload:status
    }
}

function manageModel(modelType="lg"){
    return {
        type: manageModelKEY,
        modelType:modelType
    }
}

export {
    setPreLoader,
    manageModel
}