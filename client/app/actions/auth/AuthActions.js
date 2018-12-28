import Validate from "../../helpers/validation/Validate";
import { setInputErrors, unsetInputErrors } from "../common/CoreActions";



function registerUser(formObject) {
  return dispatch => {

    let formData = {
      name: formObject.name || "",
      email: formObject.email || "",
      password: formObject.password || ""
    };

   

  };
}

export { 
  registerUser 
};
