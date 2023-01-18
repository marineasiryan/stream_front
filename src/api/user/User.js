import axios from "axios";

export const getUserById = async (id, token) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUsers = async (token) => {
  return await axios.get(`${import.meta.env.VITE_APP_API}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateUser = async (data, id, token) => {
  console.log(data);
  return await axios.patch(`${import.meta.env.VITE_APP_API}/users/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateEmail = async (data, id, token) =>
  await axios.post(`${import.meta.env.VITE_APP_API}/users/reset-email/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const activateChangeEmail = async (hash, email) =>
  await axios.patch(
    `${import.meta.env.VITE_APP_API}/users/activate`,
    {},
    {
      params: { hash, email },
    }
  );

export const updatePassword = async (data, id, token) =>
  await axios.patch(`${import.meta.env.VITE_APP_API}/users/reset-pass/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
