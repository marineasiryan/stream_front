import React from "react";
import { Outlet } from "react-router";
import ProfileHeader from "../components/profile/ProfileHeader";

const Profile = () => {
  return (
    <div>
      <ProfileHeader />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
