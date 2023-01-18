import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const ProfileHeader = () => {
  const params = useLocation();
  
  const userInfo = useSelector((state) => state?.user);
  console.log(userInfo);

  return (
    <div className="tabs">
      <ul>
        <li className="nav-item">
          <Link
            className={`nav-link text-primary text-primary--white ${
              params.pathname === `/profile/account/${userInfo._id}` && "active"
            }`}
            to={`/profile/account/${userInfo._id}`}
          >
            Account
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link text-primary text-primary--white ${
              params.pathname === "/profile/history" && "active"
            }`}
            to="/profile/history"
          >
            History
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link text-primary text-primary--white ${
              params.pathname === "/profile/likedVideos" && "active"
            }`}
            to="/profile/likedVideos"
          >
            Liked Videos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileHeader;
