import { message } from "antd";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteVideo,
  getAllPlayList,
  getAllVideos,
  deletePlaylist,
  deletePath,
  getAllPath,
  getPlaylistVideos,
  getPathPlaylists,
  deleteVideoFromPlaylist,
  addVideoToPlaylist,
  deleteSelectedVideos,
  addPlaylistToPath,
  deletePlaylistFromPath,
  getVideoById,
  getPlaylistById,
  getPathById,
} from "../../api/videos/video";

const useVideos = () => {
  const auth = useSelector((state) => state?.auth);
  const dispatch = useDispatch();

  const getVideos = async () => {
    try {
      const res = await getAllVideos(auth.token);
      dispatch({
        type: "SET_ALL_VIDEOS",
        payload: res.data,
      });
    } catch (err) {
      message.error("Something went wrong!");
    }
  };

  const _getPlaylistVideos = async (id) => {
    try {
      const res = await getPlaylistVideos(auth.token, id);
      dispatch({
        type: "SET_ALL_PLAYLIST_VIDEOS",
        payload: res.data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  const getPlayList = async () => {
    try {
      const res = await getAllPlayList(auth.token);
      dispatch({
        type: "SET_ALL_PLAYLIST",
        payload: res.data,
      });
    } catch (err) {
      message.error("Something went wrong!");
    }
  };

  const _getPathPlaylists = async (id) => {
    try {
      const res = await getPathPlaylists(auth.token, id);
      dispatch({
        type: "SET_ALL_PATH_PLAYLISTS",
        payload: res.data,
      });
    } catch (err) {
      message.error("Something went wrong!");
    }
  };

  const getPath = async () => {
    try {
      const res = await getAllPath(auth.token);
      dispatch({
        type: "SET_ALL_PATH",
        payload: res.data,
      });
    } catch (err) {
      message.error("Something went wrong!");
    }
  };

  const deleteVideoHandler = useCallback(async (id) => {
    try {
      await deleteVideo(id, auth.token);
      const result = await getAllVideos(auth.token);
      dispatch({
        type: "SET_ALL_VIDEOS",
        payload: result.data,
      });
    } catch (err) {
      message.error("Something went wrong!");
    }
  }, []);

  const _deleteSelectedVideos = useCallback(async (data) => {
    try {
      await deleteSelectedVideos(auth.token, data);
      const result = await getAllVideos(auth.token);
      dispatch({
        type: "SET_ALL_VIDEOS",
        payload: result.data,
      });
    } catch (err) {
      message.error("Something went wrong!");
    }
  }, []);

  // const deletePlaylistVideoHandler = useCallback(async (id, playlistId) => {
  //   try {
  //     await deleteVideo(id, auth.token);
  //     const result = await getPlaylistVideos(auth.token, playlistId);
  //     dispatch({
  //       type: "SET_ALL_PLAYLIST_VIDEOS",
  //       payload: result.data,
  //     });
  //   } catch (err) {
  //     message.error("Something went wrong!d");
  //   }
  // }, []);

  const deletePlaylistVideosHandler = useCallback(async (data, playlistId) => {
    try {
      await deleteVideoFromPlaylist(playlistId, auth.token, data);
      const result = await getPlaylistVideos(auth.token, playlistId);
      dispatch({
        type: "SET_ALL_PLAYLIST_VIDEOS",
        payload: result.data,
      });
    } catch (err) {
      message.error("Something went wrong!d");
    }
  }, []);

  const deletePlaylistHandler = useCallback(async (id) => {
    try {
      await deletePlaylist(id, auth.token);
      const result = await getAllPlayList(auth.token);
      dispatch({
        type: "SET_ALL_PLAYLIST",
        payload: result.data,
      });
    } catch (err) {
      message.error("Something went wrong!");
    }
  }, []);

  const deletePathHandler = useCallback(async (id) => {
    try {
      await deletePath(id, auth.token);
      const result = await getAllPath(auth.token);
      dispatch({
        type: "SET_ALL_PATH",
        payload: result.data,
      });
    } catch (err) {
      message.error("Something went wrong!");
    }
  }, []);

  const deletePathPlaylistsHandler = useCallback(async (data, pathId) => {
    try {
      await deletePlaylistFromPath(pathId, auth.token, data);
      const result = await getPathPlaylists(auth.token, pathId);
      dispatch({
        type: "SET_ALL_PATH_PLAYLISTS",
        payload: result.data,
      });
    } catch (err) {
      message.error("Something went wrong!d");
    }
  }, []);

  const addExistingVideoToPlaylist = useCallback(async (data, playlistId) => {
    try {
      await addVideoToPlaylist(playlistId, auth.token, data);
      dispatch({
        type: "RESET_VIDEO_ID",
        payload: {},
      });
    } catch (error) {
      message.error(error);
    }
  }, []);

  const addExistingPlaylistToPath = useCallback(async (data, pathId) => {
    try {
      await addPlaylistToPath(pathId, auth.token, data);
      dispatch({
        type:"RESET_PLAYLIST_ID",
        payload:{},
      });
    } catch (error) {
      message.error(error);
    }
  }, []);

  const _getVideoById = useCallback(async (data, id) => {
    try {
      const res = await getVideoById(data, id, auth.token);
      if (res.data) {
        dispatch({
          type: "SET_VIDEO",
          payload: res.data,
        });
      }
    } catch (error) {
      message.error(error.message);
    }
  }, []);

  const _getPlaylistById = useCallback(async (playlistId) => {
    console.log("playlist id", playlistId);
    try {
      const res = await getPlaylistById(playlistId, auth.token);
      if (res.data) {
        dispatch({
          type: "SET_PLAYLIST",
          payload: res.data,
        });
      }
    } catch (error) {
      message.error(error.message);
    }
  }, []);

  const _getPathById = useCallback(async (pathId) => {
    console.log("pathId id", pathId);
    try {
      const res = await getPathById(pathId, auth.token);
      if (res.data) {
        dispatch({
          type: "SET_PATH",
          payload: res.data,
        });
      }
    } catch (error) {
      message.error(error.message);
    }
  }, []);

  return {
    getPath,
    getVideos,
    getPlayList,
    _getPlaylistVideos,
    _getPathPlaylists,
    _getPlaylistById,
    _getVideoById,
    _getPathById,
    // deletePlaylistVideoHandler,
    deletePlaylistVideosHandler,
    deletePathHandler,
    deleteVideoHandler,
    deletePlaylistHandler,
    addExistingVideoToPlaylist,
    _deleteSelectedVideos,
    addExistingPlaylistToPath,
    deletePathPlaylistsHandler,
  };
};

export default useVideos;
