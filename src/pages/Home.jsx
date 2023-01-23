import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { parseJwt } from "../api/auth/login";
import Hero_section from "../layouts/hero_section/HeroSection";
import Main from "../layouts/main/Main";
import { message } from "antd";
import { getUserById } from "../api/user/User";

const Home = () => {
  const auth = useSelector((state) => state?.auth);
  const userData = auth?.token && parseJwt(auth?.token);
  const dispatch = useDispatch();
  const GetUserInfo = async () => {
    try {
      const res = await getUserById(userData?.id, auth?.token);
      //
      if (res.data) {
        window.localStorage.setItem("userInfo", JSON.stringify(res.data));
        dispatch({ type: "SAVE_USER_INFO", payload: res.data });
      }
    } catch (err) {
      message.error("sdfsdfsdf");
    }
  };
  useEffect(() => {
    auth && auth?.token && userData && GetUserInfo();
  }, []);

  return (
    <>
      {auth && auth.token ? (
        <>
          <Hero_section />
          <Main />
        </>
      ) : (
        <Hero_section />
      )}
    </>
  );
};

export default Home;
