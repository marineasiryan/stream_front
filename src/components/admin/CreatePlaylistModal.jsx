import React, { useState } from "react";
import { Button, message, Modal } from "antd";
import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import CustomInput from "../helper/CustomInput";
import { createPlayList } from "../../api/videos/video";
import addPhoto from "../../assets/images/download.png";
import useVideos from "./useVideos";
import { AddPlaylistSchema } from "../../schemas";

const CreatePlaylistModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { auth } = useSelector((state) => ({ ...state }));

  const [preview, setPreview] = useState(addPhoto);
  const [imgFile, setImageFile] = useState(null);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { getPlayList } = useVideos();
  const onSubmit = async (values, actions) => {
    try {
      const formdata = new FormData();
      formdata.append("title", values.title);
      formdata.append("description", values.description);
      formdata.append("topic", values.topic);
      imgFile && formdata.append("image", imgFile);
      await createPlayList(formdata, auth.token);
      // getAllPlayList();
      getPlayList();
      handleCancel();
    } catch (err) {
      message.error("Something went wrong", err.response);
    }

    actions.resetForm();
    setImageFile(null);
    setPreview(addPhoto);
  };

  const handleImageChange = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setImageFile(e.target.files[0]);
  };

  return (
    <>
      <Button className="btn-primary btn-text-primary" onClick={showModal}>
        Add Playlist
      </Button>
      <Modal
        open={isModalOpen}
        title="Create Playlist"
        footer={null}
        onCancel={handleCancel}
      >
        <Formik
          initialValues={{ title: "", description: "", topic: "" }}
          onSubmit={onSubmit}
          validationSchema={ AddPlaylistSchema}
        >
          <Form className="user_register_form" autoComplete={"off"}>
            <CustomInput name={"title"} type={"text"} placeholder={"Title"} />
            <CustomInput
              name={"description"}
              type={"text"}
              placeholder={"Description"}
            />
            <CustomInput name={"topic"} type={"text"} placeholder={"Topic"} />
            <label className="modal_image">
              <img src={preview} alt="preview_image" />
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
export default CreatePlaylistModal;
