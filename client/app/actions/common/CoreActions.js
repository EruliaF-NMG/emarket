import {
    setInputValueKEY,setFormErrorsKEY,unSetFormErrorsKEY,
    preLoaderKey
} from '../../config/StateKeys';


/**
 * @Author: Nisal Madusanka(EruliaF)
 * @returns {{type: string}}
 */
function handleInput(key,value) {
    return {
        type: setInputValueKEY,
        payload:value,
        key:key
    }
}

function setInputErrors(value) {
    return {
        type: setFormErrorsKEY,
        payload:value
    }
}

function unsetInputErrors() {
    return {
        type: unSetFormErrorsKEY
    }
}

export function setDB(api,method="POST",requestBody={},stateKey="createData",responseMessage=[]) {
    return dispatch => {
        try {

            //set loader
            dispatch({
                type: preLoaderKey,
                payload:true
            });


        }catch(ex){

            //remove loader
            dispatch({
                type: preLoaderKey,
                payload:true
            });

            dispatch({
                type: setDBStatusKey, 
                payload: false,
                key:stateKey
            });
        }
    }
}

export {
    handleInput,
    setInputErrors,
    unsetInputErrors
}