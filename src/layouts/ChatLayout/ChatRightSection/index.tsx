import React from "react";
import ChatHeader from "../../../components/Chat/ChatHeader";
import "./index.scss";
import Chatfooter from "../../../components/Chatfooter";

const ChatRightSection: React.FC = () => {
  return (
    <div className="chat-right-section">
      <ChatHeader />
      <div className=" chat-body"></div>
      <Chatfooter />
    </div>
  );
};

export default ChatRightSection;
