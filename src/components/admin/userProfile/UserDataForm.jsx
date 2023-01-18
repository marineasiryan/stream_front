import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { getUserById, updateUser } from "../../../api/user/User";
import { useParams } from "react-router";

const UserDataForm = () => {
  const auth = useSelector((state) => state?.auth);
  const token = auth?.token;
  const userInfo = useSelector((state) => state?.user);
  // console.log("userInfo", userInfo);
  const dispatch = useDispatch();
  const params = useParams();

  const [userCurData, setUserCurData] = useState(userInfo);
  const [userImage, setUserImage] = useState(undefined);
  const [removeImg, setRemoveImg] = useState(false);
  const [preview, setPreview] = useState(
    userInfo.image
      ? `${userInfo.image}`
      : "http://via.placeholder.com/300?text=A.S"
  );
  const userCurrentData = async () => {
    try {
      console.log("user cur data", userCurData);
      const res = await getUserById(params.id, token);
      if (res.data) {
        setUserCurData(res.data);
        dispatch({
          type: "SAVE_USER_INFO",
          payload: res.data,
        });
        setPreview(
          res.data.image
            ? res.data.image
            : "http://via.placeholder.com/300?text=A.S"
        );
      }
    } catch (err) {
      message.error(err.response.data.message);
    }
  };

  const handleImageChange = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setUserImage({ image: e.target.files[0] });
  };

  const handleImageDelete = (e) => {
    setRemoveImg(true);
    setPreview("http://via.placeholder.com/300?text=A.S");
    setUserImage(undefined);
  };

  const onChange = (e) => {
    setUserCurData({ ...userCurData, [e.target.name]: e.target.value });
  };

  const changeHandler = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("firstName", userCurData.firstName);
      formdata.append("lastName", userCurData.lastName);
      formdata.append("phone", phone.value);
      formdata.append("email", userCurData.email);
      formdata.append("password", userCurData.password);
      // formdata.append("activate",userCurData.isActive);
      removeImg && formdata.append("image", "delete");
      userImage !== undefined && formdata.append("image", userImage?.image);

      await updateUser(formdata, params.id, token);
      message.success("Your changes have been successfully saved");
    } catch (err) {
      message.error(err.message);
    }
  };

  useEffect(() => {
    setRemoveImg(false);
    setPreview(null);
    userCurrentData();
  }, []);

  return (
    <div className="userInadmin-form">
      <div className="userInadmin-form-left_sec">
        <div className="img_part">
          <div className="pic">
            <img src={preview} alt="preview_image" />
          </div>
          <label className="btn btn-secondary btn-text-primary">
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
              hidden
            />
            Change
          </label>

          <label className="btn btn-secondary btn-text-primary">
            <input type="button" onClick={handleImageDelete} hidden />
            Delete
          </label>
        </div>
      </div>
      <div className="userInadmin-form-right_sec">
        {userCurData && (
          <form
            className="userInadmin-form-right_sec-form"
            onSubmit={changeHandler}
          >
            <div className="form_item">
              <label htmlFor="firstName" className="label text-primary">
                First Name
              </label>
              <input
                className="input input-max"
                type="text"
                id="firstName"
                name="firstName"
                value={userCurData.firstName || ""}
                onChange={onChange}
                placeholder={"Firstname"}
              />
            </div>
            <div className="form_item">
              <label htmlFor="lastName" className="label text-primary">
                Last Name
              </label>

              <input
                className="input input-max"
                type="text"
                id="lastName"
                name="lastName"
                value={userCurData.lastName || ""}
                onChange={onChange}
                placeholder={"LastName"}
              />
            </div>
            {/* <div className="form_item">
              <label htmlFor="email" className="label text-primary">
                Email Address
              </label>
              <input
                className="input input-max"
                type="email"
                id="email"
                name="email"
                value={userCurData.email || ""}
                placeholder={"Email"}
                onChange={onChange}
              />
            </div> */}

            {/* <div className="form_item">
              <label htmlFor="teamNameNumber" className="label text-primary">
                Team Name / Number
              </label>
              <input
                className="input input-max"
                type="text"
                id="teamNameNumber"
                name="teamNameNumber"
                value={userCurData.teamNameNumber || ""}
                onChange={onChange}
                placeholder={"teamNameNumber"}
              />
            </div> */}
            <div className="form_item">
              <label htmlFor="phone" className="label text-primary">
                Phone Number
              </label>
              <input
                className="input input-max"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                value={userCurData.phone || ""}
                onChange={onChange}
              />
            </div>
            <div className="form_item">
              <label htmlFor="email" className="label text-primary">
                Email Address
              </label>
              <input
                className="input input-max"
                type="email"
                id="email"
                name="email"
                value={userCurData.email || ""}
                placeholder={"Email"}
                onChange={onChange}
              />
            </div>
            <div className="form_item">
              <label htmlFor="password" className="label text-primary">
                Password
              </label>
              <input
                className="input input-max"
                type="password"
                id="password"
                name="password"
                placeholder="New password"
                onChange={onChange}
              />
            </div>

            <button className="btn-primary btn-text-primary" type="submit">
              Save
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserDataForm;
