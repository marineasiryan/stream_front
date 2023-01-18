import React, { memo, useEffect, useState } from "react";
import { Button, message, Modal } from "antd";
import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import CustomInput from "../helper/CustomInput";
import { BiEdit } from "react-icons/bi";
import useModal from "./useModal";
import { getPathById, updatePathById } from "../../api/videos/video";
import { useLocation } from "react-router";

const EditPathModal = () => {
  console.log("mta Edit path");
  const { auth } = useSelector((state) => ({ ...state }));
  const location = useLocation();

  const [preview, setPreview] = useState();
  console.log(preview);
  const [imgFile, setImageFile] = useState(null);
  const [data, setData] = useState(null);

  const getPath = async () => {
    try {
      const res = await getPathById(
        location.pathname.split("edit/")[1],
        auth.token
        
      );
      console.log("path data", res.data);

      setPreview(res.data.image);
      delete res.data.image;
      setData(res.data);
    } catch (err) {
      message.error("Something went wrong!");
    }
  };
  const { isModalOpen, handleCancelPath } = useModal();

  const onSubmit = async (actions) => {
    try {
      const formdata = new FormData();
      formdata.append("title", data.title);
      formdata.append("description", data.description);
      imgFile && imgFile.image && formdata.append("image", imgFile.image);
      await updatePathById(
        formdata,
        location.pathname.split("edit/")[1],
        auth.token
      );

      message.success("playlist is updated");
      handleCancelPath();
    } catch (err) {
      message.error("Something went wrong!");
    }
    actions.resetForm();
    setImageFile(null);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImageFile({ image: e.target.files[0] });
  };

  useEffect(() => {
    getPath();
  }, []);
  return (
    <>
      <Modal
        open={isModalOpen}
        title="Edit Path"
        footer={null}
        onCancel={handleCancelPath}
      >
        <Formik initialValues={{ ...data }} onSubmit={onSubmit}>
          <Form className="user_register_form" autoComplete={"off"}>
            <CustomInput
              name={"title"}
              type={"text"}
              placeholder={"Title"}
              value={data?.title}
              onChange={handleChange}
            />
            <CustomInput
              name={"description"}
              type={"text"}
              placeholder={"Description"}
              value={data?.description}
              onChange={handleChange}
            />
        
            <label className="modal_image">
              <img src={preview} alt="Playlist" />
              <CustomInput
                type={"file"}
                name={"image"}
                onChange={handleImageChange}
                accept={"image/*"}
                hidden
              />
            </label>

            <Button
              className="btn-primary btn-text-primary"
              htmlType="submit"
              type="primary"
            >
              Save
            </Button>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};

export default memo(EditPathModal);
