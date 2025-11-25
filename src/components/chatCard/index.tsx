import React from "react";
import type { ChatItem } from "../../data/interface/dummychat";
import { Avatar, Typography } from "antd";
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

  return (
    <div className="chat-card">
      <Avatar className="avatar">{avatarWords(chat.fullName)}</Avatar>

      <div className="content">
        <div className="top-row">
          <Title className="name">{chat.fullName}</Title>
          <Text className="date">{chat.date}</Text>
        </div>

        <div className="message-section">
          <div className="message-time-row">
            <Text className="message">{chat.lastMessage}</Text>
            <Text className="time">{chat.time}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
