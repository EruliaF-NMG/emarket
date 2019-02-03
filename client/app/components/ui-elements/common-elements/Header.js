import React, { Component } from "react";
import {size} from "lodash";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import {siteLogo} from "../../../config/Assets";
import {getCurrentUserID} from "../../../helpers/common/ChatMessage";
import * as AuthActions from "../../../actions/auth/AuthActions";
import * as ChatActions from "../../../actions/common/ChatActions";


class Header extends Component {

    constructor(props) {
        super(props);
    
        this.state={
          mobileMenu:false,
          profileMenu:false,
          chatMenu:false
        }
      }

    render() {

        let {mobileMenu,profileMenu,chatMenu} =this.state;

        let {
            authActions,socketOBj,isAuthenticated,
            chatList,chatActions,coreData
        } =this.props;
        
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">               
                <Link className="navbar-brand" to={"/"}>
                    <img src={siteLogo} className="siteLogo" />
                </Link>
                
                <button className="navbar-toggler" type="button" onClick={()=>this.setState({mobileMenu:!mobileMenu})} >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${mobileMenu?"show":""}`} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">                      
                    </ul>
                    {
                        (isAuthenticated && size(chatList)>0)?(                   
                            <div className={`form-inline my-2 my-lg-0 dropdown ${chatMenu?"show":""}`}>
                                <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" onClick={()=>this.setState({chatMenu:!chatMenu})} >
                                    Massagers  <span className="badge badge-light">{size(chatList)}</span>
                                </span>
                                <div className={`dropdown-menu ${chatMenu?"show":""}`} aria-labelledby="navbarDropdown">
                                    {
                                        Object.keys(chatList).map((key)=>{
                                            return (
                                                    <span 
                                                        key={key}
                                                        className="dropdown-item"
                                                        onClick={()=>chatActions.manageChatPopup(
                                                            chatList[key],
                                                            getCurrentUserID(chatList[key]["key"]),
                                                            coreData[chatList[key]["key"]]
                                                          )                          
                                                        }
                                                    >
                                                        {chatList[key]["name"]}
                                                    </span>
                                                    )                                           
                                        })
                                    }                             
                                </div>
                            </div>
                        ):(null)
                    }

                    {
                        (isAuthenticated)?( 
                            <div className={`form-inline my-2 my-lg-0 dropdown ${profileMenu?"show":""}`}>
                                <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" onClick={()=>this.setState({profileMenu:!profileMenu})} >
                                    Dropdown
                                </span>
                                <div className={`dropdown-menu ${profileMenu?"show":""}`} aria-labelledby="navbarDropdown">
                                    <Link to={"/profile"}>
                                    <span className="dropdown-item">My Profile</span>                            
                                    </Link>
                                    <span 
                                        className="dropdown-item"
                                        onClick={()=>authActions.userLogout(socketOBj)} 
                                    >Logout
                                    </span>
                                </div>
                            </div>
                        ):(null)
                    }

                    

                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
      authUser: state.authReducer.authUserProfileInfo,
      socketOBj: state.coreReducer.socketIOOBj,
      isAuthenticated: state.authReducer.isAuthenticated,
      chatList: state.coreUIReducer.chatList,
      subChatModel: state.coreUIReducer.subChatModel,
      coreData: state.coreReducer.apiDataList
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(AuthActions, dispatch),
        chatActions: bindActionCreators(ChatActions, dispatch)
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header);
  