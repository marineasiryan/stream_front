import React from "react";
import { useSelector } from "react-redux";
import useVideos from "./useVideos";

const DeletePathPlaylist = ({ id }) => {
  const { deletePathPlaylistsHandler } = useVideos();
  const deletedData = useSelector((state) => state.playlistid);
console.log(deletedData);
  return (
    <button
      className="btn btn-header"
      onClick={() => deletePathPlaylistsHandler(deletedData, id)}
    >
      Delete
    </button>
  );
};

export default DeletePathPlaylist;
