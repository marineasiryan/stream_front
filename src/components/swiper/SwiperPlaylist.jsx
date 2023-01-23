import React, { memo } from "react";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import MainCardPlaylist from "../helper/cards/MainCardPlaylist";

const SwiperPlaylist = ({ videos, title, description, id, data }) => {
  return (
    <div className="main-playlists">
      <div className="playlist-title">
        <h2 className="heading-secondary heading-secondary--white">{title}</h2>
        <Link
          to={`/singlePlaylist/${id}`}
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
        // pagination={{
        //   clickable: true,
        //   dynamicBullets: true,
        // }}
        modules={[Pagination, Navigation]}
      >
        {videos &&
          videos.length &&
          videos.map((item) => {
            return (
              <SwiperSlide key={v4()}>
                <MainCardPlaylist
                  id={item._id}
                  title={item.title}
                  link={item.link.split("v=")}
                  videoLink={item.link}
                  description={item.description}
                  playlistId={id}
                  topic={item.topic}
                  materials={item.materials}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default memo(SwiperPlaylist);
