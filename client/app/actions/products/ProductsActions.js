/*
 * @Author: Nisal Madusanka(EruliaF)
 * @Date: 2019-01-12 18:00:19
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-01-19 20:04:38
 */
import { manageModel } from "../common/CoreUIActions";
import { 
  unsetInputs
} from "../common/CoreActions";
import { getValue } from "../../helpers/common/CommonMethods";
import { 
  getProfileInfoByIDAPI,editProfileInfoByIDAPI,shopsByUserAPI 

} from "../../config/APIEndPoints";

function manageCreateModel() {
  return dispatch => {
    dispatch(unsetInputs());
    dispatch(manageModel("createProductModel"));
  };
}

function createProduct(formData,currentShop){
  return dispatch => {

    const data = new FormData();
    data.append('name',getValue(formData, 'name'));
    data.append('price',getValue(formData, 'price'));
    data.append('quantity',getValue(formData, 'quantity'));
    data.append('description',getValue(formData, 'description'));

   
    if(getValue(formData, 'galary.attachFiles',false)){
      let files=getValue(formData, 'galary.attachFiles',[]);      
      for(let i in files){
        data.append('files', files[i]);
      }
    }

   

    dispatch(setDB(editProfileInfoByIDAPI + userID, "PUT",data, "editUserInfo"));

  }
}

export {
    manageCreateModel,
    createProduct
}