import React from "react";
import type { Chat } from "../../../redux/slices/chatSlice";
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
import { BsMegaphoneFill, BsPeopleFill } from "react-icons/bs";
import moment from "moment";
import "./index.scss";

interface ChatCardProps {
  chat: Chat;
}

const { Text, Title } = Typography;

const ChatCard: React.FC<ChatCardProps> = ({ chat }) => {
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

  const date = chat?.lastUpdateToSort;

  return (
    <div className="chat-card">
      <Avatar
        className="avatar"
        src={chat.isGroup ? chat.groupImage : chat.userProfileImage}
      >
        {chat.isBroadcast ? (
          <BsMegaphoneFill size={15} />
        ) : chat.groupName ? (
          <BsPeopleFill size={15} />
        ) : chat.sourceUserName ? (
          chat.sourceUserName.charAt(0).toUpperCase()
        ) : (
          "?"
        )}
      </Avatar>

      <div className="content">
        <div className="top-row">
          <Title className="name">
            {chat?.sourceUserName || chat?.groupName}
          </Title>

          <div className="date-dropdown-container">
            <Text className="date">{moment(date).format("YYYY-MM-DD")}</Text>

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
            <Text className="message" s>
              {chat.lastMessage}
            </Text>

            <div className="time-container">
              <Text className="time">{moment(date).format("hh:mm A")}</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
