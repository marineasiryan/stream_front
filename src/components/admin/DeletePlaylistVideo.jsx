import React from "react";
import { useSelector } from "react-redux";
import useVideos from "./useVideos";

const DeletePlaylistVideo = ({ id }) => {
  const { deletePlaylistVideosHandler } = useVideos();
  const deletedData = useSelector((state) => state.videoid);
  return (
    <button
      className="btn-primary btn-text-primary"
      onClick={() => deletePlaylistVideosHandler(deletedData, id)}
    >
      Delete
    </button>
  );
};

export default DeletePlaylistVideo;
