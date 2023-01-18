import React, { memo } from "react";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import MainCardPlaylist from "../helper/cards/MainCardPlaylist";

const SwiperPlaylist = () => {
  return (
    <div className="main-playlists">
      <div className="playlist-title">
        <h2 className="heading-secondary heading-secondary--white">
          Playlist Name
        </h2>
        <Link
          to={"/singlePlaylist"}
          className="text-secondary text-secondary--gray"
        >
          Explore All {">"}
        </Link>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        mousewheel={{
          invert: true,
        }}
        navigation={true}
        // loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {[...Array(14)].map((i) => {
          return (
            <SwiperSlide key={v4()}>
              <MainCardPlaylist title="The Magic of Academy Whiteboards | A Picsart Academy Short Fil" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default memo(SwiperPlaylist);
