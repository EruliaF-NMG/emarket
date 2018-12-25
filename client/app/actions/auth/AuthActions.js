import Validate from "../../helpers/validation/Validate";
import { setInputErrors, unsetInputErrors } from "../common/CoreActions";

function validateRegisterForm(formData) {
  const rules = {
    name: "required",
    email: "required",
    password: "required"
  };
  const message = {
    namerequired: "Please enter your Name",
    emailrequired: "Please enter your E-mail",
    passwordrequired: "Please enter your Password"
  };

  Validate.setAll(rules, {}, message);
  return Validate.validate(formData);
}

function registerUser(formObject) {
  return dispatch => {

    let formData = {
      name: formObject.name || "",
      email: formObject.email || "",
      password: formObject.password || ""
    };

    let errors = validateRegisterForm(formData);   
    if (errors.status === true) {
      //show Form Error   
      delete errors["status"];  
      delete errors["errorType"];  
      dispatch(setInputErrors(errors));
    } else {
      // redey to submit
      dispatch(unsetInputErrors());
      
    }

  };
}

export { registerUser };
