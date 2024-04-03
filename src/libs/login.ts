import axios from "axios";

const email = "tarou.yamada@example.com";
const password = "9Km3u^6l3B&U4k!DqMvM";
const endpoint = `http://local1.clm.localhost:5173/api/v2/authentication`;
const body = `email=${encodeURIComponent(email)}&password=${encodeURIComponent(
  password
)}`;

export const login = async () => {
  try {
    const response = await axios.post(endpoint, body, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Login error", error);
    throw error;
  }
};
