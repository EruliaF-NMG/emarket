import {   
    preLoaderKey
} from '../../config/StateKeys';


function setPreLoader(status) {
    return {
        type: preLoaderKey,
        payload:status
    }
}

export {
    setPreLoader
}