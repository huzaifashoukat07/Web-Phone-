import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import "./index.scss";
import apiService from "../../instances/api";
import OtherDeviceCard from "../OtherDevice";
import { checkAuthToken } from "../../layouts/utils/auth";
import { Spin } from "antd";

const AnotherDevice: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>();
  const { email, accessCode, udid, deviceId } = location.state || {};
  const handleLogOut = async () => {
    const devicestoLogOut = deviceId.map((device) => {
      return device._id;
    });
    setLoading(true);
    try {
      const response = await apiService.post("/auth/web/login/accessCode", {
        email,
        accessCode,
        udid,
        deviceId: devicestoLogOut,
      });
      const { data } = response.data;

      localStorage.setItem("udid", udid);
      localStorage.setItem("access_token", data.access.token);
      localStorage.setItem("refresh_token", data.refresh.token);
      localStorage.setItem("user_id", data.access.user_id);

      toast.success(response.data.message);
      navigate("/", { replace: true });
    } catch (error: any) {
      let errorMessage = "Invalid OTP";

      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!email) {
      navigate("/auth/login");
    }
  }, [email]);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("../login");
    }
  }, [navigate]);
  return (
    <div className="parent-container">
      <h3 className="already-login-conatiner">Already Logged In</h3>
      <p className="description-container">
        Already logged in to other device. To login this device first need to
        logout other device
      </p>
      <div className="button-container1">
        <button className="logout-btn" onClick={handleLogOut}>
          {loading ? <Spin /> : <>Logout Device</>}
        </button>
        <h3 className="other-device-container">
          Other Device Status{" "}
          <div>
            {deviceId?.map((device) => (
              <OtherDeviceCard
                key={device._id}
                name={device.deviceName}
                lastLogin={device.lastLogin}
              />
            ))}
          </div>
        </h3>

        <button className="keep-login-btn">Keep login this device</button>
      </div>
    </div>
  );
};

export default AnotherDevice;
