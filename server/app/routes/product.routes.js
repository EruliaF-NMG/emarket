import express from 'express';

//controllers
import productCtrl from "../http/controllers/product.controller";
import authCtrl from "../http/controllers/auth.controller";
import shopCtrl from "../http/controllers/shop.controller";

//middleware
import {fileUpload} from "../http/middleware/core/multipartFrom";


const router =express.Router();

router.route("/product-create/:shopID")
    .post(authCtrl.requireSignin,fileUpload.any("files"),productCtrl.create); 

router.route("/product/:shopID")
    .get(authCtrl.requireSignin,productCtrl.getProductsByShop);    
    

router.route("/product-galary/:galaryID")
    .get(productCtrl.getProductGalary);


router.param("shopID",shopCtrl.getShopByID); 

export default router