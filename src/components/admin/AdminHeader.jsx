import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminHeader = () => {
  const params = useLocation();
  return (
    <div className="tabs">
      <ul>
        <li className="nav-item">
          <Link
            className={`nav-link text-primary text-primary--white ${
              params.pathname === "/admin/dashboard/playlist" && "active"
            }`}
            to="/admin/dashboard/playlist"
          >
            Playlist
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link  text-primary text-primary--white  ${
              params.pathname === "/admin/dashboard/video" && "active"
            }`}
            to="/admin/dashboard/video"
          >
            Video
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link  text-primary text-primary--white  ${
              params.pathname === "/admin/dashboard/user" && "active"
            }`}
            to="/admin/dashboard/user"
          >
            User
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link  text-primary text-primary--white  ${
              params.pathname === "/admin/dashboard/path" && "active"
            }`}
            to="/admin/dashboard/path"
          >
            Path
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminHeader;
