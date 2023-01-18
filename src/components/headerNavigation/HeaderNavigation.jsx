import React from "react";
import { Link } from "react-router-dom";

const HeaderNavigation = ({ isNavExpanded, setIsNavExpanded }) => {
  return (
    <nav>
      <ul className="header-nav" id={isNavExpanded ? "expanded" : ""}>
        <li className="header-nav-item">
          <Link
            className="text-primary text-primary-white"
            to="/"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            HOME
          </Link>
        </li>
        <li className="header-nav-item">
          <Link
            className="text-primary text-primary-white"
            to="/paths"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            PATHS
          </Link>
        </li>
    
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
