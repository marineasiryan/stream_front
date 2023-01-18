import React, { useEffect } from "react";
import CardVideo from "../CardVideo";
import { v4 } from "uuid";
import CreateVideoModal from "../CreateVideoModal";
import { useSelector } from "react-redux";
import useVideos from "../useVideos";
import { useLocation } from "react-router";
import DeleteVideo from "../DeleteVideo";

const AddVideo = () => {
  const { getVideos, deleteVideoHandler } = useVideos();
  
  const videos = useSelector((state) => state.videos);

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="admin_video container">
      <CreateVideoModal />
      <DeleteVideo  />
      <div className="admin_playlist_cards ">
        {videos && videos.length ? (
          videos?.map((item) => {
            return (
              <CardVideo
                key={v4()}
                title={item.title}
                link={item.link.split("v=")}
                id={item._id}
                deleteVideoHandler={deleteVideoHandler}
                editHandler={null}
              />
            );
          })
        ) : (
          <div>NOvu</div>
        )}
      </div>
      {/* .split("v=") */}
    </div>
  );
};

export default AddVideo;
