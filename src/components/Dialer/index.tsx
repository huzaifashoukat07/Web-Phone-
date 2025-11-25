import React from "react";
import { Button, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Numpad from "../Numpad/index";
import "./index.scss";

interface DialerProps {
  phoneNumber: string;
  setPhoneNumber: (num: string) => void;
}

const Dialer: React.FC<DialerProps> = ({ phoneNumber, setPhoneNumber }) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleNumberClick = (number: string) => {
    setPhoneNumber(phoneNumber + number);
  };

  return (
    <div className="dialer-wrapper">
      <div className="dialer-title">
        Your Dialer ID displays as{" "}
        <Select
          defaultValue="+97150123456"
          onChange={handleChange}
          bordered={false}
          options={[
            { value: "+97150123456", label: "+97150123456" },
            { value: "+9715612348", label: "+9715612348" },
          ]}
        />
      </div>

      <Input
        className="input-number-wrapper"
        prefix={<SearchOutlined className="search-icon" />}
        size="large"
        placeholder="Type a name or number..."
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <div className="numpad-wrapper">
        <Numpad onNumberClick={handleNumberClick} />

        <div className="calls-button-wrapper">
          <Button className="efone-call-Button" type="primary" size="large">
            eFone Call
          </Button>
          <Button className="call-Button" type="primary" size="large">
            Call
            <span className="cost-call-button">0.12$/min</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dialer;
