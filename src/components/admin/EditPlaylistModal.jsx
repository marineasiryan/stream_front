import React, { memo, useEffect, useState } from "react";
import { Button, message, Modal } from "antd";
import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import CustomInput from "../helper/CustomInput";
import { BiEdit } from "react-icons/bi";
import useModal from "./useModal";
import { getPlaylistById, updatePlaylistById } from "../../api/videos/video";
import { useLocation } from "react-router";
import { AddPlaylistSchema } from "../../schemas";

const EditPlaylistModal = () => {
  console.log("mta Edit playlist");
  const { auth } = useSelector((state) => ({ ...state }));
  const location = useLocation();

  const [preview, setPreview] = useState();
  console.log(preview);
  const [imgFile, setImageFile] = useState(null);
  const [data, setData] = useState(null);

  const getPlayList = async () => {
    try {
      const res = await getPlaylistById(
        location.pathname.split("edit/")[1],
        auth.token
      );
      console.log("playlist data", res.data);
      console.log("playlist data image", res.data.image);

      setPreview(res.data.image);
      delete res.data.image;
      setData(res.data);
    } catch (err) {
      message.error("Something went wrong!");
    }
  };
  const { isModalOpen, handleCancelPlaylist } = useModal();

  const onSubmit = async (actions) => {
    try {
      const formdata = new FormData();
      formdata.append("title", data.title);
      formdata.append("description", data.description);
      formdata.append("topic", data.topic);
      imgFile && imgFile.image && formdata.append("image", imgFile.image);
      await updatePlaylistById(
        formdata,
        location.pathname.split("edit/")[1],
        auth.token
      );

      message.success("playlist is updated");
      handleCancelPlaylist();
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
    getPlayList();
  }, []);
  return (
    <>
      <Modal
        open={isModalOpen}
        title="Edit Playlist"
        footer={null}
        onCancel={handleCancelPlaylist}
      >
        <Formik
          initialValues={{ ...data }}
          onSubmit={onSubmit}
          // validationSchema={AddPlaylistSchema}
        >
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
            <CustomInput
              name={"topic"}
              type={"text"}
              placeholder={"Topic"}
              value={data?.topic}
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

export default memo(EditPlaylistModal);
