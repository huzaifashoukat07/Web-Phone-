import React, { useEffect, useState } from "react";
import { Button, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Numpad from "../Numpad/index";
import "./index.scss";

interface DialerProps {
  phoneNumber?: string;
}

const Dialer: React.FC<DialerProps> = ({ phoneNumber: initialNumber = "" }) => {
  const [inputValue, setInputValue] = useState<string>("");

  // Update input when a number is clicked from the call list
  useEffect(() => {
    if (initialNumber) {
      setInputValue(initialNumber);
    }
  }, [initialNumber]);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  // const handleChangeCallerID = (key: string) => {
  //   const selectedItem = items.find((item) => items.key === key);
  //   if (selectedItem) {
  //     setCallerID(selectedItem.label);
  //   }

  const handleNumberClick = (number: string) => {
    setInputValue((prev) => prev + number);
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
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        allowClear
      />
      <div className="numpad-wrapper">
        <Numpad onNumberClick={handleNumberClick} />
        <div className="calls-button-wrapper">
          <Button
            className="efone-call-Button"
            type="primary"
            shape="rectangle"
            size="large"
          >
            eFone Call
          </Button>
          <Button
            className="call-Button"
            type="primary"
            shape="rectangle"
            size="large"
          >
            Call
            <span className="cost-call-button">0.12$/min</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Dialer;
