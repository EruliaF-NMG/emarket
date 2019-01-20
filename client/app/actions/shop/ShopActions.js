/*
 * @Author: Nisal Madusanka(EruliaF)
 * @Date: 2019-01-12 18:00:19
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-01-20 19:41:34
 */
import { manageModel } from "../../actions/common/CoreUIActions";
import { 
  unsetInputs,setDB,updateAPIDataToStore,
  unsetAPIReturnsBYKey,setDataToStore,setBulkFormInputs
} from "../../actions/common/CoreActions";
import { getValue } from "../../helpers/common/CommonMethods";
import { 
  createShopAPI,getShopInfoAPI,getEditShopAPI,
  getProductByShopAPI
} from "../../config/APIEndPoints";

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
    shopList.push(responce);
    dispatch(unsetAPIReturnsBYKey("createNewShop"));
    dispatch(updateAPIDataToStore(shopList,"shopList"));
    dispatch(manageModel("createShopModel"));
    dispatch(unsetInputs());
  }
}

function initViewShopUI(shopID){
  return dispatch => {      
    dispatch(setDataToStore(getShopInfoAPI + shopID, "shopData", "GET"));
    dispatch(setDataToStore(getProductByShopAPI + shopID, "productData", "GET"));
  }
}

function manageEditModel(currentShop=null) {
  return dispatch => {   
    
    if(currentShop){
      dispatch(setBulkFormInputs({
        "name": getValue(currentShop, 'name'),
        "description": getValue(currentShop, 'description'),
        "address": getValue(currentShop, 'address'),
        "contact": getValue(currentShop, 'contact')
      }));
    }
    dispatch(manageModel("editShopModel"));
  };
}

function editShop(formData,shopID){
  return dispatch => {

    const data = new FormData();
    data.append('name',getValue(formData, 'name'));
    data.append('description',getValue(formData, 'description'));
    data.append('address',getValue(formData, 'address'));
    data.append('contact',getValue(formData, 'contact'));
    if(getValue(formData, 'logo',false)){
      data.append('logo',getValue(formData, 'logo',""));
    }

    dispatch(setDB(getEditShopAPI + shopID, "PUT",data, "editShop"));

  }
}

function editSucess(responce,currentShop){
  return dispatch => { 

    currentShop["name"]=responce.name;
    currentShop["description"]=responce.description;
    currentShop["address"]=responce.address;
    currentShop["contact"]=responce.contact;
    currentShop["updated"]=responce.updated;

    dispatch(unsetAPIReturnsBYKey("editShop"));
    dispatch(updateAPIDataToStore(currentShop,"shopData"));
    dispatch(manageModel("editShopModel"));
    dispatch(unsetInputs());
  }
}


function manageProductCreateModel() {
  return dispatch => {
    dispatch(unsetInputs());
    dispatch(manageModel("createProductModel"));
  };
}




export {
    manageCreateModel,
    createNewShop,
    createSucess,
    initViewShopUI,
    manageEditModel,
    editShop,
    editSucess,
    manageProductCreateModel
}