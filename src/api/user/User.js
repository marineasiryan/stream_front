import axios from "axios";

export const getUserById = async (userId, token) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/api/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUsers = async (token) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/api/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateUser = async (data, userId, token) => {
  return await axios.patch(`${import.meta.env.VITE_APP_API}/api/users/${userId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateEmail = async (data, userId, token) =>
  await axios.post(`${import.meta.env.VITE_APP_API}/api/users/reset-email/${userId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const activateChangeEmail = async (hash, email) =>
  await axios.patch(
    `${import.meta.env.VITE_APP_API}/api/users/activate`,
    {},
    {
      params: { hash, email },
    }
  );

export const updatePassword = async (data, userId, token) =>
  await axios.patch(`${import.meta.env.VITE_APP_API}/api/users/reset-pass/${userId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
