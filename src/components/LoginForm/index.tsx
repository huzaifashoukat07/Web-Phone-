import React, { useEffect, useState } from "react";
import { Input, Divider, Form, Spin } from "antd";
import { toast } from "react-toastify";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import apiService from "../../instances/api";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const checkUser = async () => {
    setLoading(true);
    try {
      const response = await apiService.post(`/auth/check/userExists`, {
        email,
      });
      console.log(response);
      console.log(response.data);
      if (response.data.isEmailExists) {
        localStorage.setItem("access_token", response.data.access_token);
        localStorage.setItem("email", email);
        navigate("../otp");
        toast.success(response.data.message);
      } else {
        console.log("Email does not exist");
        toast.error(response.data.message);
      }
    } catch (error: string) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="label-container">Email</div>
      <Form className="button-container">
        <Input
          size="large"
          className="username-input"
          onChange={handleEmail}
          value={email}
          placeholder="jhon@gmail.com"
        />
        <button className="continue-btn" onClick={checkUser} disabled={loading}>
          {loading ? <Spin /> : <span>Continue</span>}
        </button>
        <div>
          <Divider>0R</Divider>{" "}
        </div>
        <button className="phone-btn">Sign in with phone</button>
      </Form>
    </div>
  );
};
export default Login;
