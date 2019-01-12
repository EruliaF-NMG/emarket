import express from 'express';

//controllers
import userCtrl from "../http/controllers/user.controller";
import authCtrl from "../http/controllers/auth.controller";
//midd
import {fileUpload} from "../http/middleware/core/multipartFrom";

const router =express.Router();


router.route("/user/:userID")
    .get(authCtrl.requireSignin,userCtrl.getProfileInfo)
    .put(authCtrl.requireSignin,fileUpload.single("proPic"),userCtrl.updateUser);

router.route("/user/profile-image/:userID")
    .get(userCtrl.getUserProfileImage,userCtrl.defaultProfileImage)    

router.param("userID",userCtrl.getUserByID);    


export default router