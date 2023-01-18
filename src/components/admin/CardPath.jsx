import React, { memo } from "react";
import { Link } from "react-router-dom";
import { BiEdit, BiTrash } from "react-icons/bi";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import useModal from "./useModal";

const { confirm } = Modal;


const CardPath = ({deletePathHandler, id, title,  image}) => {
 
  const {showModal} = useModal();
  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this Path?",
      icon: <ExclamationCircleFilled />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deletePathHandler(id);
      },
    });
  };
  return (
    <>
      <div className="admin_card_video">
        <div className="card_img">
          <Link to={`/admin/dashboard/path/${id}`}>
            <img  src={image} alt="changeIt" />
          </Link>
        </div>
        <div className="admin_card_video-bottom">
          <p className="text-primary">{title}</p>
          <div className="changing_buttons">
           <Link to={`/admin/dashboard/path/edit/${id}`}>
            <button onClick={showModal}>
              <BiEdit />
              {/* <EditVideoModal /> */}
            </button>
            </Link>
            <button onClick={showDeleteConfirm}>
              <BiTrash />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(CardPath);
