import React, { useEffect } from "react";
import "./index.scss";
import BackgroundImage from "../../components/backgroundImage";
import { Outlet, useNavigate } from "react-router-dom";

const AuthLayout: React.FC = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");
  const email = localStorage.getItem("email");

  useEffect(() => {
    if (accessToken && refreshToken) {
      navigate("/calls");
    }
  }, []);

  return (
    <div className="auth-container">
      <div className="left-side">
        <div className="title-container">
          <div className="welcome-title">
            Welcome to{" "}
            <span className="efone-container">
              <span className="efone-container1">e</span>Fone
            </span>
          </div>
          <Outlet />
        </div>
      </div>
      <BackgroundImage />
    </div>
  );
};

export default AuthLayout;
