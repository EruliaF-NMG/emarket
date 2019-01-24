import express from 'express';

//controllers
import categoryCtrl from "../http/controllers/category.controller";
import authCtrl from "../http/controllers/auth.controller";

const router =express.Router();

router.route("/category")
    .get(authCtrl.requireSignin,categoryCtrl.getCategoryList)
    .post(authCtrl.requireSignin,categoryCtrl.create);  

export default router