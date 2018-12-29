import express from 'express';
import userCtrl from "../http/controllers/user.controller";
import authCtrl from "../http/controllers/auth.controller";

const router =express.Router();

router.route("/user/:userID")
    .get(authCtrl.requireSignin,userCtrl.getProfileInfo)
    .put(authCtrl.requireSignin,userCtrl.updateUser)

router.param("userID",userCtrl.getUserByID);    


export default router