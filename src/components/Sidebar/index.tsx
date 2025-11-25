import React from "react";
import { useNavigate } from "react-router-dom";
import { PhoneOutlined, MessageOutlined } from "@ant-design/icons";
import "./index.scss";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const goToCall = () => {
    navigate("/calls");
  };

  const goToChat = () => {
    navigate("/chats");
  };

  return (
    <div className="sidebar-wrapper">
      <div className="icon-wrapper" onClick={goToCall}>
        <PhoneOutlined className="icon" />
        <span className="icon-text">Call</span>
      </div>
      <div className="icon-wrapper" onClick={goToChat}>
        <MessageOutlined className="icon" />
        <span className="icon-text">Chat</span>
      </div>
    </div>
  );
};

export default Sidebar;
