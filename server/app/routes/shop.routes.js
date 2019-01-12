import express from 'express';

//controllers
import shopCtrl from "../http/controllers/shop.controller";
import userCtrl from "../http/controllers/user.controller";
import authCtrl from "../http/controllers/auth.controller";

//middleware
import {fileUpload} from "../http/middleware/core/multipartFrom";

const router =express.Router();

router.route("/shops-by-user/:userID")
    .get(authCtrl.requireSignin,shopCtrl.getShopsByUser);

router.route("/shop-create/:userID")
    .post(authCtrl.requireSignin,fileUpload.single("logo"),shopCtrl.create)    

router.route("/shop/:shopID")
    .get(authCtrl.requireSignin,shopCtrl.getShopData)
    .put(authCtrl.requireSignin,fileUpload.single("logo"),shopCtrl.edit)  
    
router.route("/shop-logo/:shopID")
    .get(shopCtrl.getShopLogo,shopCtrl.defaultShopImage)    

router.param("shopID",shopCtrl.getShopByID);    
router.param("userID",userCtrl.getUserByID); 

export default router