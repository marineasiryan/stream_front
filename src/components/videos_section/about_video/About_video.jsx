import React, { memo } from "react";
import { v4 } from "uuid";
import VideoPlayerCard from "../../helper/cards/VideoPlayerCard";
import Video_info from "../../video_info/Video_info";

const About_video = ({ data, videoData, videoDataSecondary }) => {
  
  return (
    <>
      <Video_info
        videoData={videoData}
        videoDataSecondary={videoDataSecondary}
      />
      <div className="videos_block_player">
        {data &&
          data.length &&
          data.map((item) => {
            return (
              <VideoPlayerCard
                key={v4()}
                title={item.title}
                link={item.link.split("v=")}
                videoLink={item.link}
                description={item.description}
                materials={item.materials}
              />
            );
          })}
      </div>
    </>
  );
};

export default memo(About_video);
