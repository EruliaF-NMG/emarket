import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as authenticationActions from '../../actions/auth/AuthActions';
import Init from './Inits';

export default function (WrappedComponent) {

    class Guest extends Component {

        constructor() {
            super();
        }



        componentWillMount() {
            const { history, isAuthenticated } = this.props;
            if (isAuthenticated === true) {
                history.push('/');
            }
        }



        componentWillReceiveProps(nextProps) {
            const { history, isAuthenticated } = this.props;
            if (isAuthenticated === true) {
                history.push('/');
            }
        }





        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.authReducer.isAuthenticated
        };
    }

    function mapDispatchToProps(dispatch) {
        return {
            authActions: bindActionCreators(authenticationActions, dispatch),
        };
    }



    return Init(connect(
        mapStateToProps,
        mapDispatchToProps
    )(Guest));

}