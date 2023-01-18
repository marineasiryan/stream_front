import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import CardPlaylist from "../CardPlaylist";
import useVideos from "../useVideos";
import CreatePlaylistModal from "../CreatePlaylistModal";

const AddPlaylist = () => {
  const { getPlayList, deletePlaylistHandler } = useVideos();
  const playlist = useSelector((state) => state.playlist);

  useEffect(() => {
    getPlayList();
  }, []);

  return (
    <div className="admin_playlist container">
      <CreatePlaylistModal />
      <div className="admin_playlist_cards ">
        {playlist && playlist.length ? (
          playlist?.map((item) => {
            return (
              <CardPlaylist
                key={v4()}
                id={item._id}
                image={item.image}
                title={item.title}
                deletePlaylistHandler={deletePlaylistHandler}
                editHandler={null}
              />
            );
          })
        ) : (
          <div>No</div>
        )}
      </div>
    </div>
  );
};

export default AddPlaylist;
