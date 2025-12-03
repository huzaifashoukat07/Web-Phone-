import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Define the actual chat structure from your API
export interface Chat {
  id: string;
  sourceUserName?: string;
  sourceNumber?: string;
  groupName?: string;
  name?: string;
  phoneNumber?: string;
  lastMessage?: string;
  messageBody?: string;
  body?: string;
  date?: string;
  time?: string;
  timeStamp?: string;
  isUnread?: boolean;
  isArchived?: string;
  [key: string]: unknown;
}

interface ChatState {
  chats: Chat[];
  archivedChats: Chat[];
  currentChat: Chat | null;
}

const initialState: ChatState = {
  chats: [],
  archivedChats: [],
  currentChat: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChat: (state, action: PayloadAction<Chat[]>) => {
      state.chats = action.payload || state.chats;
    },
    setArchivedChats: (state, action: PayloadAction<Chat[]>) => {
      state.archivedChats = action.payload || state.archivedChats;
    },
    setCurrentChat: (state, action: PayloadAction<Chat | null>) => {
      state.currentChat = action.payload;
    },
  },
});

export const { setChat, setArchivedChats, setCurrentChat } = chatSlice.actions;
export default chatSlice.reducer;
