import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

const SingleUserCard = ({ firstName, email, id }) => {
  const userInfo = useSelector((state) => state?.user);
  // const userCurData = userInfo?.user;

  //

  return (
    <>
      <Link to={`/userInAdmin/user/${id}`} className="user_card ">
        <p className="text-primary ">{firstName}</p>
        <p className="text-primary ">{email}</p>
      </Link>
    </>
  );
};

export default SingleUserCard;
