import React, { useState } from "react";
import "./index.scss";
import ChatCard from "../../../components/Chat/chatCard";
import { dummyChats, type ChatItem } from "../../../data/interface/dummychat";
import { Input, Divider, Radio, List } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import type { RadioChangeEvent, TabsProps } from "antd";

const ChatSidebar: React.FC = () => {
  const [tabPlacement, setTabPlacement] =
    useState<TabsProps["tabPlacement"]>("start");

  const changeTabPlacement = (e: RadioChangeEvent) => {
    setTabPlacement(e.target.value);
  };
  return (
    <div className="chat-layout-container">
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
          dataSource={dummyChats}
          renderItem={(chat: ChatItem) => (
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
