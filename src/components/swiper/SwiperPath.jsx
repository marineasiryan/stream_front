import React, { memo, useCallback, useEffect } from "react";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

import SwiperPlaylist from "./SwiperPlaylist";

const SwiperPath = ({ id, title, description, playlists }) => {
 

  return (
    <div className="path-playlists">
      <div className="playlist-title">
        <h2 className="heading-secondary heading-secondary--pink">{title}</h2>
       
      </div>
      <p className="text-secondary text-secondary--white">{description}</p>
    
      {playlists && playlists.length
        ? playlists.map((item) => {
            return (
              <SwiperPlaylist
                key={v4()}
                description={item.description}
                videos={item.videos}
                title={item.title}
                id={item._id}
              />
            );
          })
        : ""}
    </div>
  );
};

export default memo(SwiperPath);
