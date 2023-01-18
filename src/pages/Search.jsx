import React from "react";
import { v4 } from "uuid";

// import MainCard from "../components/helper/cards/MainCard";
import MainCardPlaylist from "../components/helper/cards/MainCardPlaylist";
import SwiperPlaylist from "../components/swiper/SwiperPlaylist";

const Search = () => {
  return (
    <div className="search">
      <h2 className="heading-secondary">Video Match Search</h2>
      <div className="video-search">
        {[...Array(12)].map((i) => {
          return (
            <MainCardPlaylist
              key={v4()}
              title="The Magic of Academy Whiteboards | A Picsart Academy Short Fil"
            />
          );
        })}
      </div>

      <h2 className="heading-secondary">Playlist Match Search</h2>
      <div className="playlist-search">
        {[...Array(3)].map((i) => {
          return <SwiperPlaylist key={v4()} />;
        })}
      </div>
    </div>
  );
};

export default Search;
