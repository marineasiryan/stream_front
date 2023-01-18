import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { v4 } from "uuid";
// import CardVideoOnPlaylist from "../../components/admin/CardVideoOnPlaylist";
import CreateVideoOnPlaylistModal from "../../components/admin/CreateVideoOnPlaylistModal";
import useVideos from "../../components/admin/useVideos";
import CardVideo from "../../components/admin/CardVideo";
import DeletePlaylistVideo from "../../components/admin/DeletePlaylistVideo";

const VideosOnPlaylist = () => {
  const { _getPlaylistVideos, deletePlaylistVideoHandler } = useVideos();
  const location = useLocation();
  const playlistVideos = useSelector((state) => state.playlistVideos);
  const id = location.pathname.split("playlist/")[1];
  console.log("playlistVideos",playlistVideos);

  useEffect(() => {
    _getPlaylistVideos(id);
  }, []);

  return (
    <div className="playlist_videos container">
      <h2 className="heading-secondary">Add new video</h2>
      <div className="playlist-videos-btn">
        <CreateVideoOnPlaylistModal />
        <Link
          to={`/admin/dashboard/playlist/${id}/existingVideo`}
          className="btn-primary btn-text-primary"
        >
          Select from existing
        </Link>
        <DeletePlaylistVideo id={id} />
      </div>
      <div className="playlist_video_cards ">
        {playlistVideos && playlistVideos.length ? (
          playlistVideos?.map((item) => {
            return (
              <CardVideo
                key={v4()}
                title={item.title}
                link={item.link.split("v=")}
                id={item._id}
                // deleteVideoHandler={() =>
                //   deletePlaylistVideoHandler(item._id, id)
                // }
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

export default VideosOnPlaylist;

