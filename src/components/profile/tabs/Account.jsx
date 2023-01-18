import React, { useEffect, useState } from "react";
import ChangingEmail from "../ChangingEmail";
import ChangingPassword from "../ChangingPassword";

import UserDataForm from "../UserDataForm";

const Account = () => {

  return (
    <>
      <div className="account ">
      
        <UserDataForm />
      </div>
      <div className="line-long"></div>
      <div className="changing_settings">
        <ChangingEmail />
        <ChangingPassword />
      </div>
    </>
  );
};

export default Account;
