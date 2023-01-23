import React from "react";
import { useSelector } from "react-redux";
import useVideos from "./useVideos";

const DeleteVideo = ({id}) => {
  const { _deleteSelectedVideos } = useVideos();
  const deletedData = useSelector((state) => state.videoid);

  return (
    <button
      className="btn-primary btn-text-primary"
      onClick={() => _deleteSelectedVideos(deletedData, id)}
    >
      Delete
    </button>
  );
};

export default DeleteVideo;
