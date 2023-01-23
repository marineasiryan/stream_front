import { message } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { memo } from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { getHome, getHomePlaylists } from "../../api/videos/video";
import useVideos from "../../components/admin/useVideos";
import SwiperPlaylist from "../../components/swiper/SwiperPlaylist";
import SwiperRecent from "../../components/swiper/SwiperRecent";

function useHomeRecentVideo() {
  const [recentVideos, setRecentVideos] = useState([]);
  const [playlistVideos, setPlaylistVideos] = useState([]);

  const handlers = useMemo(
    () => ({
      add: (data) => setRecentVideos(data),
      add2: (data) => setPlaylistVideos(data),
    }),
    []
  );
  return [recentVideos, playlistVideos, handlers];
}

const Main = () => {
  // const { getPlayList } = useVideos();
  // const playlist = useSelector((state) => state.playlist);
  //

  const auth = useSelector((state) => state?.auth);
  const [recentVideos, playlistVideos, { add, add2 }] = useHomeRecentVideo();
  //

  const getHomeVidoes = async () => {
    try {
      const res = await getHome(8, -1, auth.token);
      if (res.data) {
        add(res.data.recentVideos);
      }
    } catch (err) {
      message.error("Somthing went wrong");
    }
  };

  const getHomePlaylist = async () => {
    try {
      const res = await getHomePlaylists(auth.token);
      //

      if (res.data) {
        add2(res.data.playlistVideos);
      }
    } catch (err) {
      message.error(err.message);
    }
  };

  useEffect(() => {
    getHomeVidoes();
    getHomePlaylist();
  }, []);
  return (
    <div className="main container">
      {recentVideos && recentVideos.length ? (
        <SwiperRecent data={recentVideos} />
      ):""}
      {playlistVideos &&
        playlistVideos.length ?(
        playlistVideos.map((item) => {
          return (
            <SwiperPlaylist
            // materials={materials}
              key={v4()}
              description={item.description}
              data={playlistVideos}
              videos={item.videos}
              title={item.title}
              id={item._id}
            />
          );
        })):""}
    </div>
  );
};

export default memo(Main);
