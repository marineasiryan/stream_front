import React, { useState, useRef, useMemo, useEffect, memo } from "react";
import { BiArrowBack } from "react-icons/bi";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ReactPlayer from "react-player";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import screenful from "screenfull";

import Video from "../components/videos_section/video_play/Video";
import About_video from "../components/videos_section/about_video/About_video";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getHome } from "../api/videos/video";
import useVideos from "../components/admin/useVideos";
import useModal from "antd/lib/modal/useModal";
// import def from "../assets/images/def.jpeg"
import def from "../assets/images/def1.png"
// import def from "../assets/images/def2.png"

const useStyles = makeStyles((theme) => ({
  playerWrapper: {
    width: "100%",
    height: "100%",
    position: "relative",
    // margin: "30px 0",
  },
}));

const format = (seconds) => {
  if (isNaN(seconds)) {
    return `00:00`;
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm}:${ss}`;
};

let count = 0;

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

const VideoPlayer=memo(()=> {
  const videoData = useSelector((state) => state.videoData);
  const auth = useSelector((state) => state?.auth);
  const [recentVideos, { add }] = useHomeRecentVideo();
  const location = useLocation();
  const playlistId = location.pathname.split("videoPlayer/")[1];
  const playlistVideos = useSelector((state) => state.playlistVideos);
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
  if (videoData.isPlaylist) {
  }
  const classes = useStyles();

  const [timeDisplayFormat, setTimeDisplayFormat] = React.useState("normal");
  const [bookmarks, setBookmarks] = useState([]);
  const [state, setState] = useState({
    pip: false,
    playing: true,
    controls: false,
    light: false,
    muted: true,
    played: 0,
    duration: 0,
    playbackRate: 1.0,
    volume: 1,
    loop: false,
    seeking: false,
  });

  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const controlsRef = useRef(null);
  const canvasRef = useRef(null);
  const {
    playing,
    // controls,
    light,
    muted,
    loop,
    playbackRate,
    pip,
    played,
    // seeking,
    volume,
  } = state;

  const[showDiv, setShowDiv] = useState(false);


  const handlePlayPause = () => {
    console.log("aaaaaaaa");
    setShowDiv(!showDiv);
    setState({ ...state, playing: !state.playing });
  };

  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };

  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };

  const handleProgress = (changeState) => {
    if (count > 3) {
      controlsRef.current.style.visibility = "hidden";
      count = 0;
    }
    if (controlsRef.current.style.visibility == "visible") {
      count += 1;
    }
    if (!state.seeking) {
      setState({ ...state, ...changeState });
    }
  };

  const handleSeekChange = (e, newValue) => {
    setState({ ...state, played: parseFloat(newValue / 100) });
  };

  const handleSeekMouseDown = (e) => {
    setState({ ...state, seeking: true });
  };

  const handleSeekMouseUp = (e, newValue) => {
    setState({ ...state, seeking: false });
    playerRef.current.seekTo(newValue / 100, "fraction");
  };

  // const handleDuration = (duration) => {
  //   setState({ ...state, duration });
  // };

  const handleVolumeSeekDown = (e, newValue) => {
    setState({ ...state, seeking: false, volume: parseFloat(newValue / 100) });
  };
  const handleVolumeChange = (e, newValue) => {
    setState({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const toggleFullScreen = () => {
    screenful.toggle(playerContainerRef.current);
  };

  const handleMouseMove = () => {
    controlsRef.current.style.visibility = "visible";
    count = 0;
  };

  const hanldeMouseLeave = () => {
    controlsRef.current.style.visibility = "hidden";
    count = 0;
  };

  const handleDisplayFormat = () => {
    setTimeDisplayFormat(
      timeDisplayFormat == "normal" ? "remaining" : "normal"
    );
  };

  const handlePlaybackRate = (rate) => {
    setState({ ...state, playbackRate: rate });
  };

  const hanldeMute = () => {
    setState({ ...state, muted: !state.muted });
  };

  const addBookmark = () => {
    const canvas = canvasRef.current;
    canvas.width = 160;
    canvas.height = 90;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      playerRef.current.getInternalPlayer(),
      0,
      0,
      canvas.width,
      canvas.height
    );
    const dataUri = canvas.toDataURL();
    canvas.width = 0;
    canvas.height = 0;
    const bookmarksCopy = [...bookmarks];
    bookmarksCopy.push({
      time: playerRef.current.getCurrentTime(),
      display: format(playerRef.current.getCurrentTime()),
      image: dataUri,
    });
    setBookmarks(bookmarksCopy);
  };

  const currentTime =
    playerRef && playerRef.current
      ? playerRef.current.getCurrentTime()
      : "00:00";

  const duration =
    playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";
  const elapsedTime =
    timeDisplayFormat == "normal"
      ? format(currentTime)
      : `-${format(duration - currentTime)}`;

  const totalDuration = format(duration);

  const videoDataSecondary = useMemo(() =>
    JSON.parse(window.localStorage.getItem("videoData"))
  );
  const { _getPlaylistVideos } = useVideos();

  useEffect(() => {
    getHomeVidoes();
    videoData.isPlaylist && _getPlaylistVideos(playlistId);
    window.scrollTo(0, 150);
  }, [videoData.isPlaylist,location.pathname]);
  // const title = useSelector((state) => state.title);
  // const title2 = window.localStorage.getItem("title");
  return (
    <div className="video-player">
      <div className="playlsit-title">
        <Link to={"/"}>
          {" "}
          <BiArrowBack />{" "}
        </Link>
        <h1 className=" heading-secondary heading-secondary--white">
          {videoData.topic}
        </h1>
      </div>
      <Container maxWidth="md">
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={hanldeMouseLeave}
          ref={playerContainerRef}
          className={classes.playerWrapper}
        >
        {showDiv ? <div className="showDiv" > 
        <img src={def}/>
        </div>:null}

          <ReactPlayer
            ref={playerRef}
            width="100%"
            height="100%"
            url={videoData.videoLink || videoDataSecondary.videoLink}
            pip={pip}
            playing={playing}
            controls={false}
            light={light}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onProgress={handleProgress}
            config={{
              file: {
                attributes: {
                  crossOrigin: "anonymous",
                },
              },
            }}
          />

          <Video
            ref={controlsRef}
            onSeek={handleSeekChange}
            onSeekMouseDown={handleSeekMouseDown}
            onSeekMouseUp={handleSeekMouseUp}
            // onDuration={handleDuration}
            onRewind={handleRewind}
            onPlayPause={handlePlayPause}
            onFastForward={handleFastForward}
            playing={playing}
            played={played}
            elapsedTime={elapsedTime}
            totalDuration={totalDuration}
            onMute={hanldeMute}
            muted={muted}
            onVolumeChange={handleVolumeChange}
            onVolumeSeekDown={handleVolumeSeekDown}
            onChangeDispayFormat={handleDisplayFormat}
            playbackRate={playbackRate}
            onPlaybackRateChange={handlePlaybackRate}
            onToggleFullScreen={toggleFullScreen}
            volume={volume}
            onBookmark={addBookmark}
          />
        </div>

        <Grid container style={{ marginTop: 20 }} spacing={3}>
          {bookmarks.map((bookmark, index) => (
            <Grid key={index} item>

              <Paper
                onClick={() => {
                  playerRef.current.seekTo(bookmark.time);
                  controlsRef.current.style.visibility = "visible";

                  setTimeout(() => {
                    controlsRef.current.style.visibility = "hidden";
                  }, 100);
                }}
                elevation={3}
              >
                <img crossOrigin="anonymous" src={bookmark.image} />
                <Typography variant="body2" align="center">
                  bookmark at {bookmark.display}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <About_video
        data={videoData.isPlaylist ? playlistVideos : recentVideos}
        videoData={videoData}
        videoDataSecondary={videoDataSecondary}
      />
    </div>
  );
})
export default memo(VideoPlayer);
