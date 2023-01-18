// import React, { memo, useCallback } from "react";
// import { Link } from "react-router-dom";
// import { BiEdit, BiTrash } from "react-icons/bi";
// import { ExclamationCircleFilled } from "@ant-design/icons";
// import { Modal } from "antd";
// import useModal from "./useModal";
// import { useDispatch } from "react-redux";

// const { confirm } = Modal;

// const CardPlaylistOnPath = ({ deletePlaylistHandler, id, title }) => {
//   const dispatch = useDispatch();
//   const onChange = useCallback((e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       dispatch({
//         type: "SET_VIDEO_ID",
//         payload: value,
//       });
//     } else {
//       dispatch({
//         type: "DELETE_VIDEO_ID",
//         payload: value,
//       });
//     }
//   }, []);

//   const { showModal } = useModal();
//   const showDeleteConfirm = () => {
//     confirm({
//       title: "Are you sure delete this Playlist?",
//       icon: <ExclamationCircleFilled />,
//       okText: "Yes",
//       okType: "danger",
//       cancelText: "No",
//       onOk() {
//         deletePlaylistHandler(id);
//       },
//     });
//   };
//   return (
//     <>
//       <div className="admin_card_video">
//         <div className="card_img">
//           {/* <Link to={"/"}>
//             <img
//               src={`https://i3.ytimg.com/vi/${link[1]}/maxresdefault.jpg`}
//               alt="image"
//             />
//           </Link> */}
//         </div>
//         <div className="admin_card_video-bottom">
//           <p className="text-primary">{title}</p>
//           <div className="changing_buttons">
//             <Link to={`/admin/dashboard/playlist/edit/${id}`}>
//               <button onClick={showModal}>
//                 <BiEdit />
//               </button>
//             </Link>

//             <button onClick={showDeleteConfirm}>
//               <BiTrash />
//             </button>
//             <input
//               id={id}
//               type="checkbox"
//               value={id || undefined}
//               onChange={(e) => onChange(e)}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default memo(CardPlaylistOnPath);
