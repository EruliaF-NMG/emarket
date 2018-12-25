import {errorMessage,errorTypes} from '../../config/Validation';
import * as ValidateMethods from './ValidateMethods';

export default class Validate {

    static setAll(rulesList = {}, filedsList = {}, messageList = {}) {
        this.rulesList = rulesList;
        this.filedsList = filedsList;
        this.messageList = messageList;
    }

    static setRules(rulesList) {
        this.rulesList = rulesList;
    }

    static setFileds(filedsList) {
        this.filedsList = filedsList;
    }

    static setMessage(messageList) {
        this.messageList = messageList;
    }

    static validate(values) {
        let errorList = new Array();
        errorList['status']=false;
        
        for (var key in this.rulesList) {            
            let filedName = Validate.getFiledName(key);
            let subRulesSet = this.rulesList[key].split("|");
            let validateResult = Validate.checkValidity(values,key,subRulesSet);
            if (validateResult) {
                 errorList['status']=true;  
                 errorList['errorType']=errorTypes.formValidation;  
                 errorList[key]=validateResult;
            }
        }       
        return errorList;
    }

    static  getFiledName(key) {
        if (this.filedsList) {
            if (this.filedsList.hasOwnProperty(key)) {
                return this.filedsList[key];
            } else {
                return key;
            }
        } else {
            return key;
        }
    }

    static checkValidity(values, key,subRulesSet) {
        try {
            for (var ruleKey in subRulesSet) {
                let param = null;
                let method = subRulesSet[ruleKey];
                if (subRulesSet[ruleKey].includes(":")) {
                    param = subRulesSet[ruleKey].split(":");
                    method = param[0];
                    param = param[1].split(",");
                } else {
                    param = null;
                }
                
                let message=Validate.getMessage(key,method);
                
               

                let result = ValidateMethods[method](key,values,param,message,this.filedsList);

                if (result) {
                    return result;
                }
            }
            return false;
        } catch (ex) {
            console.log('----------------Validation Exception-------------------' + '\n' +
                    'Exception occurred at executing ---- ' + subRulesSet[ruleKey] + '\n' +
                    '' + (ex) + '\n' +
                    '------------------------------------------------');
            return {
                message: ex
            };
        }
    }
    
    static getMessage(key,method){
        try {
            
            let messsage=((this.messageList) && (this.messageList.hasOwnProperty(key+method)))?this.messageList[key+method]:errorMessage[method];
            messsage=messsage.replace(":attribute",(this.filedsList.hasOwnProperty(key))?this.filedsList[key]:key);
            
            return messsage;
            
        }catch (ex){
            console.log('----------------Validation Exception-------------------' + '\n' +
                    'Exception occurred at executing ---- getMessage-' + method + '\n' +
                    '' + (ex) + '\n' +
                    '------------------------------------------------');
            return 'Error..';
        }       
        
    }

}

