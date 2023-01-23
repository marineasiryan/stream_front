import React from "react";
import { useSelector } from "react-redux";
import useVideos from "./useVideos";

const AddPlaylist = ({ id }) => {
  const addedData = useSelector((state) => state.playlistid);
  const { addExistingPlaylistToPath } = useVideos();
  return (
    <button
      className="btn-primary btn-text-primary"
      onClick={() => addExistingPlaylistToPath(addedData, id)}
    >
      Add
    </button>
  );
};

export default AddPlaylist;
