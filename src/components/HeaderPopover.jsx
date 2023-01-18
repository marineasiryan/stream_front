import React from "react";
import { Popover } from "antd";
import { BiUserCircle, BiHistory, BiHeart, BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const User_Account = () => {
  const userInfo = useSelector((state) => state?.user);
  // console.log("user info", userInfo);

  // const userCurData = userInfo?.user;
// console.log("userCurData", userInfo);
  const dispatch = useDispatch();

  const logOut = (e) => {
    e.preventDefault;
    dispatch({
      type: "SIGN_OUT",
      payload: null,
    });
    window.localStorage.clear();
  };
  const text = (
    <div className="user_info">
      <div className="user_info-image">
        <Link to={`/profile/account/${userInfo?._id}`}>
          <img src="https://www.blexar.com/avatar.png" />
        </Link>
      </div>
      <div className="user_info-text">
        <Link
          className="text-secondary text-secondary--white"
          to={`/profile/account/${userInfo?._id}`}
        >
          {userInfo?.firstName}
          <br/>
          {userInfo?.lastName}
        </Link>
      </div>
    </div>
  );

  const content = (
    <div className="user_profil">
      <Link className="text-tertiary text-tertiary--gray" to="/profile/history">
        <span>
          <BiHistory />
        </span>
        History
      </Link>
      <Link className="text-tertiary text-tertiary--gray" to="profile/likedVideos">
        <span>
          <BiHeart />
        </span>
        Liked videos
      </Link>

      <div onClick={logOut} className="log_out text-tertiary text-tertiary--gray">
        <span>
          <BiLogOut />
        </span>
        Sing out
      </div>
    </div>
  );

  return (
    <div className="_popover">
      <Popover
        placement="bottomRight"
        title={text}
        content={content}
        trigger="click"
      >
        <BiUserCircle />
      </Popover>
    </div>
  );
};

export default User_Account;
