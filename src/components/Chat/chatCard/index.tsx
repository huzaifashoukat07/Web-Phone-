import React from "react";
import { setCurrentChat, type Chat } from "../../../redux/slices/chatSlice";
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
import { useAppDispatch } from "../../../redux/store";
import moment from "moment";
import "./index.scss";

interface ChatCardProps {
  chat: Chat;
}

const { Text, Title } = Typography;

const ChatCard: React.FC<ChatCardProps> = ({ chat }) => {
  const dispatch = useAppDispatch();
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

  const showDetail = () => {
    console.log("show detail");
    // console.log(chat?._id);
    // console.log(chat?.groupName || chat?.sourceUserName);
    // if (chat?.isGroup) {
    //   console.log("This is a group chat");
    // } else if (chat?.isBroadCast) {
    //   console.log("This is a broadcast chat");
    // } else {
    //   console.log("This is a simple chat");
    // }
    dispatch(setCurrentChat(chat));
  };

  return (
    <div className="chat-card" onClick={showDetail}>
      <Avatar
        className="avatar"
        src={chat?.isGroup ? chat.groupImage : chat.userProfileImage}
      >
        {chat.isBroadCast ? (
          <BsMegaphoneFill size={15} />
        ) : chat.groupName ? (
          <BsPeopleFill size={15} />
        ) : chat.secondUserName ? (
          chat.sourceUserName.charAt(0).toUpperCase()
        ) : (
          "?"
        )}
      </Avatar>

      <div className="content">
        <div className="top-row">
          <Title className="name">
            {chat?.secondUserName || chat?.groupName}
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
