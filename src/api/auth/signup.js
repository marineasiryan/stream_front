import axios from "axios";

export const signup = async (user, token) => {
  console.log(user);

  return await axios.post(`${import.meta.env.VITE_APP_API}/auth/signup`, user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const activateAccount = async (hash) =>
  await axios.get(`${import.meta.env.VITE_APP_API}/auth/activate`, {
    params: { hash },
  });
