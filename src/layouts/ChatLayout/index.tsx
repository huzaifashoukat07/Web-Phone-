import React from "react";
import ChatSidebar from "./ChatSidebar";
import ChatRightSection from "./ChatRightSection";
import "./index.scss";
const ChatLayout: React.FC = () => {
  return (
    <div className="chatlayout-container">
      <ChatSidebar />
      <ChatRightSection />
    </div>
  );
};

export default ChatLayout;
