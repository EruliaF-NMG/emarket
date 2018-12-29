import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as authenticationActions from '../../actions/auth/AuthActions';

import Init from './Inits';



export default function (WrappedComponent) {

    class Authorized extends Component {

        constructor() {
            super();
            this.state={
                permissionsStatus:true
            }
            
        }


        componentDidMount() {
            
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
            return (
                <div>
                    {

                        (
                            (this.state.permissionsStatus===null) ?
                            (
                                <div className="initLoader">
                                   logding...
                                </div>
                            ):
                                (
                                    (this.state.permissionsStatus===true)?
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
    )(Authorized));

}