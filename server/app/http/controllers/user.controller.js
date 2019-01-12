/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2019-01-12 11:15:50 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-01-12 16:44:37
 */

import fs from "fs";

import User from "../../models/user.model";
import {
  successResponse,
  exceptionResponse
} from "../../../config/apiResponse";
import { _sendResponse } from "../../helpers/common/commonMethods";
import { uploadImage, getImage } from "../../helpers/common/manageUploads";
import { sendFileToResponce } from "../../helpers/common/grid-fs";

const getUserByID = (req, res, next, id) => {
  User.findById(id).exec((error, user) => {
    if (error) {
      return res
        .status(exceptionResponse.httpStatus)
        .json(_sendResponse(exceptionResponse, error));
    }
    req.profile = user;
    next();
  });
};

const getProfileInfo = (req, res) => {
  req.profile.salt = undefined;
  req.profile.hashed_password = undefined;
  return res
    .status(successResponse.httpStatus)
    .json(_sendResponse(successResponse, req.profile));
};

const updateUser = (req, res) => {

  let user = req.profile;

  uploadImage(user._id, req.file, function (error) {
    if (error) {
      return res
        .status(exceptionResponse.httpStatus)
        .json(_sendResponse(exceptionResponse, error));
    } else {

      user.email = req.body.email;
      user.name = req.body.name;
      user.profile.about = req.body.about;
      user.profile.address = req.body.address;
      user.profile.contact = req.body.contact;
      user.updated = Date.now();

      user.save((error, userdata) => {
        if (error) {
          return res
            .status(exceptionResponse.httpStatus)
            .json(_sendResponse(exceptionResponse, error));
        }

        userdata.salt = undefined;
        userdata.hashed_password = undefined;
        return res
          .status(successResponse.httpStatus)
          .json(_sendResponse(successResponse, userdata));
      });

    }
  });
};


const getUserProfileImage = (req, res, next) => {

  getImage(req.profile._id, function (error, file) {
    if (error) {
      next();
    } else {
      if (file) {
        res.header('Content-Length', file.length);
        res.header('Content-Type', file.contentType);
        sendFileToResponce(req.profile._id,res,function(error){
          if(error){
            next();
          }
        })
      } else {
        next();
      }
    }
  });

};

const defaultProfileImage=(req, res)=>{
  res.header('Content-Type', "image/png");
  fs.ReadStream("./assets/default-profile-img.png")
  .pipe(res)
  .on("error",function(error){
    return res
            .status(exceptionResponse.httpStatus)
            .json(_sendResponse(exceptionResponse, error));
  });
}


export default {
  getUserByID,
  getProfileInfo,
  updateUser,
  getUserProfileImage,
  defaultProfileImage
};
