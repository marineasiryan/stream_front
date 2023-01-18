import axios from "axios";

export const forgotPassword = async (user) =>
  await axios.post(`${import.meta.env.VITE_APP_API}/auth/forgot-pass`, user);

export const reset_password = async (passData, hash) => {
  return await axios.patch(
    `${import.meta.env.VITE_APP_API}/auth/reset-pass`,
    { ...passData },
    {
      params: { hash },
    }
  );
};
