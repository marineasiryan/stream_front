import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const PlaylistVideosCard = ({
  id,
  title,
  link,
  videoLink,
  description,
  isPlaylist,
  playlistId,
  topic,
  materials,
}) => {
  let thumbnail;
  link ? (thumbnail = link[1].slice(0, 11)) : "";



  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <Link to={`/videoPlayer/${id}`} className="card-img">
          <img
            src={`https://i3.ytimg.com/vi/${thumbnail}/maxresdefault.jpg`}
            alt="lesson_video"
            width={"100%"}
            onClick={() => {
              dispatch({
                type: "SET_VIDEO_LINK",
                payload: {
                  id: id,
                  videoLink: videoLink,
                  title: title,
                  description: description,
                  isPlaylist: true,
                  topic: topic,
                  materials: materials,
                },
              });
              const data = {
                id: id,
                videoLink: videoLink,
                title: title,
                description: description,
                isPlaylist: true,
                topic: topic,
                materials: materials,
              };
              localStorage.setItem("videoData", JSON.stringify(data));
            }}
          />
        </Link>
        <div className="card-description">
          <Link
            onClick={() => {
              dispatch({
                type: "SET_VIDEO_LINK",
                payload: {
                  videoLink: videoLink,
                  title: title,
                  description: description,
                  isPlaylist: true,
                  topic: topic,
                  materials: materials,
                },
              });
              const data = {
                videoLink: videoLink,
                title: title,
                description: description,
                isPlaylist: true,
                topic: topic,
                materials: materials,
              };
              localStorage.setItem("videoData", JSON.stringify(data));
            }}
            to={`/videoPlayer/${id}`}
            className="text-secondary text-secondary--white"
          >
            {title}
          </Link>
        </div>
      </div>
    </>
  );
};

export default PlaylistVideosCard;
