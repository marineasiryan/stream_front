import React from "react";
import { Outlet } from "react-router";
import AdminHeader from "../../components/admin/AdminHeader";

const Admin = () => {
  return (
    <>
      <AdminHeader />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Admin;
