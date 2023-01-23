import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import ExistingVideoCard from "../helper/cards/ExistingVideoCard";
import useVideos from "./useVideos";
import Add from "../../components/admin/Add";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const ExistingVideo = () => {
  const { getVideos,_getPlaylistById } = useVideos();
  const location = useLocation();
  const path = location.pathname.split("playlist/")[1];
  const id = path.split("/")[0];

  const videos = useSelector((state) => state.videos);

  const playlist = useSelector((state) => state.playlistInfo);

  
  useEffect(() => {
    getVideos();
    _getPlaylistById(id);

  }, []);

  return (
    <div className="admin_videos container">
     <h2 className="heading-secondary">Select videos to add {playlist.title} playlist</h2>
      <Link to={`/admin/dashboard/playlist/${id}`} className="btn-addVideo"><Add id={id} /> </Link>

      <div className="existing_video">
        {videos && videos.length ? (
          videos?.map((item) => {
            return (
              <ExistingVideoCard
                key={v4()}
                title={item.title}
                link={item.link.split("v=")}
                id={item._id}
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

export default ExistingVideo;
