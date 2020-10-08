import React from "react";


const NavBar2 = ({active,handleNavigation}) => {

  const handleNavigations = (xyx) => {
      handleNavigation(xyx);
  }


  return (
    <nav className="navbar2">
      <div className="navbar-brand-left">
          <div className={active==="servers" ? "option-left-active" : "option-left"} onClick= {() => handleNavigations("servers")} >Servers</div>
          <div className={active=="databases" ? "option-left-active" : "option-left"} onClick={() => handleNavigations("databases")}>Databases</div>
          <div className={active=="backups" ? "option-left-active" : "option-left"} onClick= {() => handleNavigations("servers")}>Backups</div>
          <div className={active=="addons" ? "option-left-active" : "option-left"} onClick= {() => handleNavigations("servers")}>Add-On Storage</div>
          <div className={active=="cdn" ? "option-left-active" : "option-left"} onClick= {() => handleNavigations("servers")}>CDN</div>
          <div className={active=="monitoring" ? "option-left-active" : "option-left"} onClick= {() => handleNavigations("servers")}>Monitoring</div>
      </div>
    </nav>
  );
};

export default NavBar2;
