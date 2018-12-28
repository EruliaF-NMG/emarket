import React, { Component } from "react";
import Header from "../common-elements/Header";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import {PageFullLoader} from "../common-elements/CommonElements";
import * as CoreUIActions from "../../../actions/common/CoreUIActions";

class MainWrapper extends Component {

    render() {
        let {preLoaderStatus} = this.props;
        return (
            <div className="div100">
                <div className="container">
                <Header/>
                {this.props.children}
                </div>
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
