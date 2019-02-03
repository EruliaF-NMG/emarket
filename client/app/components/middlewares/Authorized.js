import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as authenticationActions from '../../actions/auth/AuthActions';
import * as CoreActions from "../../actions/common/CoreActions";

import Init from './Inits';



export default function (WrappedComponent) {

    class Authorized extends Component {

        constructor() {
            super();
            this.state={
                permissionsStatus:null
            }
            
        }


        componentDidMount() {
            const {isAuthenticated,coreActions,authUser,socketOBj} = this.props;
            if (isAuthenticated === true) {
                if(!socketOBj){                   
                    coreActions.initWebSocket(authUser._id);
                }
            }
        }


        componentWillMount() {
            const { history, isAuthenticated} = this.props;
            if (isAuthenticated === false) {
                history.push('/login');
            }      

        }



        componentWillReceiveProps(nextProps) {
            const { history, isAuthenticated } = this.props;
            if (isAuthenticated === false) {
                history.push('/login');
            }
        }





        render() {

            let {permissionsStatus}=this.state;
            const {isAuthenticated,socketOBj} = this.props;

            if(isAuthenticated==true){
                if(socketOBj){
                permissionsStatus=true;
                }
            }else{
                permissionsStatus=false;
            }

            return (
                <div>
                    {

                        (
                            (permissionsStatus===null) ?
                            (
                                <div className="initLoader">
                                   logding...
                                </div>
                            ):
                                (
                                    (permissionsStatus===true)?
                                        (
                                            <WrappedComponent {...this.props} />
                                        ):
                                        (
                                            <div className={"accessDeniedDiv"}>
                                                <h3>Access Denied....!!</h3>
                                                <Link className={"pDiv"} to={'/home'}>
                                                    <p>Go To Home</p>
                                                </Link>
                                            </div>
                                        )
                                )
                        )

                    }
                </div>
            );
        }
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.authReducer.isAuthenticated,
            socketOBj: state.coreReducer.socketIOOBj,
            authUser: state.authReducer.authUserProfileInfo,
        };
    }

    function mapDispatchToProps(dispatch) {
        return {
            authActions: bindActionCreators(authenticationActions, dispatch),
            coreActions: bindActionCreators(CoreActions, dispatch)
        };
    }



    return Init(connect(
        mapStateToProps,
        mapDispatchToProps
    )(Authorized));

}