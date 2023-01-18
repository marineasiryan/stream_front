import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import ChangingEmail from "../ChangingEmail";
import ChangingPassword from "../ChangingPassword";

import UserDataForm from "../UserDataForm";

const UserAccount = () => {
  const userInfo = useSelector((state) => state?.user);
  return (
    <>
      <UserDataForm />

      {/* <div className="changing_settings"> */}
        {/* <ChangingEmail /> */}
        {/* <ChangingPassword /> */}
      {/* </div> */}
      <div className="line-long"></div>

      <div className="user-unchanged-datas">
        <p className={userInfo.isActive == "1" ? "activated" : "notActivated"}>
          {userInfo.isActive == "1" ? "Activated" : "Not activated"}
        </p>
        <p className={userInfo.archived == true ? "archived" : "notArchived"}>
          {userInfo.archived == true ? "Archived" : "Not Archived"}
        </p>
      </div>
    </>
  );
};

export default UserAccount;
