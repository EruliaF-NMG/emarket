

export function required(key, values, param, message, filedList) {
    try {

        let formValue = formatInput(values[key]);      

        if (formValue) {
            return false;
        } else {
            return message;
        }

    } catch (ex) {
        console.log("----------------Validation Exception required-------------------" + "\n" +
                "Exception occurred at executing ----required " + typeof (values[key]) + "\n" +
                (ex) + "\n" +
                "------------------------------------------------");
        return true;
    }
}


export function max(key, values, param, message, filedList) {
    try {
        
        let formValue=formatInput(values[key]);

        if (!formValue || (formValue).length <= param[0]) {
            return false;
        } else {
            return message.replace(':max', param[0]);
        }


    } catch (ex) {
        console.log('----------------Validation Exception max-------------------' + '\n' +
                'Exception occurred at executing ---- ' + key + '\n' +
                '' + (ex) + '\n' +
                '------------------------------------------------');
        return true;
    }
}

export function maxAmount(key, values, param, message, filedList) {
    try {
        let formValue=formatInput(values[key]);

        if(param[0]==="" || !formValue){

            return false;
        }else{                 
            formValue=parseFloat(formValue);

            if (formValue <= parseFloat(param[0])) {
                return false;
            } else {
                return message.replace(':max', param[0]);
            }
        }


    } catch (ex) {
        console.log('----------------Validation Exception maxAmount-------------------' + '\n' +
                'Exception occurred at executing ---- ' + key + '\n' +
                '' + (ex) + '\n' +
                '------------------------------------------------');
        return true;
    }
}

export function min(key, values, param, message, filedList) {
    try {
        
        let formValue=formatInput(values[key]);

        if ((formValue).length >= param[0]) {
            return false;
        } else {
            return message.replace(':min', param[0]);
        }


    } catch (ex) {
        console.log('----------------Validation Exception min-------------------' + '\n' +
                'Exception occurred at executing ---- ' + key + '\n' +
                '' + (ex) + '\n' +
                '------------------------------------------------');
        return true;
    }
}

export function minAmount(key, values, param, message, filedList) {
    try {

        let formValue=formatInput(values[key]);
        
        if(param[0]==="" || !formValue){
            return false;
        }
        else{
        
            formValue=parseFloat(formValue);

            if (formValue >= parseFloat(param[0])) {
                return false;
            } else {
                return message.replace(':min', param[0]);
            }

        }


    } catch (ex) {
        console.log('----------------Validation Exception minAmount-------------------' + '\n' +
                'Exception occurred at executing ---- ' + key + '\n' +
                '' + (ex) + '\n' +
                '------------------------------------------------');
        return true;
    }
}

export function between(key, values, param, message, filedList) {
    try {
        
        let formValue=formatInput(values[key]);

        if (((formValue).length >= param[0]) && ((formValue).length <= param[1])) {
            return false;
        } else {
            message = message.replace(':min', param[0]);
            return message.replace(':max', param[1]);
        }


    } catch (ex) {
        console.log('----------------Validation Exception between-------------------' + '\n' +
                'Exception occurred at executing  ---- ' + key + '\n' +
                '' + (ex) + '\n' +
                '------------------------------------------------');
        return true;
    }
}


export function requiredIf(key, values, param, message, filedList) {
    try {

        let otherValue = formatInput(values[param[0]]);
       
        if (otherValue == param[1]) {

            let formValue =formatInput(values[key]); 

            if (formValue) {
                return false;
            } else {

                message = message.replace(':other', filedList[param[0]]);
                return message.replace(':value', param[1]);

            }

        } else {
            return false;
        }


    } catch (ex) {
        console.log('----------------Validation Exception requiredIf-------------------' + '\n' +
                'Exception occurred at executing ---- ' + key + '\n' +
                '' + (ex) + '\n' +
                '------------------------------------------------');
        return true;
    }
}

export function numeric(key, values, param, message, filedList) {
    try {

        let formValue =formatInput(values[key]);

        if (!formValue || isFinite(formatInput(formValue))) {

            return false;

        } else {
            return message;
        }

    } catch (ex) {
        console.log('----------------Validation Exception numeric-------------------' + '\n' +
                'Exception occurred at executing ---- ' + key + '\n' +
                '' + (ex) + '\n' +
                '------------------------------------------------');
        return true;
    }
}

export function digits(key, values, param, message, filedList) {
    try {
        
        let formValue=formatInput(values[key]);

        if(formValue){
            console.log("+++++",(formValue).length, param[0]);
            if ((formValue).length == param[0]) {
                return false;
            } else {
                return message.replace(':min', param[0]);
            }
        }else{
            return false;
        }



    } catch (ex) {
        console.log('----------------Validation Exception digits-------------------' + '\n' +
                'Exception occurred at executing ---- ' + key + '\n' +
                '' + (ex) + '\n' +
                '------------------------------------------------');
        return true;
    }
}


export function after_or_equal(key, values, param, message, filedList) {
    try {

        let formValue=formatInput(values[key]);

        if(((values[key])&&(values[param[0]]))){
            if (values[key] >= values[param[0]]) {
                return false;
            } else {
                return message.replace(':startDate', filedList[param[0]]);
            }
        }else{
            return false;
        }



    } catch (ex) {
        console.log('----------------Validation after_or_equal-------------------' + '\n' +
            'Exception occurred at executing ---- ' + key + '\n' +
            '' + (ex) + '\n' +
            '------------------------------------------------');
        return true;
    }
}

export function less_than(key, values, param, message, filedList) {
    try {

        let formValue=formatInput(values[key]);
        if(formValue) {
            if (parseFloat(formValue) < parseFloat(values[param[0]])) {
                return false;
            } else {
                return message;
            }
        }else {
            return false;
        }

    } catch (ex) {
        console.log('----------------Validation less_than-------------------' + '\n' +
            'Exception occurred at executing ---- ' + key + '\n' +
            '' + (ex) + '\n' +
            '------------------------------------------------');
        return true;
    }
}




function formatInput(formValue) {

    let type = typeof(formValue);

    switch (type) {
        case "string":
        {
            formValue = formValue.trim();
            break;
        }
        default:
        {            
            break;
        }
    }
    return formValue;
}

