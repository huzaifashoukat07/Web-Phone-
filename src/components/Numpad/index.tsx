import React from "react";
import { Button } from "antd";
import "./index.scss";
interface NumpadProps {
  onNumberClick: (number: string) => void;
}
const Numpad: React.FC<NumpadProps> = ({ onNumberClick }) => {
  const numbers: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "*",
    "0",
    "#",
  ];

  return (
    <div className="numpad-container">
      {numbers.map((n) => (
        <Button
          className="numpad-button"
          key={n}
          shape="circle"
          size="large"
          onClick={() => onNumberClick(n)}
        >
          {n}
        </Button>
      ))}
    </div>
  );
};

export default Numpad;
