/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2018-12-30 08:34:39 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-01-12 20:40:59
 */


import { setDataToStore, setBulkFormInputs, setDB,unsetInputs,unsetAPIReturnsBYKey,updateAPIDataToStore} from "../../actions/common/CoreActions";
import { manageModel } from "../../actions/common/CoreUIActions";
import { 
  getProfileInfoByIDAPI,editProfileInfoByIDAPI,shopsByUserAPI 

} from "../../config/APIEndPoints";
import { getValue } from "../../helpers/common/CommonMethods";

function initProfileUI(userID) {
  return dispatch => {
    dispatch(setDataToStore(getProfileInfoByIDAPI + userID, "profileData", "GET"));
    dispatch(setDataToStore(shopsByUserAPI + userID, "shopList", "GET"));
  }
}

function manageProfileEditModel(profileData) {

  return dispatch => {

    dispatch(setBulkFormInputs({
      "name": getValue(profileData, 'name'),
      "email": getValue(profileData, 'email'),
      "address": getValue(profileData, 'profile.address'),
      "contact": getValue(profileData, 'profile.contact'),
      "about": getValue(profileData, 'profile.about'),
    }));

    dispatch(manageModel("editModel"));

  };
}

function editProfileInfo(formData, userID) {

  return dispatch => {

    const data = new FormData();
    data.append('name',getValue(formData, 'name'));
    data.append('email',getValue(formData, 'email'));
    data.append('address',getValue(formData, 'address'));
    data.append('contact',getValue(formData, 'contact'));
    data.append('about',getValue(formData, 'about'));
    if(getValue(formData, 'proPic',false)){
      data.append('proPic',getValue(formData, 'proPic',""));
    }

    dispatch(setDB(editProfileInfoByIDAPI + userID, "PUT",data, "editUserInfo"));

  }
}

function updateSucess(responce){
  return dispatch => {
    dispatch(updateAPIDataToStore(responce,"profileData"))
    dispatch(unsetAPIReturnsBYKey("editUserInfo"))
    dispatch(manageModel("editModel"));
    dispatch(unsetInputs());
  }
}


export {
  initProfileUI,
  manageProfileEditModel,
  editProfileInfo,
  updateSucess
}