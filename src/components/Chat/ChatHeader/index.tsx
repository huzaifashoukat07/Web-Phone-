import { Avatar } from "antd";
import React from "react";
import "./index.scss";
import { PhoneOutlined } from "@ant-design/icons";

const ChatHeader: React.FC = () => {
  return (
    <header className="chatBox-header">
      <div className="avatar-chat-box">
        <Avatar>N</Avatar>
      </div>
      <div className="header-info">
        <p className="header-name">Name</p>
        <p className="header-group-members">9 Memebers</p>
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
