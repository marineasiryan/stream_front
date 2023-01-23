import React, { memo, useEffect, useState } from "react";
import { Button, message, Modal, Select } from "antd";
import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import CustomInput from "../helper/CustomInput";
import { BiEdit } from "react-icons/bi";
import useModal from "./useModal";
import { getVideoById, updateVideoById } from "../../api/videos/video";
import { useLocation } from "react-router";
import { AddVideoSchema } from "../../schemas";

const EditVideoModal = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const location = useLocation();

  const [data, setData] = useState(null);

  const getVideo = async () => {
    try {
      const res = await getVideoById(
        location.pathname.split("edit/")[1],
        auth.token
      );
      setData(res.data);
    } catch (err) {
      message.error("Something went wrong!");
    }
  };



  
  const { isModalOpen, handleCancelVideo } = useModal();

  const onSubmit = async (actions) => {
    try {
      await updateVideoById(
        data,
        location.pathname.split("edit/")[1],
        auth.token
      );
      message.success("video is updated");
      handleCancelVideo();
    } catch (err) {
      message.error("Something went wrong!");
    }
    actions.resetForm();
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    
  };

  useEffect(() => {
    getVideo();
  }, []);
  return (
    <>
      <Modal
        open={isModalOpen}
        title="Edit Video"
        footer={null}
        onCancel={handleCancelVideo}
      >
        <Formik
          initialValues={{ ...data }}
          onSubmit={onSubmit}
          // validationSchema={AddVideoSchema}
        >
          {({ handleBlur, setFieldValue, values }) => (
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
              <CustomInput
                name={"link"}
                type={"text"}
                placeholder={"Link"}
                value={data?.link}
                onChange={handleChange}
              />
              <CustomInput
                name={"playlist"}
                type={"text"}
                placeholder={"Playlist"}
                value={data?.playlist}
                onChange={handleChange}
              />
              <Select
                value={data?.top}
                placeholder="Top"
                name={"top"}
                onChange={(value) => {
                  setFieldValue("top", value);
                }}
                onBlur={handleBlur}
                options={[
                  {
                    value: "true",
                    label: "true",
                  },
                  {
                    value: "false",
                    label: "false",
                  },
                ]}
              />

              <Select
                placeholder="Tags"
                name={"tags"}
                mode="tags"
                value={data?.tags}
                onChange={(value) => {
                  setFieldValue("tags", value);
                }}
                onBlur={handleBlur}
                tokenSeparators={[","]}
              />
              <Select
                placeholder="Materials"
                name={"materials"}
                mode="tags"
                value={data?.materials}
                onChange={(value) => {
                  setFieldValue("materials", value);
                }}
                onBlur={handleBlur}
                tokenSeparators={[","]}
              />

              <Button
                className="btn-primary btn-text-primary"
                htmlType="submit"
                type="primary"
              >
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default memo(EditVideoModal);
