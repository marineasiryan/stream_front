import React from "react";
import { useSelector } from "react-redux";
import useVideos from "./useVideos";

const AddPlaylist = ({ id }) => {
  const addedData = useSelector((state) => state.playlistid);
  const { addExistingPlaylistToPath } = useVideos();
  return (
    <button
      className="btn btn-header"
      onClick={() => addExistingPlaylistToPath(addedData, id)}
    >
      Add
    </button>
  );
};

export default AddPlaylist;
