import React, { useEffect, useState } from "react";
import { Flex, Input } from "antd";
import { Spin, type GetProps } from "antd";
import "./index.scss";
// import type { useEffect } from "react";
import apiService from "../../instances/api";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { checkAuthToken } from "../../layouts/utils/auth";

type OTPProps = GetProps<typeof Input.OTP>;

const Otp: React.FC = () => {
  const location = useLocation();
  const { state } = location.state || {};
  const navigate = useNavigate();
  const onChange: OTPProps["onChange"] = (text: string) => {
    console.log("onChange:", text);
  };

  const onInput: OTPProps["onInput"] = (value: string) => {
    console.log("onInput:", value);
  };
  const sharedProps: OTPProps = {
    onChange,
    onInput,
  };
  const email = localStorage.getItem("email");
  const [otp, setOTP] = useState<string>();
  const [loading, setLoading] = useState<boolean>();

  const generateHexUdid = () => {
    return crypto.randomUUID().replace(/-/g, "").slice(0, 16);
  };
  const handleOTP = (value: string) => {
    setOTP(value);
  };

  const fetchOTP = async () => {
    const udid = generateHexUdid();
    const accessCode = otp;

    const payload = {
      email,
      udid: udid,
      accessCode: otp, // latest otp value
    };
    setLoading(true);
    try {
      const response = await apiService.post(
        "/auth/web/login/accessCode",
        payload
      );
      const { data } = response.data;
      localStorage.setItem("udid", udid);
      localStorage.setItem("access_token", data.access.token);
      localStorage.setItem("refresh_token", data.refresh.token);
      localStorage.setItem("user_id", data.access.user_id);
      toast.success(response.data.message);
      navigate("/dashboard/calls", { replace: true });
    } catch (error: any) {
      let errorMessage = "Invalid OTP";
      if (error.status === 401 && error?.response?.data.allDevices) {
        const loggedInDevices = error?.response?.data?.allDevices;
        navigate("../anotherDevice", {
          state: {
            email,
            udid,
            accessCode,
            deviceId: loggedInDevices,
          },
        });
      } else if (
        error.status === 401 &&
        error.response.data.statusCode === "401"
      ) {
        toast.error(error.response.data.message);
      }
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else if (error.message) {
        errorMessage = error.message;
        toast.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (otp && otp.length === 6) {
      fetchOTP();
    }
  }, [otp]);

  useEffect(() => {
    if (!email) {
      navigate("/auth/login");
    }
  }, [email]);

  useEffect(() => {
    const blockBack = () => {
      navigate("/auth/login", { replace: true });
    };

    window.addEventListener("popstate", blockBack);

    return () => {
      window.removeEventListener("popstate", blockBack);
    };
  }, [navigate]);

  return (
    <div className="otp-container">
      <p className="email-verification-container">Email Verification</p>
      <p className="otp-email-container">
        Enter 6 digits OTP sent to <b className="b-email">{email}</b>{" "}
      </p>

      <Flex gap="middle" align="flex-start" vertical>
        <Input.OTP
          {...sharedProps}
          disabled={loading}
          className={loading ? "otp-loading" : ""}
          value={otp}
          onChange={handleOTP}
        />
      </Flex>

      <p className="">Did'nt recieve OTP code?</p>
    </div>
  );
};
export default Otp;
