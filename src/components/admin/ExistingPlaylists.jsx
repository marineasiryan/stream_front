import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import useVideos from "./useVideos";
import { useLocation } from "react-router";
import ExistingPlaylistCard from "../helper/cards/ExistingPlaylistCard";
import AddPlaylist from "./AddPlaylist";
import { Link } from "react-router-dom";

const ExistingPlaylists = () => {
  const { getPlayList } = useVideos();
  const playlist = useSelector((state) => state.playlist);
  const location = useLocation();
  const path = location.pathname.split("path/")[1];
  const id = path.split("/")[0];

  const pathInfo = useSelector((state) => state.pathInfo);
  console.log("pathInfo",pathInfo);

  useEffect(() => {
    getPlayList();
  }, []);

  return (
    <div className="admin_videos container">
      <h2 className="heading-secondary">Select playlists to add {pathInfo.title} path</h2>
      <Link to={`/admin/dashboard/path/${id}`} className="btn-addVideo"><AddPlaylist id={id} /> </Link>
      {/* <AddPlaylist id={id} /> */}
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
    </div>
  );
};

export default ExistingPlaylists;
