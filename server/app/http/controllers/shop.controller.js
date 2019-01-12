/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2019-01-12 14:05:38 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-01-12 21:38:46
 */

import Shop from "../../models/shop.model";
import { _sendResponse } from "../../helpers/common/commonMethods";
import {
    successResponse,
    exceptionResponse
} from "../../../config/apiResponse";
import { uploadImage,getImage } from "../../helpers/common/manageUploads";
import {sendFileToResponce} from "../../helpers/common/grid-fs";



const getShopByID = (req, res, next, id) => {
    Shop.findById(id).populate('owner').exec((error, shop) => {
        if (error) {
            return res
                .status(exceptionResponse.httpStatus)
                .json(_sendResponse(exceptionResponse, error));
        }
        req.currentShop = shop;
        next();
    });
}

const getShopData = (req, res) => {
    return res
        .status(successResponse.httpStatus)
        .json(_sendResponse(successResponse, req.currentShop));
}

const create = (req, res) => {


    let formData = req.body;
    formData["owner"] = req.profile._id;

    const shop = new Shop(formData);
    shop.save((err, shopObj) => {
        if (err) {
            return res
                .status(exceptionResponse.httpStatus)
                .json(_sendResponse(exceptionResponse, error));
        }else{

            uploadImage(shopObj._id, req.file, (error) => {
                if (error) {
                    return res
                        .status(successResponse.httpStatus)
                        .json(_sendResponse(successResponse, shopObj));
                } else {
                    return res
                        .status(successResponse.httpStatus)
                        .json(_sendResponse(successResponse, shopObj));
                }
            });

        }
    })
}


const edit = (req, res) => {

    let shop = req.currentShop;

    uploadImage(shop._id, req.file, function (error) {
        if (error) {
            return res
                .status(exceptionResponse.httpStatus)
                .json(_sendResponse(exceptionResponse, error));
        } else {

            shop.name = req.body.name;
            shop.description = req.body.description;
            shop.address = req.body.address;
            shop.contact = req.body.contact;
            shop.updated = Date.now();

            shop.save((error, shopData) => {
                if (error) {
                    return res
                        .status(exceptionResponse.httpStatus)
                        .json(_sendResponse(exceptionResponse, error));
                }

                return res
                    .status(successResponse.httpStatus)
                    .json(_sendResponse(successResponse, shopData));
            });

        }
    });
}

const getShopsByUser = (req, res) => {
    Shop.find({ owner: req.profile._id }, function (error, shops) {
        if (error) {
            return res
                .status(exceptionResponse.httpStatus)
                .json(_sendResponse(exceptionResponse, error));
        }
        return res
            .status(successResponse.httpStatus)
            .json(_sendResponse(successResponse, shops));
    });
}

const getShopLogo = (req, res, next) => {

    getImage(req.currentShop._id, function (error, file) {
        if (error) {
            next();
        } else {
            if (file) {
                res.header('Content-Length', file.length);
                res.header('Content-Type', file.contentType);
                sendFileToResponce(req.currentShop._id, res, function (error) {
                    if (error) {
                        next();
                    }
                })
            } else {
                next();
            }
        }
    });

};

const defaultShopImage = (req, res) => {
    res.header('Content-Type', "image/png");
    fs.ReadStream("./assets/default-profile-img.png")
        .pipe(res)
        .on("error", function (error) {
            return res
                .status(exceptionResponse.httpStatus)
                .json(_sendResponse(exceptionResponse, error));
        });
}


export default {
    getShopByID,
    getShopsByUser,
    create,
    edit,
    getShopLogo,
    defaultShopImage,
    getShopData
}

