import React from "react";
import { useSelector } from "react-redux";
import useVideos from "./useVideos";

const DeletePathPlaylist = ({ id }) => {
  const { deletePathPlaylistsHandler } = useVideos();
  const deletedData = useSelector((state) => state.playlistid);
  return (
    <button
      className="btn-primary btn-text-primary"
      onClick={() => deletePathPlaylistsHandler(deletedData, id)}
    >
      Delete
    </button>
  );
};

export default DeletePathPlaylist;
