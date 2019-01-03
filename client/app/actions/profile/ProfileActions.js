/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2018-12-30 08:34:39 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2018-12-30 18:11:03
 */


import {setDataToStore,setBulkFormInputs} from "../../actions/common/CoreActions";
import {manageModel} from "../../actions/common/CoreUIActions";
import {getProfileInfoByIDAPI} from "../../config/APIEndPoints";
import {getValue} from "../../helpers/common/CommonMethods";

function initProfileUI(userID) {
  return setDataToStore(getProfileInfoByIDAPI+userID,"profileData","GET");
}

function manageProfileEditModel(profileData){
 
  return dispatch => {
   
    dispatch(setBulkFormInputs({
      "name":getValue(profileData,'name'),
      "email":getValue(profileData,'email'),
      "address":getValue(profileData,'profile.address'),
      "contact":getValue(profileData,'profile.contact'),
      "about":getValue(profileData,'profile.about'),
    }));

    dispatch(manageModel());

  };
}


export {
    initProfileUI,
    manageProfileEditModel
}