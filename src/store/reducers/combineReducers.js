import { HashRouter } from "react-router-dom";
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { hashReducer } from "./hashReducer";
import { pathPlaylists } from "./pathPlaylists";
import { pathReducer } from "./pathReducer";
import { PlaylistReducer } from "./playlistReducer";
import { playlistVideos } from "./playlistVideos";
import { userInfoReducer } from "./userInfoReducer";
import { VideoReducer } from "./videoReducer";
import { VideosIdReducer } from "./videosIdReducer";
import { PlaylistsIdReducer } from "./playlistsIdReducer";
import { UserReducer } from "./userReducer";
import { videoLinkReducer } from "./videoLinkReducer";
import { VideoInfoReducer } from "./videoInfoReducer";
import { PlaylistInfoReducer } from "./playlistInfoReducer";
import { pathInfoReducer } from "./pathInfoReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  hash: hashReducer,
  user: userInfoReducer,
  videos: VideoReducer,
  playlist: PlaylistReducer,
  path: pathReducer,
  playlistVideos: playlistVideos,
  pathPlaylists: pathPlaylists,
  videoid: VideosIdReducer,
  playlistid: PlaylistsIdReducer,
  users: UserReducer,
  videoData: videoLinkReducer,
  videoInfo: VideoInfoReducer,
  playlistInfo:PlaylistInfoReducer,
  pathInfo:pathInfoReducer,
});

export default rootReducer;
