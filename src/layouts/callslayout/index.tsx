import React, { useState } from "react";
import CallsList from "../../components/CallsList";
import Dialer from "../../components/Dialer";

const CallsLayout: React.FC = () => {
  const [selectedNumber, setSelectedNumber] = useState<string>("");

  const handleNumberSelect = (number: string) => {
    setSelectedNumber(number);
  };

  return (
    <>
      <CallsList onCallClick={handleNumberSelect} />

      <Dialer phoneNumber={selectedNumber} setPhoneNumber={setSelectedNumber} />
    </>
  );
};

export default CallsLayout;
