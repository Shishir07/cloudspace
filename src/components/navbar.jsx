import React, {useState, useEffect, useContext} from 'react';
import Logo from "../components/cloudspacelogo.jpg"
import {store} from  '../store';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import DropDown from '../components/DropDown'


const NavBar = (props) => {

    const [isAuthenticated, setAuthenticated] = useState(true);

    const [showDropDown, setDropDown] = useState(false);

    const [currentUser, setUser] = useState({"firstName" : "Shishir"})

    const handleLogout  = () => {
        localStorage.setItem('cloudspace-auth-token','')
        setAuthenticated(false);
        setDropDown(false)
    };

    return (
        <div className="navbar-top">
              <div className="navbar-icons">
                  <img className={"navbar-icon"} src={Logo}/>
              </div>
              <div className="navbar-gap"></div>
              <div className="navbar-right">
                  {(isAuthenticated)
                      ?(  <React.Fragment>
                          <div className={"navbar-login"}>Hello Shishir!</div>
                          <div className={"navbar-login"} onClick={handleLogout}>Logout</div>
                      </React.Fragment>)
                      :null }
              </div>
        </div>
    );
};

export default NavBar;
