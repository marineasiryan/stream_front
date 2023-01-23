import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { v4 } from "uuid";
import useVideos from "../components/admin/useVideos";
import SwiperPath from "../components/swiper/SwiperPath";
// import { v4 } from "uuid";
// import Description from "../components/description/Description";
// import PathsSection from "../layouts/pathsSection/PathsSection";
const Paths = () => {

  const { getPath} = useVideos();
  const path = useSelector((state) => state.path);
console.log("pathhhhh", path);




  useEffect(() => {
    getPath()
  }, []);

  return (
    <div className="path container">
     
       {path && path.length ? (path.map((item) => {
        console.log("item", item);
       return (
        <SwiperPath
          key={v4()}
          description={item.description}
          title={item.title}
          id={item._id}
          playlists={item.playlists}
        />
      );
      })):""}
    </div>
  );
};

export default Paths;


