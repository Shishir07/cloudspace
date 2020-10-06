import React from "react";

// Stateless Functional Component

const NavBar2 = ({ totalCounters }) => {
  return (
    <nav className="navbar2">
      <div className="navbar-brand-left">
          <div className="option-left-active">Servers</div>
          <div className="option-left">Databases</div>
          <div className="option-left">Backups</div>
          <div className="option-left">Add-On Storage</div>
          <div className="option-left">CDN</div>
          <div className="option-left">Monitoring</div>
      </div>
    </nav>
  );
};

export default NavBar2;
