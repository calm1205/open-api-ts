import axios from "axios";

export const userApi = {
  /** ログインユーザーを取得 */
  me: async () => {
    try {
      const response = await axios.get(
        `http://local1.clm.localhost:5173/api/v2/user/me`
      );
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.status !== 401) {
        console.error("me", error);
      }
      throw error;
    }
  },
};
