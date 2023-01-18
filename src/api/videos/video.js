import axios from "axios";
import { object } from "yup";

export const createVideo = async (data, token) => {
  return await axios.post(`${import.meta.env.VITE_APP_API}/video`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllVideos = async (token) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/video/filter`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPlaylistVideos = async (token, id) => {
  return await axios.get(
    `${import.meta.env.VITE_APP_API}/playlist/${id}/videos`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getVideoById = async (id, token) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/video/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateVideoById = async (data, id, token) => {
  return await axios.patch(
    `${import.meta.env.VITE_APP_API}/video/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const deleteVideo = async (id, token) => {
  return await axios.delete(`${import.meta.env.VITE_APP_API}/video/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createPlayList = async (data, token) => {
  return await axios.post(`${import.meta.env.VITE_APP_API}/playlist`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllPlayList = async (token) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/playlist`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPlaylistById = async (id, token) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/playlist/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPathPlaylists = async (token, id) => {
  return await axios.get(
    `${import.meta.env.VITE_APP_API}/path/${id}/playlists`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const updatePlaylistById = async (data, id, token) => {
  return await axios.patch(
    `${import.meta.env.VITE_APP_API}/playlist/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const deletePlaylist = async (id, token) => {
  return await axios.delete(`${import.meta.env.VITE_APP_API}/playlist/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addVideoToPlaylist = async (id, token, data) => {
  let datastr = JSON.stringify(data);
  let datanew = datastr.replace(/[" []/g, "").replace(/]/g, "");
  let newData = Object.assign({ videoIDs: datanew });
  return await axios.post(
    `${import.meta.env.VITE_APP_API}/playlist/${id}/items`,
    {},

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: newData,
    }
  );
};

export const deleteVideoFromPlaylist = async (id, token, data) => {
  let datastr = JSON.stringify(data);
  let datanew = datastr.replace(/[" []/g, "").replace(/]/g, "");
  let newData = Object.assign({ videoIDs: datanew });
  return await axios.delete(
    `${import.meta.env.VITE_APP_API}/playlist/${id}/items`,
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

  return await axios.delete(`${import.meta.env.VITE_APP_API}/video/items`, {
    params: newData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createPath = async (data, token) => {
  return await axios.post(`${import.meta.env.VITE_APP_API}/path`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getAllPath = async (token) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/path`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPathById = async (id, token) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/path/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addPlaylistToPath = async (id, token, data) => {
  console.log("mi ban");
  let datastr = JSON.stringify(data);
  let datanew = datastr.replace(/[" []/g, "").replace(/]/g, "");
  let newData = Object.assign({ playlistIDs: datanew });
  console.log(newData);

  return await axios.patch(
    `${import.meta.env.VITE_APP_API}/path/${id}/items`,
    {},

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: newData,
    }
  );
};

export const deletePlaylistFromPath = async (id, token, data) => {
  let datastring = JSON.stringify(data);
  console.log("datastring", datastring);
  console.log("token", token);
  let datanew = datastring.replace(/[" []/g, "").replace(/]/g, "");
  console.log("datanew", datanew);

  let newData = Object.assign({ playlistIDs: datanew });
  console.log("newData", newData);

  return await axios.delete(
    `${import.meta.env.VITE_APP_API}/path/${id}/items`,
    {
      params: newData,

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const updatePathById = async (data, id, token) => {
  return await axios.patch(`${import.meta.env.VITE_APP_API}/path/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deletePath = async (id, token) => {
  return await axios.delete(`${import.meta.env.VITE_APP_API}/path/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getHome = async (limit, date, token) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/home`, {
    params: { limit: limit, date: date },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
