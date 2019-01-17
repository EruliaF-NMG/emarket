import {errorMessage} from '../../../config/validation';
import * as ValidateMethods from './validateMethods';
import {_substrCount} from "../../helpers/common/commonMethods";
import _ from "lodash";

export default class Validate {

    constructor(rulesList = {}, filedsList = {}, messageList = {}) {
        this.rulesList = rulesList;
        this.filedsList = filedsList;
        this.messageList = messageList;
    }

    validateForm(values){
        let errorList = {};
        errorList['_status']=false;
        
        for (var rulesKey in this.rulesList) {  
            
            

            if (rulesKey.indexOf('*') > -1){

                let subKeyItems=rulesKey.split("*");
                let subFormKeys=null;

                for (var subItemKey in subKeyItems) {
                    
                    if((subKeyItems.length-1)==subItemKey){
                        subFormKeys=this.generateFinalFildsKeys(subFormKeys,subKeyItems[subItemKey]);
                    }else{                       
                        subFormKeys=this.getSubFiledList(values,subKeyItems[subItemKey],subFormKeys);
                    }               

                }

                for(let formKey in subFormKeys){
                    let validateResult=this.runValidation(formKey,values,rulesKey);
                    if (validateResult) {
                        errorList['_status']=true; 
                        errorList[formKey]=validateResult;
                    }
                }


            }else{
                let validateResult=this.runValidation(rulesKey,values,rulesKey);
                if (validateResult) {
                    errorList['_status']=true; 
                    errorList[rulesKey]=validateResult;
                }
               
            }

            

            
        }       
        return errorList;
    }

    getSubFiledList(values,curentKey,subFormKeys){
        if(subFormKeys){
            let fildList={};
            for (var key in subFormKeys) {  
                let newFildList=this.generateSubFilds(values,key+curentKey);
                fildList = {...fildList, ...newFildList}; 
            }
            return fildList;
        }else{
           return this.generateSubFilds(values,curentKey);
        }
    }

    generateSubFilds(values,curentKey){
            let newKeyArray={};
            let status=true;
            let arrayKey=0;
            while(status){                
                if(_.has(values,curentKey+arrayKey)==true){                  
                    newKeyArray[curentKey+arrayKey]=curentKey+arrayKey;                    
                }else{                    
                    status=false; 
                } 
                arrayKey++;     
            }
            return newKeyArray;
    }

    generateFinalFildsKeys(keyList,finalKey){
        let returnList={};
        for (let key in keyList) {
            returnList[key+finalKey]=key+finalKey;
        }
        return returnList;
    }

    runValidation(inputKey,values,rulesKey){
        let filedName = this.getFiledName(rulesKey);
        let subRulesSet = this.rulesList[rulesKey].split("|");
        return this.checkValidity(values,inputKey,subRulesSet,rulesKey);
        
    }

    getFiledName(key){
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

    checkValidity(values, key,subRulesSet,mainKey){
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
                
                let message=this.getMessage(mainKey,method);
                
               

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
    
    getMessage(key,method){
        try {
            
            let messsage=((this.messageList) && (this.messageList.hasOwnProperty(`${key}.${method}`)))?this.messageList[`${key}.${method}`]:errorMessage[method];
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

