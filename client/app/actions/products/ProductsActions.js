/*
 * @Author: Nisal Madusanka(EruliaF)
 * @Date: 2019-01-12 18:00:19
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-01-24 18:02:43
 */
import { manageModel } from "../common/CoreUIActions";
import { 
  unsetInputs,setDB,updateAPIDataToStore,
  unsetAPIReturnsBYKey,setDataToStore
} from "../common/CoreActions";
import { getValue } from "../../helpers/common/CommonMethods";
import { 
  createProductAPI,getProductByIDAPI
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
    data.append('category',getValue(formData, 'category'));

   
    if(getValue(formData, 'galary.attachFiles',false)){
      let files=getValue(formData, 'galary.attachFiles',[]);      
      for(let i in files){
        data.append('files', files[i]);
      }
    }  

    dispatch(setDB(createProductAPI + currentShop, "POST",data, "createProduct"));

  }
}

function createSucess(responce,productList){
  return dispatch => {        
    productList.push(responce);
    dispatch(unsetAPIReturnsBYKey("createProduct"));
    dispatch(updateAPIDataToStore(productList,"productData"));
    dispatch(manageModel("createProductModel"));
    dispatch(unsetInputs());
  }
}

function initProductUI(productID){
  return dispatch => {      
    dispatch(setDataToStore(getProductByIDAPI + productID, "currentProduct", "GET"));
  }
}



export {
    manageCreateModel,
    createProduct,
    createSucess,
    initProductUI
}