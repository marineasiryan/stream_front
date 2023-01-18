import React, { useState } from "react";
import { Button, message, Modal, Select } from "antd";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../helper/CustomInput";
import { createVideo } from "../../api/videos/video";
import useVideos from "./useVideos";
import { AddVideoSchema } from "../../schemas";

const CreateVideoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { auth } = useSelector((state) => ({ ...state }));

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { getVideos } = useVideos();

  const onSubmit = async (values, actions) => {
    try {
      await createVideo(
        {
          ...values,
        },
        auth.token
      );

      getVideos();
      handleCancel();
    } catch (err) {
      message.error("Something went wrong", err.response);
    }

    actions.resetForm();
    setTags([]);
    setMaterials([]);
  };

  return (
    <>
      <Button className="btn-primary btn-text-primary" onClick={showModal}>
        Add new video
      </Button>
      <Modal
        open={isModalOpen}
        title="Create Video"
        footer={null}
        onCancel={handleCancel}
      >
        <Formik
          initialValues={{
            title: "",
            link: "",
            topic: "",
            description: "",
            playlist: "",
            top: false,
            tags: [],
            materials: [],
          }}
          onSubmit={onSubmit}
          validationSchema={AddVideoSchema}
        >
          {({ handleBlur, setFieldValue, values }) => (
            <Form className="user_register_form" autoComplete={"off"}>
              <CustomInput name={"title"} type={"text"} placeholder={"Title"} />
              <CustomInput
                name={"description"}
                type={"text"}
                placeholder={"Description"}
              />
              <CustomInput name={"topic"} type={"text"} placeholder={"Topic"} />
              <CustomInput name={"link"} type={"text"} placeholder={"Link"} />
              <CustomInput
                name={"playlist"}
                type={"text"}
                placeholder={"Playlist"}
              />
              <Select
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
                value={values.tags}
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
                value={values.materials}
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
export default CreateVideoModal;
