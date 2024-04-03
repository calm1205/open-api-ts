import axios from "axios";

const email = "tarou.yamada@example.com";
const password = "9Km3u^6l3B&U4k!DqMvM";
const endpoint = `http://local1.clm.localhost:5173/api/v2/authentication`;

export const loginOld = async () => {
  const form = new FormData();
  form.append("email", email);
  form.append("password", password);

  try {
    const response = await axios.post(endpoint, form);

    return response.data;
  } catch (error) {
    console.error("Login error", error);
    throw error;
  }
};
