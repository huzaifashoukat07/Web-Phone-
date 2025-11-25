import React from "react";
import type { ChatItem } from "../../data/interface/dummychat";
import { Avatar, Typography, Dropdown, Space } from "antd";
import type { MenuProps } from "antd";
import {
  DownOutlined,
  DeleteOutlined,
  BlockOutlined,
  FolderOutlined,
  MutedOutlined,
  PushpinOutlined,
} from "@ant-design/icons";
import "./index.scss";

interface ChatCardProps {
  chat: ChatItem;
}

const { Text, Title } = Typography;

const ChatCard: React.FC<ChatCardProps> = ({ chat }) => {
  const avatarWords = (name: string) => {
    const parts = name.split(" ");
    return parts
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  };
  const items: MenuProps["items"] = [
    {
      label: (
        <div className="dropdown-item">
          <MutedOutlined />
          Mute
        </div>
      ),
      key: "0",
    },
    { type: "divider" },

    {
      label: (
        <div className="dropdown-item">
          <BlockOutlined />
          Block
        </div>
      ),
      key: "1",
    },
    { type: "divider" },
    {
      label: (
        <div className="dropdown-item">
          <FolderOutlined />
          Archive
        </div>
      ),
      key: "3",
    },
    { type: "divider" },

    {
      label: (
        <div className="dropdown-item">
          <DeleteOutlined />
          Delete
        </div>
      ),
      key: "4",
      danger: true,
      className: "dropdown-delete",
    },
    { type: "divider" },

    {
      label: (
        <div className="dropdown-item">
          <PushpinOutlined />
          Pin
        </div>
      ),
      key: "5",
    },
  ];

  return (
    <div className="chat-card">
      <Avatar className="avatar">{avatarWords(chat.fullName)}</Avatar>

      <div className="content">
        <div className="top-row">
          <Title className="name">{chat.fullName}</Title>
          <div className="date-dropdown-container">
            <Text className="date">{chat.date}</Text>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>

        <div className="message-section">
          <div className="message-time-row">
            <Text className="message">{chat.lastMessage}</Text>
            <div className="time-container">
              <Text className="time">{chat.time}</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
