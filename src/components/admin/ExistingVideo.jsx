import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import ExistingVideoCard from "../helper/cards/ExistingVideoCard";
import useVideos from "./useVideos";
import Add from "../../components/admin/Add";
import { useLocation } from "react-router";

const ExistingVideo = () => {
  const { getVideos } = useVideos();
  const location = useLocation();
  const path = location.pathname.split("playlist/")[1];
  const id = path.split("/")[0];

  const videos = useSelector((state) => state.videos);
  console.log(videos);

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <>
      <Add id={id} />

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
    </>
  );
};

export default ExistingVideo;
