import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const UserHeader = () => {
  const params = useLocation();
  const userInfo = useSelector((state) => state?.user);

  return (
    <div className="tabs">
      <ul>
        <li className="nav-item">
          <Link
            className={`nav-link text-primary text-primary--white ${
              params.pathname === `/userInAdmin/user/${userInfo._id}` && "active"
            }`}
            to={`/userInAdmin/user/${userInfo._id}`}
          >
           User Account
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link text-primary text-primary--white ${
              params.pathname === "/userInAdmin/paymentHistory" && "active"
            }`}
            to="/userInAdmin/paymentHistory"
          >
           Payment History
          </Link>
        </li>
      
      </ul>
    </div>
  );
};

export default UserHeader;
