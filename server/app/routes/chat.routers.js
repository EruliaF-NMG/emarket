import express from 'express';

//controllers
import chatCtrl from "../http/controllers/chat.controller";
import authCtrl from "../http/controllers/auth.controller";

const router =express.Router();

router.route("/get-message-list/:mainUser/:otherUser")
    .get(authCtrl.requireSignin,chatCtrl.getChatMessagers);

export default router