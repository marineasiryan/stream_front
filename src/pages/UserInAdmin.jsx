import React from "react";
import { Outlet } from "react-router";
import UserHeader from "../components/admin/userProfile/UserHeader";
// import ProfileHeader from "../components/profile/ProfileHeader";

const UserInAdmin = () => {
  return (
    <div>
      <UserHeader />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserInAdmin;
