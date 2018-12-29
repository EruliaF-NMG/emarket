import User from "../../models/user.model";
import passport from "passport";
import Client from "../../models/client.model";
import errorHandler from "../../helpers/dbErrorHandler";
import oauth2 from "../../helpers/auth/oauth2";
import {
  successResponse,
  exceptionResponse
} from "../../../config/apiResponse";
import { _sendResponse } from "../../helpers/common/commonMethods";

const registerUser = (req, res) => {
  const user = new User(req.body);
  user.save((err, result) => {
    if (err) {
      return res
        .status(exceptionResponse.httpStatus)
        .json(
          _sendResponse(exceptionResponse, errorHandler.getErrorMessage(err))
        );
    }
    oauth2.generateTokens(
      {
        userId: user._id,
        clientId: "android"
      },
      function(ex, tokenValue, refreshTokenValue, expires) {
        if (ex) {
          return res
            .status(exceptionResponse.httpStatus)
            .json(_sendResponse(exceptionResponse, ex));
        } else {
          return res
            .status(successResponse.httpStatus)
            .json(_sendResponse(successResponse, {
              access_token: tokenValue,
              refresh_token: refreshTokenValue,
              expires_in: expires.expires_in,
              token_type: "Bearer"
            })
          );
        }
      }
    );
  });
};

const getUserInfo=(req,res)=>{
  req.user.salt= undefined;
  req.user.hashed_password= undefined;
  return res.status(successResponse.httpStatus)
         .json(_sendResponse(successResponse,req.user));
}

const requireSignin = passport.authenticate("bearer", { session: false });

export default {
  registerUser,
  requireSignin,
  getUserInfo
};
