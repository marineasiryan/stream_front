import React, { useEffect } from "react";
import SignUpForm from "../../../components/signUpforms/SignUpForm";
import { Link, useLocation } from "react-router-dom";
import useUser from "../../profile/useUser";
import SingleUserCard from "../../helper/cards/SingleUserCard";
import { useSelector } from "react-redux";
import { v4 } from "uuid";

const AddUser = () => {
  const { _getUsers } = useUser();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    _getUsers();
  }, []);
  return (
    <div className="admin_user container">
      <Link
        to={`/admin/dashboard/user/register`}
        className=" btn-addUser btn-primary btn-text-primary"
      >
        Add new user
      </Link>

      <div className="singleUserCards ">
        {users && users.length ? (
          users?.map((item) => {
            return (
              <SingleUserCard
                key={v4()}
                id={item._id}
                firstName={item.firstName}
                email={item.email}
              />
            );
          })
        ) : (
          <div>No</div>
        )}
      </div>
    </div>
  );
};

export default AddUser;
