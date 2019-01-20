/*
 * @Author: Nisal Madusanka(EruliaF)
 * @Date: 2019-01-12 18:00:19
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-01-20 21:28:07
 */
import { manageModel } from "../common/CoreUIActions";
import { 
  unsetInputs,setDB,updateAPIDataToStore,
  unsetAPIReturnsBYKey
} from "../common/CoreActions";
import { getValue } from "../../helpers/common/CommonMethods";
import { 
  createProductAPI

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



export {
    manageCreateModel,
    createProduct,
    createSucess
}