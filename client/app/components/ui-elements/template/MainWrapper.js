import React, { Component } from "react";
import Header from "../common-elements/Header";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import {PageFullLoader,PageFooter} from "../common-elements/CommonElements";
import * as CoreUIActions from "../../../actions/common/CoreUIActions";

class MainWrapper extends Component {

    render() {
        let {preLoaderStatus,modelStatus} = this.props;
        return (
            <div className="div100">
                <div className="container pageContent">
                <Header/>
                {this.props.children}
                </div>
                <PageFooter/>
                <PageFullLoader status={preLoaderStatus}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        preLoaderStatus: state.coreUIReducer.preLoaderStatus,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        coreUIActions: bindActionCreators(CoreUIActions, dispatch),        
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainWrapper);
