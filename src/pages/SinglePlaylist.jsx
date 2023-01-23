import React from "react";
import { v4 } from "uuid";
// import MainCard from "../components/helper/cards/MainCard";
import { Link, useLocation } from "react-router-dom";
import { BiPlay } from "react-icons/bi";
import { useSelector } from "react-redux";
import useVideos from "../components/admin/useVideos";
import { useEffect } from "react";
import PlaylistVideosCard from "../components/helper/cards/PlaylistVideosCard";

const SinglePlaylist = () => {
  const { _getPlaylistVideos, _getPlaylistById } = useVideos();
  const location = useLocation();

  const playlistVideos = useSelector((state) => state.playlistVideos);
  const playlist = useSelector((state) => state.playlistInfo);
  const id = location.pathname.split("singlePlaylist/")[1];
  //

  useEffect(() => {
    _getPlaylistVideos(id);
    _getPlaylistById(id);
  }, []);

  return (
    <>
      <div className="backgroung-image">
        <Link to={`/videoPlayer/${id}`} className="btn-hero btn-hero--secondary btn-text-primary">
          <BiPlay /> Play All
        </Link>
        <img src={playlist.image} />
      </div>

      <div className="single-playlist">
        <h2 className=" heading-primary heading-primary--pink">
          {playlist.title}
        </h2>
        <div className="description">
          <p className="text-secondary text-secondary--white">
            {playlist.description}
          </p>
        </div>
        {/* <Description /> */}
        <div className="single-playlist-cards">
          {playlistVideos && playlistVideos.length ? (
            playlistVideos?.map((item) => {
              return (
                <PlaylistVideosCard
                id={item._id}
                  key={v4()}
                  title={item.title}
                  link={item.link.split("v=")}
                  videoLink={item.link}
                />
              );
            })
          ) : (
            <div>No Video!</div>
          )}
        </div>
      </div>
    </>
  );
};

export default SinglePlaylist;
