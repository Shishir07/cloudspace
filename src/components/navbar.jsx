import React from "react";
import Logo from "../components/cloudspacelogo.jpg"

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand-top">
          <div className="navbar-icons">
              <img className={"navbar-icon"} src={Logo}/>
          </div>
          <div className="navbar-gap"></div>
          <div className="navbar-login"></div>

      </div>
    </nav>
  );
};

export default NavBar;
