import React, { Component } from "react";
import Header from "../common-elements/Header";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getValue} from "../../../helpers/common/CommonMethods";
import {getCurrentUserID} from "../../../helpers/common/ChatMessage";
import {PageFullLoader,PageFooter} from "../common-elements/CommonElements";
import * as CoreUIActions from "../../../actions/common/CoreUIActions";
import * as ChatActions from "../../../actions/common/ChatActions";

class MainWrapper extends Component {

    constructor() {
        super();
    }

    componentDidMount = () => {
        let { socketOBj } = this.props;
        if (socketOBj) {
            socketOBj.on('receive_message', (msg) => {
                this.setToMessageList(msg);
            });
        }
    }

    onChatBtn=(type)=>{
        let {
            subChatModel,chatActions,formData,
            socketOBj,authUser
        } = this.props;
        chatActions.onSendFire(type,socketOBj,formData.currentChatMessage,authUser,subChatModel.receiver.key);
    }

    setToMessageList=(msg)=>{
        let {
            subChatModel,chatActions,coreData,authUser,chatList
        } = this.props; 
        
        if(chatList[msg.sender_id+"_"+msg.receiver_id]){
            chatActions.setChatMessageToStore(msg,coreData[msg.sender_id+"_"+msg.receiver_id],(msg.sender_id+"_"+msg.receiver_id));
        }else if(chatList[msg.receiver_id+"_"+msg.sender_id]){
            chatActions.setChatMessageToStore(msg,coreData[msg.receiver_id+"_"+msg.sender_id],(msg.receiver_id+"_"+msg.sender_id));
        }else{
            let userIDs=((msg.senderModel=="User")?({shopID:msg.receiver_id,userID:msg.sender_id}):({shopID:msg.sender_id,userID:msg.receiver_id}));
            chatActions.newChatReceived(userIDs,((authUser.seller==true)?"user":"shop"),((subChatModel.receiver.key==null)?true:false));
        }        
    }

    render() {
        let {
            preLoaderStatus,subChatModel,chatActions,
            formData,coreData,authUser,socketOBj
        } = this.props;       

       

        return (
            <div className="div100">
                <div className="container pageContent">
                <Header/>
                {this.props.children}
                </div>
                <PageFooter 
                 modelInitData={subChatModel}
                 chatActions={chatActions}
                 currentChatMessage={formData.currentChatMessage||""}
                 onChat={this.onChatBtn}
                 messageList={coreData[subChatModel.receiver.key]}
                 authUserID={getCurrentUserID(subChatModel.receiver.key)}   
                />
                <PageFullLoader status={preLoaderStatus}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authUser: state.authReducer.authUserProfileInfo,
        preLoaderStatus: state.coreUIReducer.preLoaderStatus,
        subChatModel: state.coreUIReducer.subChatModel,
        formData: state.coreReducer.formData,   
        socketOBj: state.coreReducer.socketIOOBj,
        coreData: state.coreReducer.apiDataList,
        chatList: state.coreUIReducer.chatList,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        coreUIActions: bindActionCreators(CoreUIActions, dispatch),       
        chatActions: bindActionCreators(ChatActions, dispatch),  
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainWrapper);
