import React from "react";
import { Link } from "react-router-dom";

const MainCardPlaylist = ({ title, link }) => {
  let thumbnail;
  link ? (thumbnail = link[1].slice(0, 11)) : "";

  return (
    <>
      <div className="card">
        <Link to={"/videoPlayer"} className="card-img">
          <img
            src={`https://i3.ytimg.com/vi/${thumbnail}/maxresdefault.jpg`}
            alt="lesson_video"
            width={"100%"}
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

export default MainCardPlaylist;
