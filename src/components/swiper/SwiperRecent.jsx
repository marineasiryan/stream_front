import React from "react";
import { v4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import MainCardRecent from "../helper/cards/MainCardRecent";

const SwiperRecent = ({ data }) => {
  // console.log(data);
  return (
    <div className="main-playlists">
      <div className="playlist-title">
        <h2 className="heading-secondary heading-secondary--white">
          Recent Videos
        </h2>
        {/* <Link to={"/singlePlaylist"} className="text-secondary text-secondary--gray">
          Explore All {'>'}
        </Link> */}
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        mousewheel={{
          invert: true,
        }}
        // loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {data &&
          data.length &&
          data.map((item) => {
            return (
              <SwiperSlide key={v4()}>
                <MainCardRecent
                  title={item.title}
                  link={item.link.split("v=")}
                  videoLink={item.link}
                  description={item.description}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default SwiperRecent;
