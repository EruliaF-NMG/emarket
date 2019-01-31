/*
 * @Author: Nisal Madusanka(EruliaF)
 * @Date: 2019-01-29 17:39:07
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-01-31 19:18:37
 */

import React from "react";
import {getValue} from "../../../helpers/common/CommonMethods";

const emptyFun = () => undefined;

const SubChatHeader = ({
  imageUrl = "",
  receiverName = "",
  onClose = emptyFun,
  onMinimize=emptyFun
}) => {
  return (
    <div className="miniChatHeader" >
      <span onClick={onMinimize}>
        <img src={imageUrl} className="personImage" />
        <span className="personName">{receiverName}</span>
      </span>      
      <i className="far fa-times-circle closeIcon" onClick={onClose} />
    </div>
  );
};

const OthersMessage = ({ 
    profileUrl = "", 
    message = "" 
}) => {
  return (
    <div className="media">
      <img src={profileUrl} className="align-self-end mr-2 chatUserPic" />
      <div className="media-body chatMessage">
        <p>{message}</p>
      </div>
    </div>
  );
};

const OwnMessage = ({ 
    profileUrl = "", 
    message = "" 
}) => {
  return (
    <div className="media">
      <div className="media-body chatMessage ownMessage">
        <p>{message}</p>
      </div>
      <img src={profileUrl} className="align-self-end ml-3 chatUserPic" />
    </div>
  );
};

const ChatMessageBody = ({ 
    chatMessageList = [],
}) => {
  return (
    <div className={"miniChatBody miniChatBodyActive"}>
      <OthersMessage
        profileUrl="http://localhost:3000/api/user/profile-image/5c279d36ba65291e40e1ad5a"
        message="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus"
      />
      <OwnMessage
        profileUrl="http://localhost:3000/api/user/profile-image/5c279d36ba65291e40e1ad5a"
        message="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus"
      />
    </div>
  );
};

const SubChatFooter = ({
  currentChatMessage="",
  onChangeTxt=emptyFun,
  onChat=emptyFun
}) => {
  return (
    <div className="miniChatFooter ">
      <div className="inputWapper">
        <textarea
          className={"div100"}
          name={"currentChatMessage"}
          id={"currentChatMessage"}
          onChange={(event)=>onChangeTxt({name:event.target.name,value:event.target.value})}
          value={currentChatMessage}
        />
      </div>
      <div className="iconWrpper">
        {/* <i className="far fa-images ileft"/>
        <i className="fas fa-camera ileft"/>
        <i className="fas fa-video ileft"/> */}

        {
          (currentChatMessage)
            ?(  
              <i 
                className="fas fa-paper-plane iright" 
                onClick={()=>onChat("text")}
              />
              )
            :(<i className="fas fa-thumbs-up iright"/>)
        }

      </div>
    </div>
  );
};

const ChatBody =({
  chatMessageList=[],
  currentChatMessage="",
  onChangeTxt=emptyFun,
  onChat=emptyFun
})=>{
  return (
          <div className="miniChatBodyWrapper">
            <ChatMessageBody 
                chatMessageList={chatMessageList}
            />
            <SubChatFooter
              currentChatMessage={currentChatMessage}
              onChangeTxt={onChangeTxt}
              onChat={onChat}
            />
          </div>
  )
}

const SubChat = ({
  modelInitData={},
  chatActions={},
  currentChatMessage="",
  onChat=emptyFun
}) => {
  return (
    <div className="container chatContainer">
      <div className="miniChatMainWrapper">
        <div className="miniChatSubWrapper">
          <SubChatHeader
            imageUrl={getValue(modelInitData,"receiver.imgUrl","")}
            receiverName={getValue(modelInitData,"receiver.name","")}
            onClose={()=>chatActions.toggleSubChat()}
            onMinimize={()=>chatActions.toggleChatBody()}
          />

          {
            (getValue(modelInitData,"minimizeStatus",false)==true)?
            (
              <ChatBody
                chatMessageList={[]}
                currentChatMessage={currentChatMessage}
                onChangeTxt={chatActions.getChatMessageInput}
                onChat={onChat}
              />
            )
            :(null)
          }

        </div>
      </div>
    </div>
  );
};

export { SubChat };
