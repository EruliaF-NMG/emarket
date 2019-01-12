/*
 * @Author: Nisal Madusanka(EruliaF)
 * @Date: 2019-01-12 18:00:19
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-01-12 21:35:32
 */
import { manageModel } from "../../actions/common/CoreUIActions";
import { 
  unsetInputs,setDB,updateAPIDataToStore,
  unsetAPIReturnsBYKey
} from "../../actions/common/CoreActions";
import { getValue } from "../../helpers/common/CommonMethods";
import { createShopAPI } from "../../config/APIEndPoints";

function manageCreateModel() {
  return dispatch => {
    dispatch(unsetInputs());
    dispatch(manageModel("createShopModel"));
  };
}

function createNewShop(formData,currentUserID){
  return dispatch => {

    const data = new FormData();
    data.append('name',getValue(formData, 'name'));
    data.append('description',getValue(formData, 'description'));
    data.append('address',getValue(formData, 'address'));
    data.append('contact',getValue(formData, 'contact'));
    if(getValue(formData, 'logo',false)){
      data.append('logo',getValue(formData, 'logo',""));
    }

    dispatch(setDB(createShopAPI + currentUserID, "POST",data, "createNewShop"));

  }
}

function createSucess(responce,shopList){
  return dispatch => {        
    dispatch(unsetAPIReturnsBYKey("createNewShop"));
    dispatch(updateAPIDataToStore(shopList.push(responce),"shopList"));
    dispatch(manageModel("createShopModel"));
    dispatch(unsetInputs());
  }
}


export {
    manageCreateModel,
    createNewShop,
    createSucess
}