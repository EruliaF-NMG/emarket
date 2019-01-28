/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2019-01-26 14:46:01 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-01-26 14:56:58
 */

import {get} from "lodash";

/**
 * 
 * @param {*} formValue 
 * @param {*} key 
 */
function formatInput(formValue,key) {

    let value=get(formValue, key,"");

    let type = typeof(value);

    switch (type) {
        case "string":
        {
            formValue = value.trim();
            break;
        }
        default:
        {            
            break;
        }
    }
    return formValue;
}




function required(key, values, param, message, filedList) {
    try {

        console.log(key);
       
        let formValue = formatInput(values,key);      

        if (formValue) {
            return false;
        } else {
            return message;
        }

    } catch (ex) {
        console.log(
            `----------------Validation Exception At (required)-------------------`,
            `Input Key - ${key}`,
            `Exception - ${ex}`
        );
       
        return true;
    }
}


function required_if(key, values, param, message, filedList){
    try {

        let mainFild=formatInput(values,param[0]);  

        if(mainFild==param[1]){
            return required(key,values,[],message,filedList);
        }
       
       

    } catch (ex) {
        console.log(
            `----------------Validation Exception At (required_if)-------------------`,
            `Input Key - ${key}`,
            `Exception - ${ex}`
        );
       
        return true;
    }
}




export {
    required,
    required_if
}

