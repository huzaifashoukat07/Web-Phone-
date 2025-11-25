import React from "react";
import { Typography } from "antd";
import "./index.scss";

const { Title, Text } = Typography;
const BackgroundImage: React.FC = () => {
  return (
    <div className="authPage-backgroundImage">
      <div className="contentContainer">
        <h3 className=" efone-tittle">About eFone</h3>
        <Text className="efone-tittle-description">
          Efone is a modern VoIP-based communication platform designed for{" "}
          seamless, high-quality voice calling and instant messaging over the{" "}
          internet. Whether you are connecting locally or globally.Efone offer
          audio, secure chat and real time Communication features.
        </Text>
        <div className="features-container">
          <h3 className="features-title">Features</h3>
          <ul className="features-list">
            <li>
              <Text className="features-list1">
                <span className=" features-heading">HD VoIP Calling:</span> Make
                high-quality voice calls anywhere the world using Wi-Fi or
                mobile data.
              </Text>
            </li>
            <li>
              <Text className="features-list1">
                {" "}
                <span className=" features-heading">Cross platform: </span>{" "}
                Available on both mobile and web devices for maximum flexibility
              </Text>
            </li>

            <li>
              <Text className="features-list1">
                <span className=" features-heading"> Instant Messaging :</span>{" "}
                Available on both mobile and web devices for maximum flexibility
              </Text>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BackgroundImage;
