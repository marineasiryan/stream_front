import { message } from "antd";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getUsers, getUserById } from "../../api/user/User";

const useUser = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state?.auth);
  const params = useParams();

  const _getUsers = async () => {
    try {
      const res = await getUsers(auth.token);
      dispatch({
        type: "SET_ALL_USERS",
        payload: res.data,
      });
    } catch (err) {
      message.error(err.message);
    }
  };



  return {
    _getUsers,
  };
};

export default useUser;
