import React from "react";
import { Avatar } from "antd";
import { MessageOutlined, PhoneOutlined } from "@ant-design/icons";
import type { CallItem } from "../../data/interface/types";
import "./index.scss";

const avatarWords = (name: string) => {
  const parts = name.split(" ");
  const firstLetters = parts.map((word) => word && word[0]);
  return firstLetters.join("").toUpperCase();
};

interface CallsProps {
  call: CallItem;
  onCallClick: (number: string) => void;
}

const Calls: React.FC<CallsProps> = ({ call, onCallClick }) => {
  return (
    <div className="callcard">
      <Avatar>{avatarWords(call.fullName)}</Avatar>
      <div className="call-tittle-container">
        <div className="callcard-name">
          {call.fullName}
          {call.iseFone2eFone && <div className="callcard-isFree">Free</div>}
        </div>
        <div className="callcard-number">{call.destinationNumber}</div>
        <div className="callcard-time">
          {call.callStatus ? (
            <div className="missedCall">Missed Call {call.date}</div>
          ) : (
            <div>Incoming Call {call.date}</div>
          )}
        </div>
      </div>

      <div className="messageIcon-callcard">
        {<MessageOutlined />}
        <button
          className="phoneIcon-callcard"
          onClick={() => onCallClick(call.destinationNumber)}
        >
          {<PhoneOutlined />}
        </button>
      </div>
    </div>
  );
};
export default Calls;
