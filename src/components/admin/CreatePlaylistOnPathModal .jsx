// import React, { useState } from "react";
// import { Button, message, Modal, Select } from "antd";
// import { Formik, Form } from "formik";
// import { useDispatch, useSelector } from "react-redux";
// import CustomInput from "../helper/CustomInput";
// // import { createPlayList } from "../../api/videos/video";
// import useVideos from "./useVideos";
// import { AddPlaylistSchema, AddVideoSchema } from "../../schemas";
// import { useLocation } from "react-router";
// import { createPlayList } from "../../api/videos/video";
// import addPhoto from "../../assets/images/download.png";

// const CreatePlaylistOnPathModal = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const { auth } = useSelector((state) => ({ ...state }));
//   const location = useLocation();
//   const pathPlaylists = useSelector((state) => state.pathPlaylists);
//   const id = location.pathname.split("path/")[1];
//   const [preview, setPreview] = useState(addPhoto);
//   const [imgFile, setImageFile] = useState(null);

//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   const { _getPathPlaylists } = useVideos();

//   const onSubmit = async (values, actions) => {
//
//     try {
//       await createPlayList(
//         {
//           ...values,
//         },
//         auth.token
//       );
//       _getPathPlaylists(id);
//       handleCancel();
//     } catch (err) {
//       message.error("Something went wrongg", err.response);
//     }

//     actions.resetForm();
//     setImageFile(null);
//     setPreview(addPhoto);
//   };

//   const handleImageChange = (e) => {
//     setPreview(URL.createObjectURL(e.target.files[0]));
//     setImageFile(e.target.files[0]);
//   };

//   return (
//     <>
//       <Button className="btn-primary btn-text-primary" onClick={showModal}>
//         Create new playlist
//       </Button>
//       <Modal
//         open={isModalOpen}
//         title="Create Playlist on the Path"
//         footer={null}
//         onCancel={handleCancel}
//       >
//         <Formik
//           initialValues={{
//             title: "",
//             topic: "",
//             description: "",
//           }}
//           onSubmit={onSubmit}
//           validationSchema={AddPlaylistSchema}
//         >
//           <Form className="user_register_form" autoComplete={"off"}>
//             <CustomInput name={"title"} type={"text"} placeholder={"Title"} />
//             <CustomInput
//               name={"description"}
//               type={"text"}
//               placeholder={"Description"}
//             />
//             <CustomInput name={"topic"} type={"text"} placeholder={"Topic"} />
//             <label className="modal_image">
//               <img src={preview} alt="preview_image" />
//               <CustomInput
//                 type={"file"}
//                 name={"image"}
//                 onChange={handleImageChange}
//                 accept={"image/*"}
//                 hidden
//               />
//             </label>

//             <Button
//               className="btn-primary btn-text-primary"
//               htmlType="submit"
//               type="primary"
//             >
//               Save
//             </Button>
//           </Form>
//         </Formik>
//       </Modal>
//     </>
//   );
// };
// export default CreatePlaylistOnPathModal;
