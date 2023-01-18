import React from "react";
import { v4 } from "uuid";
import VideoPlayerCard from "../../helper/cards/VideoPlayerCard";
import Video_info from "../../video_info/Video_info";


const About_video = ({videoData,videoDataSecondary}) => {
  
  return (
    <>
      <Video_info  videoData={videoData} videoDataSecondary={videoDataSecondary}/>
      <div className="videos_block_player">
        {[...Array(10)].map((item) => {
          return (
            <VideoPlayerCard
              key={v4()}
              title="The Magic of Academy Whiteboards | A Picsart Academy Short Fil"
              link={"PwxxCFBKPPQ&list=PLBzxnGCN6T8ddhTt0jk_bGnhmj4r16enC"}
            />
          );
        })}
      </div>
    </>
  );
};

export default About_video;
