import _ from "lodash";
import Validate from "../../../helpers/validation/validate";
import {formErrorResponse} from "../../../../config/apiResponse";
import {_sendResponse} from "../../../helpers/common/commonMethods";

const validateRegister = (req, res,next) => {  

    const rules= {
        name:"required",
        email:"required",
        password:"required",
    };

    const message={
        'name.required':"Please enter the Name.",
        'email.required':"Please enter the E-mail.",
        'password.required':"Please enter the Password.",
    };

    let validateObj=new Validate(rules,{},message);
    let errors=validateObj.validateForm(req.body);
    if (errors._status == true) {
        //show Form Error   
        delete errors["_status"];
        return res
                .status(formErrorResponse.httpStatus)
                .json(
                _sendResponse(formErrorResponse, errors)
                );
    }else{
        next();
    } 
    
}

const validateLogin = (req, res,next) => {  

    const rules= {
        username:"required",
        password:"required",
    };

    const message={
        'username.required':"Please enter the E-mail.",
        'password.required':"Please enter the Password.",
    };

    let validateObj=new Validate(rules,{},message);
    let errors=validateObj.validateForm(req.body);
    if (errors._status == true) {
        //show Form Error   
        delete errors["_status"];
        return res
                .status(formErrorResponse.httpStatus)
                .json(
                _sendResponse(formErrorResponse, errors)
                );
    }else{
        next();
    } 
    
}


export {
    validateRegister,
    validateLogin
}