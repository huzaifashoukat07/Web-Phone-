import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_V5_API_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    },
  }),
  endpoints: (builder) => ({
    getChats: builder.query<unknown, any>({
      query: (params) => ({ url: "chat/new-conversation-list", params }),
    }),
  }),
});
export const { useGetChatsQuery } = chatApi;
