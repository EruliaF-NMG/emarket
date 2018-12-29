import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { checkUser, getFromLocalStorage } from '../../helpers/common/ManageStorage';
import { authUserProfileInfoKey } from '../../config/Core';
import * as AuthenticationActions from '../../actions/auth/AuthActions';
import {setProfileKey} from '../../config/StateKeys';


export default function (WrappedComponent) {

    class Init extends Component {

        constructor() {
            super();
            this.state = {
                status: false
            }
            
        }

        componentDidMount() {
            const {
                isAuthenticated, authToken,
                profileInfo
            } = this.props;            

            if (isAuthenticated === true && profileInfo !== false) {
                this.setState({
                    status: true
                });
                
            } else {               
                this.connecToStore();
            }

        }

       

        connecToStore = async () => {

            const {
                authActions,
                isAuthenticated, authToken,
                profileInfo
            } = this.props;


            let currentAuthStatus = isAuthenticated;

            if (currentAuthStatus === false || authToken === null) {
                let userData = await checkUser();
                if (userData.status === true) {
                    currentAuthStatus = userData.status;
                    authActions.setCurrentAuthenticationStatus(userData.result, userData.status);
                }
            }

            if (currentAuthStatus === false) {

                this.setState({
                    status: true
                });
            } else {

                /// check profile info
                if (_.isEmpty(profileInfo)) {

                    let profileData = await getFromLocalStorage(authUserProfileInfoKey);
                    if (profileData === false || profileData === null) {
                        authActions.getCurrentUserInfo();
                    } else {
                        authActions.setToAuthReducer(setProfileKey, profileData);
                    }
                }

            }


        }

        componentWillReceiveProps(nextProps) {

            if (nextProps.isAuthenticated === true && nextProps.profileInfo !== false) {
                this.setState({
                    status: true
                });
            }

            if(nextProps.isAuthenticated === false && this.props.isAuthenticated===true){
                this.props.history.push('/login');
            }
        }



        render() {

            return (
                <div>
                    {
                        (this.state.status) ?
                            (<WrappedComponent {...this.props} />) : (
                                <div className="initLoader">
                                   loding...init
                                </div>
                                )
                    }
                </div>
            );
        }


    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.authReducer.isAuthenticated,
            authToken: state.authReducer.authToken,
            profileInfo: state.authReducer.authUserProfileInfo
        };
    }


    function mapDispatchToProps(dispatch) {
        return {
            authActions: bindActionCreators(AuthenticationActions, dispatch)
        };
    }

    return connect(
        mapStateToProps,
        mapDispatchToProps,
    )(Init);
}