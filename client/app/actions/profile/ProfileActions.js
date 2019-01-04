/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2018-12-30 08:34:39 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-01-03 20:42:53
 */


import { setDataToStore, setBulkFormInputs, setDB,unsetInputs,unsetAPIReturnsBYKey,updateAPIDataToStore} from "../../actions/common/CoreActions";
import { manageModel } from "../../actions/common/CoreUIActions";
import { getProfileInfoByIDAPI, editProfileInfoByIDAPI } from "../../config/APIEndPoints";
import { getValue } from "../../helpers/common/CommonMethods";

function initProfileUI(userID) {
  return setDataToStore(getProfileInfoByIDAPI + userID, "profileData", "GET");
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

    dispatch(manageModel());

  };
}

function editProfileInfo(formData, userID) {

  return dispatch => {

    dispatch(setDB(editProfileInfoByIDAPI + userID, "PUT", {
      "name": getValue(formData, 'name'),
      "email": getValue(formData, 'email'),
      "address": getValue(formData, 'address'),
      "contact": getValue(formData, 'contact'),
      "about": getValue(formData, 'about')
    }, "editUserInfo"));

  }
}

function updateSucess(responce){
  return dispatch => {
    dispatch(updateAPIDataToStore(responce,"profileData"))
    dispatch(unsetAPIReturnsBYKey("editUserInfo"))
    dispatch(manageModel());
    dispatch(unsetInputs());
  }
}


export {
  initProfileUI,
  manageProfileEditModel,
  editProfileInfo,
  updateSucess
}