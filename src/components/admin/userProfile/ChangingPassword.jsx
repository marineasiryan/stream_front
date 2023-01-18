import React, { useState } from "react";
import { Button, message, Modal } from "antd";
import { Formik, Form } from "formik";
// import { updatePassword } from "../../api/user/User";
import { useSelector } from "react-redux";
import PasswordInput from "../../helper/PasswordInput";
import { LockOutlined } from "@ant-design/icons";
import { updatePassword } from "../../../api/user/User";

const ChangingPassword = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const userId = useSelector((state) => state.userInfo);
  const id = userId?.id;
  const { auth } = useSelector((state) => ({ ...state }));

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (values, actions) => {
    console.log(values);
    try {
      const res = await updatePassword(values, id, auth.token);
      console.log("res dartaaaaaaaaa", res.data);
      message.success(res.data.message);
    } catch (err) {
      message.error("Something went wrong", err.response);
    }

    actions.resetForm();
  };

  return (
    <>
      <Button className="btn-primary btn-text-primary" onClick={showModal}>
        Change Password
      </Button>
      <Modal
        title="Change Password"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <Formik
          initialValues={{
            oldPass: "",
            newPass: "",
            confirmPass: "",
          }}
          onSubmit={onSubmit}
        >
          <Form className="user_register_form" autoComplete={"off"}>
            <PasswordInput
              prefix={<LockOutlined className="site-form-item-icon" />}
              name={"oldPass"}
              type={"password"}
              placeholder={"Old Password"}
            />
            <PasswordInput
              prefix={<LockOutlined className="site-form-item-icon" />}
              name={"newPass"}
              type={"password"}
              placeholder={"New Password"}
            />
            <PasswordInput
              prefix={<LockOutlined className="site-form-item-icon" />}
              name={"confirmPass"}
              type={"password"}
              placeholder={"Confirm Password"}
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

export default ChangingPassword;
