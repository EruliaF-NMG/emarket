import express from 'express';

import authCtrl from '../http/controllers/auth.controller';
import oauth2 from "../helpers/auth/oauth2";
import {validateRegister,validateLogin,validateTest} from "../http/requests/auth/authRequest";

const router = express.Router();

router.route('/auth/register')
  .post(validateRegister,authCtrl.registerUser)

router.route('/oauth/token')
  .post(validateLogin,oauth2.token)

router.route('/auth/userInfo')
  .get(authCtrl.requireSignin,authCtrl.getUserInfo)  

router.route('/test')
  .post(validateTest)   

export default router