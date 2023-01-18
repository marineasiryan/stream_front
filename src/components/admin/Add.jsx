import React from "react";
import { useSelector } from "react-redux";
import useVideos from "./useVideos";

const Add = ({ id }) => {
  const addedData = useSelector((state) => state.videoid);
  const { addExistingVideoToPlaylist } = useVideos();
  return (
    <button
      className="btn btn-header"
      onClick={() => addExistingVideoToPlaylist(addedData, id)}
    >
      Add
    </button>
  );
};

export default Add;
