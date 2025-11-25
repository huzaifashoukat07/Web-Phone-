import React from "react";
import moment from "moment";
import { Avatar, Flex, Typography } from "antd";
import "./index.scss";

interface OtherDeviceCardsProps {
  name: string;
  lastLogin: string | null;
}
const { Text, Title } = Typography;
const OtherDeviceCard: React.FC<OtherDeviceCardsProps> = ({
  name,
  lastLogin,
}) => {
  const formateLastLogin = moment(lastLogin ?? new Date()).format(
    "MMMM Do YYYY, h:mm A"
  );
  return (
    <div className="other-device-card">
      <Avatar />
      <Flex vertical>
        <Title level={5} className="device-name">
          {name}
        </Title>
        <Text className="last-active">Last active: {formateLastLogin}</Text>
      </Flex>
    </div>
  );
};
export default OtherDeviceCard;
