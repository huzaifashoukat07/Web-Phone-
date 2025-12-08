import React from "react";
import "./index.scss";
import {
  ScheduleOutlined,
  PlusOutlined,
  AudioOutlined,
} from "@ant-design/icons";

const Chatfooter: React.FC = () => {
  return (
    <div className="chat-footer">
      <textarea
        name="message"
        className="chat-input"
        placeholder="Type a message..."
      ></textarea>

      {/* Button container */}
      <div className="chat-footer-buttons">
        <div className="chat-action-buttons">
          <button className="action-button">
            <ScheduleOutlined />
          </button>
          <button className="action-button">
            <PlusOutlined />
          </button>
          <button className="action-button">
            <AudioOutlined />
          </button>
        </div>
        <button className="send-button">Send</button>
      </div>
    </div>
  );
};

export default Chatfooter;
