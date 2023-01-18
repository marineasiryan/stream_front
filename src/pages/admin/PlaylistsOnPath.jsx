import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { v4 } from "uuid";
import CardPlaylist from "../../components/admin/CardPlaylist";
import DeletePathPlaylist from "../../components/admin/DeletePathPlaylist";
// import CardPlaylistOnPath from "../../components/admin/CardPlaylistOnPath";
// import CreatePlaylistOnPathModal from "../../components/admin/CreatePlaylistOnPathModal ";
import useVideos from "../../components/admin/useVideos";
import ExistingPlaylistCard from "../../components/helper/cards/ExistingPlaylistCard";

const PlaylistOnPath = () => {
  const { _getPathPlaylists } = useVideos();
  const location = useLocation();
  const pathPlaylists = useSelector((state) => state.pathPlaylists);
  const id = location.pathname.split("path/")[1];
console.log("pathPlaylists",pathPlaylists);

  useEffect(() => {
    _getPathPlaylists(id);
    
  }, []);


  return (
    <div className="playlist_videos container">
      {/* <h2 className="heading-secondary">Add new playlist</h2> */}
      <div className="playlist-videos-btn">
        {/* <CreatePlaylistOnPathModal /> */}
        <Link
         to={`/admin/dashboard/path/${id}/existingPlaylists`}
          className="btn-primary btn-text-primary"
        >
          Add playlists 
        </Link>
      <DeletePathPlaylist id={id}/>

        {/* <button className="btn btn-header" 
        // onClick={()=>deletePlaylistVideosHandler(id)
        // }
        >Delete</button> */}
      </div>
      <div className="playlist_video_cards ">
        {pathPlaylists && pathPlaylists.length ? (
          pathPlaylists?.map((item) => {
            return (
              <ExistingPlaylistCard
                key={v4()}
                image={item.image}
                title={item.title}
                // link={item.link.split("v=")}
                id={item._id}
                // deleteVideoHandler={() =>
                //   deletePlaylistVideoHandler(item._id, id)
                // }
                editHandler={null}
              />
            );
          })
        ) : (
          <div>NOvuuu</div>
        )}
      </div>
    </div>
  );
};

export default PlaylistOnPath;
