/*
 * @Author: Nisal Madusanka(EruliaF)
 * @Date: 2019-01-12 18:00:19
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-01-17 17:48:30
 */
import { manageModel } from "../common/CoreUIActions";
import { 
  unsetInputs
} from "../common/CoreActions";

function manageCreateModel() {
  return dispatch => {
    dispatch(unsetInputs());
    dispatch(manageModel("createProductModel"));
  };
}


export {
    manageCreateModel
}