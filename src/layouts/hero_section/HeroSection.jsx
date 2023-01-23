import React from "react";
import { memo } from "react";
import videoBg from "../../assets/images/video.mp4";
import { BiPlay } from "react-icons/bi";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="heroSection">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay muted />
        <div className="content">
          <div className="content-animated">
            <h1 className="heading-primary">COMPUTER ARCHITECTURE</h1>
            <p className="heading-secondary heading-secondary--white">
              About Video Difficulty on insensible reasonable in. From as went
              he they. Preference themselves me as thoroughly partiality
              considered on in estimating. Middletons acceptance discovered
              projecting so is so or. In or attachment inquietude remarkably
              comparison at an.
            </p>
          </div>
          <Link to={"/"} className="btn-hero btn-hero--main">
            <BiPlay />
          </Link>
        </div>
      </div>
    </>
  );
};

export default memo(HeroSection);
