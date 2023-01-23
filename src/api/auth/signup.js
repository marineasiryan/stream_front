import axios from "axios";

export const signup = async (user, token) => {

  return await axios.post(`${import.meta.env.VITE_APP_API}/api/auth/signup`, user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const activateAccount = async (hash) =>
  await axios.get(`${import.meta.env.VITE_APP_API}/api/auth/activate`, {
    params: { hash },
  });
