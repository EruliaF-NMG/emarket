import _ from "lodash";


function formatInput(formValue,key) {

    let value=_.get(formValue, key,"");

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




export {
    required
}

