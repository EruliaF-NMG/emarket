import React, { Component } from "react";
import Header from "../common-elements/Header";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
        chatActions.onSendFire(type,socketOBj,subChatModel.receiver,authUser,formData.currentChatMessage);
    }

    render() {
        let {
            preLoaderStatus,subChatModel,chatActions,
            formData,socketOBj
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
                />
                <PageFullLoader status={preLoaderStatus}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        preLoaderStatus: state.coreUIReducer.preLoaderStatus,
        subChatModel: state.coreUIReducer.subChatModel,
        formData: state.coreReducer.formData,   
        socketOBj: state.coreReducer.socketIOOBj,
        authUser: state.authReducer.authUserProfileInfo,  
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
