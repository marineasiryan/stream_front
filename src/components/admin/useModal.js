import { useState } from "react";
import { useNavigate } from "react-router";

const useModal = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCancelVideo = () => {
    setIsModalOpen(false);
    navigate("/admin/dashboard/video/");
  };

  const handleCancelPlaylist = () => {
    setIsModalOpen(false);
    navigate("/admin/dashboard/playlist/");
  };

  const handleCancelPath = () => {
    setIsModalOpen(false);
    navigate("/admin/dashboard/path/");
  };

  return { isModalOpen, handleCancelVideo, handleCancelPlaylist, handleCancelPath };
};

export default useModal;
