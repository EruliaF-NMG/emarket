/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2019-01-14 17:02:27 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-01-24 12:42:47
 */

 import mongoose from "mongoose";
 import fs from "fs";

import Product from "../../models/product.model";
import {uploadProductGalary} from "../../helpers/product/manageProducts";
import {getImage} from "../../helpers/common/manageUploads";
import {sendFileToResponce} from "../../helpers/common/grid-fs";
import { _sendResponse } from "../../helpers/common/commonMethods";
import {
    successResponse,
    exceptionResponse
} from "../../../config/apiResponse";

const create=(req,res)=>{
   
    uploadProductGalary(req.files,(error,galaryList)=>{
        let formData = req.body;
        formData["shop"] = req.currentShop._id;
        formData["gallery"] = galaryList;
        const product = new Product(formData);
        product.save((err, productObj) => {
            if (err) {
                return res
                    .status(exceptionResponse.httpStatus)
                    .json(_sendResponse(exceptionResponse, error));
            }else{
                return res
                    .status(successResponse.httpStatus)
                    .json(_sendResponse(successResponse, productObj));
            }
        });
    })
}

const getProductsByShop=(req,res)=>{

    Product.find({ shop: req.currentShop._id }, function (error, products) {
        if (error) {
            return res
                .status(exceptionResponse.httpStatus)
                .json(_sendResponse(exceptionResponse, error));
        }
        return res
            .status(successResponse.httpStatus)
            .json(_sendResponse(successResponse, products));
    });
}

const getProductGalary = (req, res,next) => {
   try{
        let id =mongoose.Types.ObjectId(req.params.galaryID);

        getImage(id, function (error, file) {
            if (error) {
                next();
            } else {
                if (file) {
                    res.header('Content-Length', file.length);
                    res.header('Content-Type', file.contentType);
                    sendFileToResponce(id, res, function (error) {
                        if (error) {
                            next();
                        }
                    })
                } else {
                    next();
                }
            }
        });
    }catch(ex){
        next();
    }
    
};

const defaultProductImage = (req, res) => {
    res.header('Content-Type', "image/png");
    fs.ReadStream("./assets/default-product.png")
        .pipe(res)
        .on("error", function (error) {
            return res
                .status(exceptionResponse.httpStatus)
                .json(_sendResponse(exceptionResponse, error));
        });
}

const getProductByID = (req, res,next,id) => {
    Product.findById(id).populate({
        path: 'shop',
        model:'Shop',
        select:"_id name description address contact",
        populate:{
            path: 'owner',
            model:'User',
            select:"_id name email"
        }
    }).exec((error, product) => {
        if (error) {
            return res
                .status(exceptionResponse.httpStatus)
                .json(_sendResponse(exceptionResponse, error));
        }
        req.currentProduct = product;
        next();
    });
}

const getProductInfo =(req, res)=>{
    return res
    .status(successResponse.httpStatus)
    .json(_sendResponse(successResponse, req.currentProduct));
}


export default{
    create,
    getProductsByShop,
    getProductGalary,
    getProductByID,
    getProductInfo,
    defaultProductImage
}