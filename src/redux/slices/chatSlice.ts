import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { replace } from "react-router-dom";

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
  lastUpdateToSort?: string;
  isGroup?: boolean;
  isBroadCast?: boolean;
  groupImage?: string;
  userProfileImage?: string;
}

interface ChatState {
  chats: Chat[];
  archivedChats: Chat[];
  currentChat: Chat | null;
  messagesList: any;
}

const initialState: ChatState = {
  chats: [],
  archivedChats: [],
  currentChat: null,
  messagesList: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChat: (state, action: PayloadAction<Chat[]>) => {
      state.chats = action.payload || state.chats;
    },
    setMessagesList: (state, action: PayloadAction<any>) => {
      state.messagesList = action.payload;
    },
    addPreviousMessages: (state, action: PayloadAction<any>) => {
      state.messagesList = { ...action.payload, ...state.messagesList };
    },
    addNewMessage: (state, action: PayloadAction<any>) => {
      state.messagesList = { ...state.messagesList, ...action.payload };
    },
    replaceNewMessage(state, action: PayloadAction<any>) {
      const lastIndex = state.messagesList.length - 1;
      if (state.messagesList[lastIndex]?.isTempMsg) {
        state.messagesList[lastIndex] = action.payload;
      }
    },
    removeLastMsg(state) {
      state.messagesList = state.messagesList.slice(0, -1);
    },
    setArchivedChats: (state, action: PayloadAction<Chat[]>) => {
      state.archivedChats = action.payload || state.archivedChats;
    },
    setCurrentChat: (state, action: PayloadAction<Chat | null>) => {
      state.currentChat = action.payload;
    },
  },
});

export const {
  setChat,
  setArchivedChats,
  setCurrentChat,
  setMessagesList,
  addPreviousMessages,
  addNewMessage,
  replaceNewMessage,
  removeLastMsg,
} = chatSlice.actions;
export default chatSlice.reducer;
