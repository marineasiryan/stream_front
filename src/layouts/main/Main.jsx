import { message } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { memo } from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { getHome } from "../../api/videos/video";
import SwiperPlaylist from "../../components/swiper/SwiperPlaylist";
import SwiperRecent from "../../components/swiper/SwiperRecent";

function useHomeRecentVideo() {
  const [recentVideos, setRecentVideos] = useState([]);
  const handlers = useMemo(
    () => ({
      add: (data) => setRecentVideos(data),
    }),
    []
  );
  return [recentVideos, handlers];
}

const Main = () => {
  const auth = useSelector((state) => state?.auth);
  const [recentVideos, { add }] = useHomeRecentVideo();
  const getHomeVidoes = async () => {
    try {
      const res = await getHome(8, -1, auth.token);
     
      if (res.data) {
        add(res.data.resentVideos);
      }
    } catch (err) {
      message.error("Somthing went wrong");
    }
  };
  useEffect(() => {
    getHomeVidoes();
  }, []);
  return (
    <div className="main container">
      <SwiperRecent data={recentVideos} />
      {[...Array(18)].map((i) => {
        return <SwiperPlaylist key={v4()} />;
      })}
    </div>
  );
};

export default memo(Main);
