import axios from "axios";

type LoginInput = {
  email: string;
  password: string;
};

export const login = async ({
  email = "tarou.yamada@example.com",
  password = "9Km3u^6l3B&U4k!DqMvM",
}: LoginInput) => {
  const endpoint = `/api/v2/authentication`;

  const body = `email=${encodeURIComponent(
    email
  )}&password=${encodeURIComponent(password)}`;

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
