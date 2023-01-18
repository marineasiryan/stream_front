import React from "react";
import Description from "../components/description/Description";
import { v4 } from "uuid";
// import MainCard from "../components/helper/cards/MainCard";
import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi";
import { useSelector } from "react-redux";
import MainCardPlaylist from "../components/helper/cards/MainCardPlaylist";

const SinglePlaylist = () => {

  return (
    <>
      <div className="backgroung-image">
        <button className="btn-hero btn-hero--secondary btn-text-primary">
          <BiPlay /> Play All
        </button>
        <img src="https://cdn-images-1.medium.com/fit/t/1600/480/1*_hizWkLSJrDbiRUHJIXqcw.jpeg" />
      </div>

      <div className="single-playlist">
        <h2 className=" heading-primary heading-primary--pink">
          Playlsit Title
        </h2>
        <Description />
        <div className="single-playlist-cards">
          {[...Array(18)].map((i) => {
            return (
              <MainCardPlaylist
                key={v4()}
                title="The Magic of Academy Whiteboards | A Picsart Academy Short Fil"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SinglePlaylist;
