import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";
import ShowMoreText from "react-show-more-text";
import { useSelector } from "react-redux";

const Video_info = ({videoData,videoDataSecondary}) => {
 

  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };

  return (
    <>
      <div className="video_info container">
        <div className="video_info-title">
          <p className="video-name heading-secondary heading-secondary--white">
          {videoData.title || videoDataSecondary.title} 
          </p>
          <div className="view">
            <p className="text-primary ">1234 view </p>
            <BiHeart />
          </div>
        </div>
        <div className="video-description">
          <ShowMoreText
            lines={3}
            more="Show more"
            less="Show less"
            className="content-description"
            onClick={executeOnClick}
            expanded={false}
            width={600}
            truncatedEndingComponent={"... "}
          >
            <span className=" text-secondary text-secondary--white">
            {videoData.description || videoDataSecondary.description}
            </span>

            <div className="link-description">
              <p className=" text-secondary text-secondary--white">
                Necessary resources
              </p>
              <a
                className="links"
                href="https://www.youtube.com/watch?v=APCtU5e3htk&list=PLBzxnGCN6T8c0nFaCKCd6snYvxPHwoNES"
                target="_blank"
              >
                
                  https://www.youtube.com/watch
              </a>
              <a
                className="links"
                href="https://www.youtube.com/watch?v=APCtU5e3htk&list=PLBzxnGCN6T8c0nFaCKCd6snYvxPHwoNES"
                target="_blank"
              >
                  https://www.youtube.com/watch
              </a>
              <a
                className="links"
                href="https://www.youtube.com/watch?v=APCtU5e3htk&list=PLBzxnGCN6T8c0nFaCKCd6snYvxPHwoNES"
                target="_blank"
              >
                  https://www.youtube.com/watch
              </a>
              <a
                className="links"
                href="https://www.youtube.com/watch?v=APCtU5e3htk&list=PLBzxnGCN6T8c0nFaCKCd6snYvxPHwoNES"
                target="_blank"
              >
                  https://www.youtube.com/watch
              </a>
              <a
                className="links"
                href="https://www.youtube.com/watch?v=APCtU5e3htk&list=PLBzxnGCN6T8c0nFaCKCd6snYvxPHwoNES"
                target="_blank"
              >
                  https://www.youtube.com/watch?
              </a>
            </div>
          </ShowMoreText>
         
        </div>
      </div>
    </>
  );
};

export default Video_info;
