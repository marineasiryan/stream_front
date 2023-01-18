import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const MainCardRecent = ({ title, link, videoLink, description }) => {
  let thumbnail;
  link ? (thumbnail = link[1].slice(0, 11)) : "";
  const dispatch = useDispatch();
  return (
    <>
      <div className="card">
        <Link to={"/videoPlayer"} className="card-img">
          <img
            src={`https://i3.ytimg.com/vi/${thumbnail}/maxresdefault.jpg`}
            alt="lesson_video"
            width={"100%"}
            onClick={() => {
              dispatch({
                type: "SET_VIDEO_LINK",
                payload: { videoLink: videoLink, title: title, description:description },
              });
              const data = {
                videoLink: videoLink,
                title: title,
                description:description,
              };
              localStorage.setItem("videoData", JSON.stringify(data));
            }}
          />
        </Link>
        <div className="card-description">
          <Link
            to={"/videoPlayer"}
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
