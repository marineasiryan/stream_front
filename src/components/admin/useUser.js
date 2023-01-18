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

  const userCurrentData = async () => {
    try {
      const res = await getUserById(params.id, token);
      setUserCurData(res.data);
      dispatch({
        type: "SAVE_USER_INFO",
        payload: res.data,
      });
      setPreview(
        res.data.image
          ? `${import.meta.env.VITE_APP_API}/image/${res.data.image}`
          : "http://via.placeholder.com/300?text=A.S"
      );
      delete res.data.image;
    } catch (err) {
      message.error("Somthing went wrong", err.response);
    }
  };

  return {
    _getUsers,
    userCurrentData,
  };
};

export default useUser;
