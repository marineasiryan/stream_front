import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const MainCardRecent = ({
  title,
  link,
  videoLink,
  isPlaylist,
  description,
  topic,
  materials,
  playlistId,
}) => {
  
  let thumbnail;
  link ? (thumbnail = link[1].slice(0, 11)) : "";
  const dispatch = useDispatch();
  return (
    <>
      <div className="card">
        <Link to={`/videoPlayer/${playlistId}`} className="card-img">
          <img
            src={`https://i3.ytimg.com/vi/${thumbnail}/maxresdefault.jpg`}
            alt="lesson_video"
            width={"100%"}
            onClick={() => {
              dispatch({
                type: "SET_VIDEO_LINK",
                payload: {
                 
                  videoLink: videoLink,
                  title: title,
                  description: description,
                  isPlaylist: false,
                  topic: topic,
                  materials: materials,
                },
              });
              const data = {
                videoLink: videoLink,
                title: title,
                description: description,
                isPlaylist: false,
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
                  isPlaylist: false,
                  topic: topic,
                  materials: materials,
                },
              });
              const data = {
                videoLink: videoLink,
                title: title,
                description: description,
                isPlaylist: false,
                topic: topic,
                materials: materials,
              };
              localStorage.setItem("videoData", JSON.stringify(data));
            }}
            to={`/videoPlayer/${title}`}
            className="text-secondary text-secondary--white"
          >
            {title}
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainCardRecent;
