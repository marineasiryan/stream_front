import axios from "axios";
import { object } from "yup";

export const createVideo = async (data, token) => {
  return await axios.post(`${import.meta.env.VITE_APP_API}/api/video`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllVideos = async (token) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/api/video/filter`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPlaylistVideos = async (token, playlistId) => {
  return await axios.get(
    `${import.meta.env.VITE_APP_API}/api/playlist/${playlistId}/videos`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getVideoById = async (id, token, data) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/api/video/${id}`, {
    params: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateVideoById = async (data, id, token) => {
  return await axios.patch(
    `${import.meta.env.VITE_APP_API}/api/video/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const deleteVideo = async (id, token) => {
  return await axios.delete(`${import.meta.env.VITE_APP_API}/api/video/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createPlayList = async (data, token) => {
  return await axios.post(
    `${import.meta.env.VITE_APP_API}/api/playlist`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getAllPlayList = async (token) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/api/playlist`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPlaylistById = async (playlistId, token) => {
  console.log("playlistttttttt id", playlistId);
  return await axios.get(
    `${import.meta.env.VITE_APP_API}/api/playlist/${playlistId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getPathPlaylists = async (token, id) => {
  return await axios.get(
    `${import.meta.env.VITE_APP_API}/api/path/${id}/playlists`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const updatePlaylistById = async (data, playlistId, token) => {
  return await axios.patch(
    `${import.meta.env.VITE_APP_API}/api/playlist/${playlistId}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const deletePlaylist = async (playlistId, token) => {
  return await axios.delete(
    `${import.meta.env.VITE_APP_API}/api/playlist/${playlistId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const addVideoToPlaylist = async (playlistId, token, data) => {
  let datastr = JSON.stringify(data);
  let datanew = datastr.replace(/[" []/g, "").replace(/]/g, "");
  let newData = Object.assign({ videoIDs: datanew });
  return await axios.post(
    `${import.meta.env.VITE_APP_API}/api/playlist/${playlistId}/items`,
    {},

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: newData,
    }
  );
};

export const deleteVideoFromPlaylist = async (playlistId, token, data) => {
  let datastr = JSON.stringify(data);
  let datanew = datastr.replace(/[" []/g, "").replace(/]/g, "");
  let newData = Object.assign({ videoIDs: datanew });
  return await axios.delete(
    `${import.meta.env.VITE_APP_API}/api/playlist/${playlistId}/items`,
    {
      params: newData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const deleteSelectedVideos = async (token, data) => {
  let datastr = JSON.stringify(data);
  let datanew = datastr.replace(/[" []/g, "").replace(/]/g, "");
  let newData = Object.assign({ ids: datanew });

  return await axios.delete(`${import.meta.env.VITE_APP_API}/api/video/items`, {
    params: newData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createPath = async (data, token) => {
  return await axios.post(`${import.meta.env.VITE_APP_API}/api/path`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllPath = async (token) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/api/path`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPathById = async (pathId, token) => {
  console.log("path idddd", pathId);
  return await axios.get
  (`${import.meta.env.VITE_APP_API}/api/path/${pathId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addPlaylistToPath = async (pathId, token, data) => {
  let datastr = JSON.stringify(data);
  let datanew = datastr.replace(/[" []/g, "").replace(/]/g, "");
  let newData = Object.assign({ playlistIDs: datanew });

  return await axios.patch(
    `${import.meta.env.VITE_APP_API}/api/path/${pathId}/items`,
    {},

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: newData,
    }
  );
};

export const deletePlaylistFromPath = async (pathId, token, data) => {
  let datastring = JSON.stringify(data);
  let datanew = datastring.replace(/[" []/g, "").replace(/]/g, "");

  let newData = Object.assign({ playlistIDs: datanew });

  return await axios.delete(
    `${import.meta.env.VITE_APP_API}/api/path/${pathId}/items`,
    {
      params: newData,

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const updatePathById = async (data, pathId, token) => {
  return await axios.patch(
    `${import.meta.env.VITE_APP_API}/api/path/${pathId}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const deletePath = async (pathId, token) => {
  return await axios.delete(
    `${import.meta.env.VITE_APP_API}/api/path/${pathId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getHome = async (limit, date, token) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/api/home`, {
    params: { limit: limit, date: date },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getHomePlaylists = async (token) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/api/home`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
