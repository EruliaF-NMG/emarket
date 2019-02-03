import express from 'express';

//controllers
import chatCtrl from "../http/controllers/chat.controller";
import authCtrl from "../http/controllers/auth.controller";

const router =express.Router();

router.route("/get-message-list/:mainUser/:otherUser")
    .get(authCtrl.requireSignin,chatCtrl.getChatMessagers);

router.route("/init-chat-get-message-list/:shopID/:userID/:type")
    .get(authCtrl.requireSignin,chatCtrl.initChatANDGetChatList);    

export default router