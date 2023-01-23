import React, { useState } from "react";
import { Button, message, Modal } from "antd";
import { Formik, Form } from "formik";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CustomInput from "../../components/helper/CustomInput";
import PasswordInput from "../helper/PasswordInput";

import { LockOutlined } from "@ant-design/icons";
import { updateEmail } from "../../api/user/User";

const ChangingEmail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = useSelector((state) => state.user);
  const id = userId?._id;
  const { auth } = useSelector((state) => ({ ...state }));

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [searchParams] = useSearchParams();
  const hash = searchParams.get("hash");

  const onSubmit = async (values, actions) => {
    try {
      const res = await updateEmail(values, id, auth.token);
      message.success(res.data.message);
    } catch (err) {
      message.error("Something went wrong", err.response);
    }

    actions.resetForm();
  };

  return (
    <>
      <Button className="btn-primary btn-text-primary" onClick={showModal}>
        Change Email
      </Button>
      <Modal
        open={isModalOpen}
        title="Change Email Address"
        footer={null}
        onCancel={handleCancel}
      >
        <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          onSubmit={onSubmit}
        >
          <Form className="user_register_form" autoComplete={"off"}>
            <PasswordInput
              prefix={<LockOutlined className="site-form-item-icon" />}
              name={"password"}
              type={"password"}
              placeholder={"Password"}
            />
            <CustomInput
              name={"email"}
              type={"email"}
              placeholder={"New Email"}
            />

            <Button
              className="btn-primary btn-text-primary"
              htmlType="submit"
              type="primary"
            >
              {" "}
              Save{" "}
            </Button>
          </Form>
        </Formik>
      </Modal>
    </>
  );
};
export default ChangingEmail;
