import React, { Component } from "react";
import Header from "../common-elements/Header";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getValue} from "../../../helpers/common/CommonMethods";
import {PageFullLoader,PageFooter} from "../common-elements/CommonElements";
import * as CoreUIActions from "../../../actions/common/CoreUIActions";
import * as ChatActions from "../../../actions/common/ChatActions";

class MainWrapper extends Component {

    constructor() {
        super();
    }

    onChatBtn=(type)=>{
        let {
            subChatModel,chatActions,formData,
            socketOBj,authUser
        } = this.props;
        chatActions.onSendFire(type,socketOBj,subChatModel.receiver,authUser,formData.currentChatMessage,{sender:"user",receiver:"shop"});
    }

    render() {
        let {
            preLoaderStatus,subChatModel,chatActions,
            formData,coreData,authUser,socketOBj
        } = this.props;

        socketOBj.on('receive_message', (msg)=>{
            chatActions.setChatMessageToStore(msg,coreData[(authUser._id+"_"+subChatModel.receiver.id)],(authUser._id+"_"+subChatModel.receiver.id))
        });

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
                 messageList={coreData[(authUser._id+"_"+getValue(subChatModel,"receiver.id",""))]}
                 authUser={authUser}   
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
        authUser: state.authReducer.authUserProfileInfo,  
        coreData: state.coreReducer.apiDataList
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
