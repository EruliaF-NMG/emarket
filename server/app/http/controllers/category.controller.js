/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2019-01-24 15:27:31 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-01-24 17:14:59
 */

import Category from "../../models/category.model";
import { _sendResponse } from "../../helpers/common/commonMethods";
import {
    successResponse,
    exceptionResponse
} from "../../../config/apiResponse";


const create=(req,res)=>{
    let formData = req.body;
    const category = new Category(formData);
    category.save((error, categoryObj) => {
        if (error) {
            return res
                .status(exceptionResponse.httpStatus)
                .json(_sendResponse(exceptionResponse, error));
        }else{
            return res
                .status(successResponse.httpStatus)
                .json(_sendResponse(successResponse, categoryObj));
        }
    });
}

const getCategoryList=(req,res)=>{
    
    Category.find({},(error,category)=>{
        if(error){
            return res
                .status(successResponse.httpStatus)
                .json(_sendResponse(successResponse, []));
        }else{
            return res
                .status(successResponse.httpStatus)
                .json(_sendResponse(successResponse, category));
        }
    })
   
    // let catList = [
    //     { name: "Apparel,Textiles & Accessories" },
    //     { name: "Gifts, Sports & Toys" },
    //     { name: "Bags, Shoes & Accessories" },
    //     { name: "Electronics" },
    //     { name: "Home, Lights & Construction" }
    // ];

    // Category.collection.insert(catList, function (err, docs) {
    //     if (err){ 
    //         return console.error(err);
    //     } else {
    //       console.log("Multiple documents inserted to Collection");
    //     }
    //   }); 

}

export default{
    create,
    getCategoryList
}