import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import useVideos from "./useVideos";
import { useLocation } from "react-router";
import ExistingPlaylistCard from "../helper/cards/ExistingPlaylistCard";
import AddPlaylist from "./AddPlaylist";

const ExistingPlaylists = () => {
  const { getPlayList } = useVideos();
  const playlist = useSelector((state) => state.playlist);
  const location = useLocation();
  const path = location.pathname.split("path/")[1];
  const id = path.split("/")[0];
console.log("playlist id", id);

  useEffect(() => {
    getPlayList();
  }, []);

  return (
    <>
      <AddPlaylist id={id} />
      {/* <DeletePlaylistVideo/> */}

      <div className="existing_video">
        {playlist && playlist.length ? (
          playlist?.map((item) => {
            return (
              <ExistingPlaylistCard
              key={v4()}
              id={item._id}
              image={item.image}
              title={item.title}
              // deletePlaylistHandler={deletePlaylistHandler}
              editHandler={null}
            />
           
            );
          })
        ) : (
          <div>NOvu</div>
        )}
      </div>
    </>
  );
};

export default ExistingPlaylists;
