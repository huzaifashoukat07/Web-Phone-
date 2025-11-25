import React from "react";
import { useNavigate } from "react-router-dom";
import { PhoneOutlined, MessageOutlined } from "@ant-design/icons";
import { Space } from "antd";
import "./index.scss";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Space className="sidebar-wrapper" direction="vertical" align="center">
      <div className="phone-icon-wrapper">
        <PhoneOutlined className="phone-icon" /> Call
      </div>
      <MessageOutlined className="message-icon" />
      <div className="message-icon-wrapper">Chat </div>
    </Space>
  );
};

export default Sidebar;
