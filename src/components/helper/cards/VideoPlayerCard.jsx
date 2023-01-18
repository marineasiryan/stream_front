import React, { useCallback } from "react";
// import { useDispatch } from "react-redux";

const VideoPlayerCard = ({ title, link, id }) => {

  const thumbnail = link[1].slice(0, 11);


  return (
    <>
      <div className="videoPlayer-card ">
        <div className="secondary-card-img">
          <img
            src={`https://i3.ytimg.com/vi/${thumbnail}/maxresdefault.jpg`}
            alt="image"
          />
        </div>     
          <p className="text-primary text-primary--white">{title}</p>
      
      </div>
    </>
  );
};

export default VideoPlayerCard;

