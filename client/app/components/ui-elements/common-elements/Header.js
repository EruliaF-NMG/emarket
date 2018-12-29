import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
    
        this.state={
          mobileMenu:false,
          profileMenu:false
        }
      }

    render() {

        let {mobileMenu,profileMenu} =this.state;
        
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                
                <button className="navbar-toggler" type="button" onClick={()=>this.setState({mobileMenu:!mobileMenu})} >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${mobileMenu?"show":""}`} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>                        
                    </ul>

                    <div className={`form-inline my-2 my-lg-0 dropdown ${profileMenu?"show":""}`}>
                        <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" onClick={()=>this.setState({profileMenu:!profileMenu})} >
                            Dropdown
                        </span>
                        <div className={`dropdown-menu ${profileMenu?"show":""}`} aria-labelledby="navbarDropdown">
                            <Link to={"/profile"}>
                            <span className="dropdown-item">My Profile</span>                            
                            </Link>
                            <span className="dropdown-item">Logout</span>
                        </div>
                    </div>

                </div>
            </nav>
        );
    }
}

export default Header;