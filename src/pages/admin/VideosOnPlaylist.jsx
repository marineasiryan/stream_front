import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { v4 } from "uuid";
// import CardVideoOnPlaylist from "../../components/admin/CardVideoOnPlaylist";
import CreateVideoOnPlaylistModal from "../../components/admin/CreateVideoOnPlaylistModal";
import useVideos from "../../components/admin/useVideos";
import DeletePlaylistVideo from "../../components/admin/DeletePlaylistVideo";
import AdminHeader from "../../components/admin/AdminHeader";
import CardVideoOnPlaylist from "../../components/admin/CardVideoOnPlaylist";

const VideosOnPlaylist = () => {
  
  const { _getPlaylistVideos, _getPlaylistById } = useVideos();
  const location = useLocation();
  const id = location.pathname.split("playlist/")[1];

  const playlistVideos = useSelector((state) => state.playlistVideos);
  const playlist = useSelector((state) => state.playlistInfo);

  useEffect(() => {
    _getPlaylistVideos(id);
    _getPlaylistById(id);
  }, []);

  return (
    <div className="playlist_videos container">
      <AdminHeader />

      <h2 className="heading-secondary"> {playlist.title} playlist</h2>
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
              <CardVideoOnPlaylist
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
