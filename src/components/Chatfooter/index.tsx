import React, { useEffect } from "react";
import "./index.scss";
import {
  ScheduleOutlined,
  PlusOutlined,
  AudioOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

const Chatfooter: React.FC = () => {
  const currentChat = useSelector((state: RootState) => state.chat.currentChat);
  useEffect(() => {
    setMessage("");
  }, [currentChat?._id]);

  const [message, setMessage] = React.useState<string>("");
  return (
    <div className="chat-footer">
      <textarea
        name="message"
        className="chat-input"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
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
