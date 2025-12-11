import { Avatar } from "antd";
import React from "react";
import "./index.scss";
import { PhoneOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { BsMegaphoneFill, BsPeopleFill } from "react-icons/bs";

const ChatHeader: React.FC = () => {
  const currentChat = useSelector((state: RootState) => state.chat.currentChat);

  return (
    <header className="chatBox-header">
      <div className="avatar-chat-box">
        <Avatar
          src={
            currentChat?.isGroup
              ? currentChat.groupImage
              : currentChat?.userProfileImage
          }
        >
          {currentChat?.isBroadCast ? (
            <BsMegaphoneFill size={15} />
          ) : currentChat?.groupName ? (
            <BsPeopleFill size={15} />
          ) : currentChat?.sourceUserName ? (
            currentChat.sourceUserName.charAt(0).toUpperCase()
          ) : (
            "?"
          )}
        </Avatar>
      </div>
      <div className="header-info">
        <p className="header-name">
          {currentChat?.isGroup
            ? currentChat?.groupName
            : currentChat?.isBroadCast
              ? currentChat?.groupName
              : currentChat?.sourceUserName}
        </p>
        <p className="header-group-members">
          {currentChat?.isGroup
            ? currentChat?.groupMembers.length + " members"
            : currentChat?.isBroadCast
              ? currentChat?.broadCastMembers.length + " members"
              : currentChat?.sourceNumber}
        </p>
      </div>

      <div className="button-wrapper">
        <button className="call-button">
          <span className="phone-icon">
            <PhoneOutlined />
          </span>
        </button>
      </div>
    </header>
  );
};

export default ChatHeader;
