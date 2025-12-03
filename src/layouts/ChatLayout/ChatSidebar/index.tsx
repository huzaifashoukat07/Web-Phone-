/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import "./index.scss";
import ChatCard from "../../../components/Chat/chatCard";
// import { dummyChats, type ChatItem } from "../../../data/interface/dummychat";
import { Input, Divider, Radio, List } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import type { RadioChangeEvent, TabsProps } from "antd";
import { useGetChatsQuery } from "../../../redux/services/chatApi";
import { useAppDispatch, type RootState } from "../../../redux/store";
// import { useSelector } from "react-redux";
import { setArchivedChats, setChat } from "../../../redux/slices/chatSlice";
import { useSelector } from "react-redux";

const ChatSidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetChatsQuery({});
  const { chats } = useSelector((state: RootState) => state.chat);
  const [tabPlacement, setTabPlacement] =
    useState<TabsProps["tabPlacement"]>("start");

  const changeTabPlacement = (e: RadioChangeEvent) => {
    setTabPlacement(e.target.value);
  };

  useEffect(() => {
    if (data) {
      const chats = data?.newCnv?.docs?.[0]?.conversationList;

      const simpleChats = chats.filter((item: any) => item?.isArchived === "2");
      dispatch(setChat(simpleChats));

      const archivedChats = chats.filter(
        (item: any) => item?.isArchived === "1"
      );
      dispatch(setArchivedChats(archivedChats));
    }
  }, [dispatch, data]);

  return (
    <div className="chat-layout-container" style={{ maxWidth: 449.6 }}>
      <div className="main-title-container">
        <div className="title-container">
          <p className="chat-text-container">Chats</p>
          <button className="add-button">
            <PlusOutlined />
          </button>
        </div>
        <Input size="large" placeholder="Search" prefix={<SearchOutlined />} />

        <div className="tabs-container">
          <Radio.Group value={tabPlacement} onChange={changeTabPlacement}>
            <Radio.Button value="all">All</Radio.Button>
            <Radio.Button value="group">Group</Radio.Button>
            <Radio.Button value="broadcast">Broadcast</Radio.Button>
          </Radio.Group>
        </div>
        <Divider />
      </div>
      <div className="list-container">
        <List
          itemLayout="horizontal"
          dataSource={chats || []}
          loading={isLoading}
          style={{ overflowX: "hidden", maxWidth: 449.6 }}
          renderItem={(chat: any) => (
            <List.Item>
              {" "}
              {/* remove List.Item padding */}
              <ChatCard chat={chat} />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ChatSidebar;
