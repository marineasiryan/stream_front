import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

                
const VideoPlayerCard = ({ title, link, videoLink, description , materials,  isPlaylist,}) => {
  let thumbnail;
  link ? (thumbnail = link[1].slice(0, 11)) : "";
  const dispatch = useDispatch();

  return (
    <>
      <div className="videoPlayer-card ">
        <Link className="secondary-card-img">
          <img
            src={`https://i3.ytimg.com/vi/${thumbnail}/maxresdefault.jpg`}
            alt="lesson_video"
            onClick={() => {
              dispatch({
                type: "SET_VIDEO_LINK",
                payload: {
                  videoLink: videoLink,
                  title: title,
                  description: description,
                  materials:materials,
                  isPlaylist: true,

                },
              });
              const data = {
                videoLink: videoLink,
                title: title,
                description: description,
                materials:materials,
                isPlaylist: true,

              };
              localStorage.setItem("videoData", JSON.stringify(data));
              window.scrollTo(0, 150);
            }}
          />
        </Link>
        <Link   className="text-primary text-primary--white"
          onClick={() => {
            dispatch({
              type: "SET_VIDEO_LINK",
              payload: {
                videoLink: videoLink,
                title: title,
                description: description,
                materials:materials,
                isPlaylist: true,

              },
            });
            const data = {
              videoLink: videoLink,
              title: title,
              description: description,
              materials:materials,
              isPlaylist: true,

            };
            localStorage.setItem("videoData", JSON.stringify(data));
            window.scrollTo(0, 150);
          }}
          // to={"/videoPlayer"}
         
        >
          {title}
        </Link>
      </div>
    </>
  );
};

export default VideoPlayerCard;
